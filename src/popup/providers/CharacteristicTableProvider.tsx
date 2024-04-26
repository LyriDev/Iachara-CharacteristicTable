import { createContext, useState, ReactNode } from 'react';
import { CharacteristicTableData, defaultCharacteristicTable, holeData } from '../../utils/characteristicTable';
import { v4 as uuidv4 } from 'uuid';

type ContextInfo = {
    characteristicTableData: CharacteristicTableData[];
    setCharacteristicTableData: React.Dispatch<React.SetStateAction<CharacteristicTableData[]>>;
    addTable(): number;
    removeTable(index: number): void;
    swapTable(index: number, direction: 1 | -1): void;
    changeTabName(index: number, newValue: string): void;
};

const defaultContext: ContextInfo = {
    characteristicTableData: [],
    setCharacteristicTableData: () => {},
    addTable: () => 0,
    removeTable: () => {},
    swapTable: () => {},
    changeTabName: () => {}
};

export const CharacteristicTableContext = createContext<ContextInfo>(defaultContext);

// 特徴表のデータを管理するcontext
export function CharacteristicTableProvider({children}: {children: ReactNode}){
    const [characteristicTableData, setCharacteristicTableData] = useState<CharacteristicTableData[]>(holeData);

    // 新しい特徴表を作成する関数
    function addTable(): number{
        setCharacteristicTableData((prev) => {
            const copiedDefaultTable = [...defaultCharacteristicTable];
            const newData = {
                id: uuidv4(),
                tableName: "特徴表",
                tableData: copiedDefaultTable
            }
            return [...prev, newData];
        })
        return characteristicTableData.length;
    }

    // 指定された特徴表を削除する関数
    function removeTable(index: number){
        setCharacteristicTableData((prev) => {
            return prev.filter((_, i) => i !== index);;
        })
    }

    // 指定された特徴表のindexを+1/-1する関数
    function swapTable(index: number, direction: 1 | -1){
        // 配列の要素を1つ右か左に入れ替えた際のindexを求める
        const nextIndex: number = index + direction;
        if((0 > nextIndex) || (characteristicTableData.length <= nextIndex)){
            // 配列の一番左/右の要素は、配列の外になってしまうようなindexに設定できない
            throw new Error("これ以上は配列を動かせません");
        }

        // 指定された配列の要素を1つ隣と入れ替える
        setCharacteristicTableData((prev) => {
            const newTableData: CharacteristicTableData[] = [...prev];
            const temp: CharacteristicTableData = {...newTableData[index]};
            newTableData[index] = {...newTableData[nextIndex]};
            newTableData[nextIndex] = temp;
            return newTableData;
        })
    }

    // 指定されたタブ名を変更する関数
    function changeTabName(index: number, newValue: string){
        setCharacteristicTableData((prev) => {
            const copiedTable = [...prev];
            copiedTable[index].tableName = newValue;
            return copiedTable;
        })
    }

    return (
        <CharacteristicTableContext.Provider
                value={{
                    characteristicTableData,
                    setCharacteristicTableData,
                    addTable,
                    removeTable,
                    swapTable,
                    changeTabName
                }}
        >
            {children}
        </CharacteristicTableContext.Provider>
    );
}

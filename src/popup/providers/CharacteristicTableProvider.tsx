import { createContext, useState, ReactNode } from 'react';
import { CharacteristicTableData, defaultCharacteristicTable, holeData } from '../../utils/characteristicTable';
import { v4 as uuidv4 } from 'uuid';

type ContextInfo = {
    characteristicTableData: CharacteristicTableData[];
    setCharacteristicTableData: React.Dispatch<React.SetStateAction<CharacteristicTableData[]>>;
    addTable(): number;
    removeTable(index: number): void;
    swapTable(index: number, direction: 1 | -1): void;
    changeTableName(index: number, newValue: string): void;
    changeTableData(focusIndex: number, parentIndex: number, childIndex: number, newValue: string): void;
};

const defaultContext: ContextInfo = {
    characteristicTableData: [],
    setCharacteristicTableData: () => {},
    addTable: () => 0,
    removeTable: () => {},
    swapTable: () => {},
    changeTableName: () => {},
    changeTableData: () => {}
};

export const CharacteristicTableContext = createContext<ContextInfo>(defaultContext);

// 特徴表のデータを管理するcontext
export function CharacteristicTableProvider({children}: {children: ReactNode}){
    const [characteristicTableData, setCharacteristicTableData] = useState<CharacteristicTableData[]>(holeData);

    // 新しい特徴表を作成する関数
    function addTable(): number{
        setCharacteristicTableData((prev) => {
            // const defaultTable = [...defaultCharacteristicTable];
            const defaultTable: string[][] = Array.from({ length: 6 }, () => Array(10).fill(""));

            const newData = {
                id: uuidv4(),
                tableName: "特徴表",
                tableData: defaultTable
            }
            return [...prev, newData];
        })
        return characteristicTableData.length;
    }

    // 指定された特徴表を削除する関数
    function removeTable(index: number){
        if(characteristicTableData.length <= 1) throw new Error("これ以上タブを削除できません");

        const checkText: string = `「${characteristicTableData[index].tableName}」を本当に削除しますか？`
        const shouldDelete: boolean = window.confirm(checkText);
        if(shouldDelete){
            setCharacteristicTableData((prev) => {
                return prev.filter((_, i) => i !== index);;
            })
        }
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
    function changeTableName(index: number, newValue: string){
        setCharacteristicTableData((prev) => {
            const copiedTable = [...prev];
            copiedTable[index].tableName = newValue;
            return copiedTable;
        })
    }

    // 指定された特徴表を編集する関数
    function changeTableData(focusIndex: number, parentIndex: number, childIndex: number, newValue: string){
        setCharacteristicTableData((prev) => {
            const copiedTable = [...prev];
            copiedTable[focusIndex].tableData[parentIndex][childIndex] = newValue;
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
                    changeTableName,
                    changeTableData
                }}
        >
            {children}
        </CharacteristicTableContext.Provider>
    );
}

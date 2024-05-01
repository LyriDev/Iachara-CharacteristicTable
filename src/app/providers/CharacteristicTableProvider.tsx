import { useState, createContext, ReactNode } from 'react';
import { CharacteristicTableData } from '../../utils/characteristicTable';

type ContextInfo = {
    characteristicTableData: CharacteristicTableData[];
    getTableData(): string;
    tableIndex: number;
    setTableIndex: React.Dispatch<React.SetStateAction<number>>;
    parentIndex: number | null;
    setParentIndex: React.Dispatch<React.SetStateAction<number | null>>;
    childIndex: number | null;
    setChildIndex: React.Dispatch<React.SetStateAction<number | null>>;
};

const defaultContext: ContextInfo = {
    characteristicTableData: [],
    getTableData: () => "",
    tableIndex: 0,
    setTableIndex: () => {},
    parentIndex: null,
    setParentIndex: () => {},
    childIndex: null,
    setChildIndex: () => {},
};

export const CharacteristicTableContext = createContext<ContextInfo>(defaultContext);

// 特徴表のデータを管理するcontext
export function CharacteristicTableProvider({
    characteristicTableData,
    children
}: {
    characteristicTableData: CharacteristicTableData[];
    children: ReactNode;
}){
    const [tableIndex, setTableIndex] = useState<number>(0);
    const [parentIndex, setParentIndex] = useState<number | null>(null);
    const [childIndex, setChildIndex] = useState<number | null>(null);

    // 現在指定されている特徴表の結果を取得する関数
    function getTableData(): string{
        if(parentIndex !== null && childIndex !== null){
            return characteristicTableData[tableIndex].tableData[parentIndex][childIndex];
        }else{
            return "";
        }
    }

    return (
        <CharacteristicTableContext.Provider
                value={{
                    characteristicTableData,
                    getTableData,
                    tableIndex,
                    setTableIndex,
                    parentIndex,
                    setParentIndex,
                    childIndex,
                    setChildIndex
                }}
        >
            {children}
        </CharacteristicTableContext.Provider>
    );
}

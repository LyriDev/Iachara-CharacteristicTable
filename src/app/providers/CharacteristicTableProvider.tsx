import { useState, createContext, ReactNode } from 'react';
import { CharacteristicTableData } from '../../utils/characteristicTable';

type ContextInfo = {
    characteristicTableData: CharacteristicTableData[];
    tableIndex: number;
    setTableIndex: React.Dispatch<React.SetStateAction<number>>;
    parentIndex: number;
    setParentIndex: React.Dispatch<React.SetStateAction<number>>;
    childIndex: number;
    setChildIndex: React.Dispatch<React.SetStateAction<number>>;
};

const defaultContext: ContextInfo = {
    characteristicTableData: [],
    tableIndex: 0,
    setTableIndex: () => {},
    parentIndex: 0,
    setParentIndex: () => {},
    childIndex: 0,
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
    const [parentIndex, setParentIndex] = useState<number>(0);
    const [childIndex, setChildIndex] = useState<number>(0);

    return (
        <CharacteristicTableContext.Provider
                value={{
                    characteristicTableData,
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

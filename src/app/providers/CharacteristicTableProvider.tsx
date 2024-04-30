import { createContext, ReactNode } from 'react';
import { CharacteristicTableData } from '../../utils/characteristicTable';

type ContextInfo = {
    characteristicTableData: CharacteristicTableData[];
};

const defaultContext: ContextInfo = {
    characteristicTableData: []
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
    return (
        <CharacteristicTableContext.Provider
                value={{
                    characteristicTableData
                }}
        >
            {children}
        </CharacteristicTableContext.Provider>
    );
}

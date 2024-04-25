import { createContext, useState, ReactNode } from 'react';
import { CharacteristicTableData, holeData } from '../../utils/characteristicTable';

type ContextInfo = {
    characteristicTableData: CharacteristicTableData;
    setCharacteristicTableData: React.Dispatch<React.SetStateAction<CharacteristicTableData>>
};

const defaultContext: ContextInfo = {
    characteristicTableData: [],
    setCharacteristicTableData: () => {}
};

export const CharacteristicTableContext = createContext<ContextInfo>(defaultContext);

// 特徴表のデータを管理するcontext
export function CharacteristicTableProvider({children}: {children: ReactNode}){
    const [characteristicTableData, setCharacteristicTableData] = useState<CharacteristicTableData>(holeData);

    return (
        <CharacteristicTableContext.Provider
                value={{
                    characteristicTableData,
                    setCharacteristicTableData
                }}
        >
            {children}
        </CharacteristicTableContext.Provider>
    );
}

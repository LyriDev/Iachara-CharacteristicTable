import { ReactNode } from 'react';
import { CharacteristicTableProvider } from "./CharacteristicTableProvider"

export default function Providers({children}: {children: ReactNode}){
    return (
        <CharacteristicTableProvider>
            {children}
        </CharacteristicTableProvider>
    )
}

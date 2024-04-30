import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./../MuiTheme";
import { CharacteristicTableProvider } from './CharacteristicTableProvider';
import { CharacteristicTableData } from '../../utils/characteristicTable';

export default function Providers({
    characteristicTableData,
    children
}: {
    characteristicTableData: CharacteristicTableData[];
    children: ReactNode;
}){
    return (
        <ThemeProvider theme={theme}>
            <CharacteristicTableProvider characteristicTableData={characteristicTableData}>
                {children}
            </CharacteristicTableProvider>
        </ThemeProvider>
    )
}

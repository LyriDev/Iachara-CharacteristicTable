import { ReactNode } from 'react';
import { CharacteristicTableProvider } from "./CharacteristicTableProvider"
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./../MuiTheme";

export default function Providers({children}: {children: ReactNode}){
    return (
        <ThemeProvider theme={theme}>
            <CharacteristicTableProvider>
                {children}
            </CharacteristicTableProvider>
        </ThemeProvider>
    )
}

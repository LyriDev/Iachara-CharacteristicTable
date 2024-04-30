import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from "./../MuiTheme";

export default function Providers({children}: {children: ReactNode}){
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}

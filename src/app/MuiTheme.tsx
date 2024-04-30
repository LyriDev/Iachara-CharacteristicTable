import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: "#3a3f44" // プライマリーカラーを灰色に設定
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    "&:hover":{
                        backgroundColor: "#32373b"
                    },
                    "&:active": {
                        backgroundColor: "#272a2d"
                    }
                }
            }
        }
    }
});

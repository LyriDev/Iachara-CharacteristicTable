import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            // プライマリーカラーを灰色に設定
            main: "#3a3f44",
            light: "#32373b",
            dark: "#272a2d"
        },
        warning: {
            main: "#ed544f",
            light: "#CD4944",
            dark: "#9E3835"
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
                    },
                    "&.MuiButton-colorWarning:hover":{
                        backgroundColor: "#CD4944"
                    },
                    "&.MuiButton-colorWarning:active": {
                        backgroundColor: "#9E3835"
                    }
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    color: "#fff",
                    backgroundColor: "#3a3f44",
                    border: "1px solid rgb(112, 112, 112)"
                }
            }
        },
        MuiMenuItem: {
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
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    // color: "#fff",
                    backgroundColor: "#202328",
                    borderRadius: "4px"
                }
            }
        }
    }
});

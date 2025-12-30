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
                    }
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    color: "white",
                    borderRadius: "4px",
                    width: "38px",
                    height: "38px",
                    "&.MuiIconButton-colorPrimary":{
                        backgroundColor: "#3a3f44",
                        border: "1px #3a3f44 solid"
                    },
                    "&.MuiIconButton-colorPrimary:hover":{
                        backgroundColor: "#32373b"
                    },
                    "&.MuiIconButton-colorPrimary:active": {
                        backgroundColor: "#272a2d"
                    },
                    "&.MuiIconButton-colorWarning":{
                        backgroundColor: "#ed544f",
                        border: "1px #ed544f solid"
                    },
                    "&.MuiIconButton-colorWarning:hover":{
                        backgroundColor: "#CD4944"
                    },
                    "&.MuiIconButton-colorWarning:active": {
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
                    // color: "#3a3f44",
                    backgroundColor: "#fff",
                    borderRadius: "4px"
                }
            }
        }
    }
});

import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: "#fff" // プライマリーカラーを白色に設定
        },
        secondary: {
            main: "rgba(0,0,0,0)" // セカンダリーカラーを無色に設定
        },
        info: {
            main: "#2196F3" // インフォメーションカラーを青色に設定
        },
        action: {
            hover: "rgba(255, 255, 255, 0.08)"
        }
    },
    typography: {
        button: {
            textTransform: "none",
            fontWeight: 'bold'
        },
    },
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    color: '#bdbdbd', // 非アクティブなタブの文字色を指定
                },
            },
        },
        MuiTabs: {
            styleOverrides: {
                indicator: {
                    backgroundColor: '#f50057', // 下線の色を赤に設定
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    color: "#fff",
                    backgroundColor: "rgba(44, 44, 44, 0.87)" // Menuコンポーネントの背景色を設定
                }
            },
        },
        // TextField 関連のコンポーネントのスタイルを調整する
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    color: "#fff",
                    padding: "0"
                },
                input: {
                    padding: "6px 12px"
                }
            }
        }
    }
});

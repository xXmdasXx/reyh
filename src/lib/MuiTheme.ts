import { createTheme } from "@mui/material/styles";

const mui_themes = {
    light: createTheme({
        direction: 'rtl',
        typography: {
            fontFamily: 'IRANSansWeb'
        },
        palette: {
            primary: {
                main: '#1529E3',
                light: '#4D88FF'
            },
            secondary: {
                main: '#BB19DF',
                light: 'rgba(204, 32, 213, 0.72)'
            },        
            background: {
                default: '#030234'
            },
            text: {
                primary: '#FFFFFF',
                secondary: '#E4E4E4'
            }
        }
    }),
    dark: createTheme({
        direction: 'rtl',
        palette: {
            primary: {
                main: '#1529E3'
            },
            secondary: {
                main: '#BB19DF'
            },
            background: {
                default: '#030234'
            },
            text: {
                primary: '#E4E4E4',
                secondary: '#E4E4E4'
            }
        }

    })
}

export default mui_themes;
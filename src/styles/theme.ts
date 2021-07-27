import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
    colors: {
        dark_grayish: {
            "900": "#151A1B",
            "800": "#1C2324",
            "700": "#232C2D",
            "600": "#47585B",
            "500": "#2A3436",
            "400": "#313D3F",
            "300": "#384648",
            "200": "#3F4F51",
            "100": "#6B797B",
            "50": "#909A9C",
        },
        white: {
            "50": "#F5F8FA",
        },
        gray:{
            "50": "#DADADA",
        },
        yellow:{
            "50": "#FFBA08",
        },
    },
    fonts: {
        heading: 'Poppins',
        body: 'Poppins',
    },
    styles: {
        global: {
            body: {
                bg: "#F8F8FF",
            }
        }
    },
})
import { createMuiTheme, fade } from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#8E4861',
            light: fade('#8E4861', 0.4),
            contrastText: "#fff",
        },
        secondary: {
            main: '#736DAB',
            light: fade('#736DAB',0.5),
            contrastText: "#fff"
        },
        grey: {
            "100": '#2A2A2A',
            "200": "#6B738E",
            "300": "#AEB4C5",
            "400": "#D0D4E1",
            "500": "#EAEBEF",
            "600": "#868B9B",
            "700": "#f6f6fa",
            "800": "#49516b"
        },
        text: {
            primary: "#8E4861",
            secondary: "#736DAB"
        },
        background: {
            default: "#F2F2F2",
            paper: "#fff"
        },
        common: {
            black: '#000',
            white: '#fff'
        },
    },
    typography: {
        fontFamily: 'lato',
        h1: {
            fontSize: 60
        },
        h2: {
            fontSize: 52
        },
        h3: {
            fontSize: 42
        },
        h4: {
            fontSize: 24,
            fontWeight: 'bold'
        },
        h5: {
            fontSize: 24
        },
        h6: {
            fontSize: 20
        },
        subtitle1: {
            fontSize: 16,
            fontWeight: 'bold'
        },
        subtitle2: {
            fontSize: 14,
            fontWeight: 'bold'
        },
        body1: {
            fontSize: 16
        },
        body2: {
            fontSize: 14
        },
        button: {
            fontSize: 16,
            fontWeight: 700
        },
        caption: {
            fontSize: 12,
            fontWeight: 'bold'
        },
        overline: {
            fontSize: 12,
            textTransform: 'unset'
        },
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'unset'
            }
        }
    }
});

export default theme;
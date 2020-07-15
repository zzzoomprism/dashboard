import {createMuiTheme, ThemeOptions} from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightGreen from "@material-ui/core/colors/lightGreen";
import {PaletteOptions} from "@material-ui/core/styles/createPalette";

export const typography = {
        h1:{
            fontSize: 25,
        },
        h2:{
            fontSize: 23,
        },
        h3:{
            fontSize: 20,
        },
        h4:{
            fontSize: 17,
        },
        h5: {
            fontSize: 14,
        },
        h6:{
            fontSize: 12,
        },
        button:{
            fontWeight: 700
        },
        fontSize: 14
    };

export const themePrimaryColor = {
    default: {
        primary: {
            light: cyan.A100,
            main: cyan.A200,
            dark: cyan.A700
        },
        secondary: {
            light: blueGrey[200],
            main: blueGrey[500],
            dark: blueGrey[900],
        },
        type: "dark",
    } as PaletteOptions,
    green: {
        primary: {
            light: lightGreen.A200,
            main: lightGreen.A400,
            dark: lightGreen.A700
        },
        secondary: {
            light: blueGrey[200],
            main: blueGrey[500],
            dark: blueGrey[900],
        },
        type: "dark",
    } as PaletteOptions
};


export const themeBackgroundColor = {
    default: {
        default: "#323232",
        paper: "#212121",
    },
    blueGrey: {
        default: blueGrey[700],
        paper: blueGrey[900],
    }
};


export const defaultThemeOption:ThemeOptions = {
    palette: {
        primary: {
            light: cyan.A100,
            main: cyan.A200,
            dark: cyan.A700
        },
        secondary: {
            light: blueGrey[200],
            main: blueGrey[500],
            dark: blueGrey[900],
        },
        background: {
            default: "#323232",
            paper: "#212121",
        },
        type: "dark",
    },
    typography: typography,

};

export const defaultTheme = createMuiTheme(defaultThemeOption);



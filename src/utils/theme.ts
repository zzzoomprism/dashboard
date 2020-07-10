import {createMuiTheme} from "@material-ui/core/styles";
import cyan from "@material-ui/core/colors/cyan";
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightGreen from "@material-ui/core/colors/lightGreen";

const typography = {
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

export const defaultTheme = createMuiTheme({
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
    typography: typography
});


export const greenTheme = createMuiTheme({
    palette: {
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
        background: {
            default: "#323232",
            paper: "#212121",
        },
        type: "dark",
    },
    typography:typography,
});
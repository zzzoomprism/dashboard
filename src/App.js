import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarNavigation from "./containers/AppBarNavigation";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import lightGreen from "@material-ui/core/colors/lightGreen";
import blueGrey from "@material-ui/core/colors/blueGrey";
import SideBarDrawer from "./containers/SideBarDrawer";
import Content from "./components/Content";
import Footer from "./components/Pages/Footer";
import {HashRouter} from "react-router-dom";


const theme = createMuiTheme({
  palette: {
    primary: {
      light: lightGreen.A100,
      main: lightGreen.A400,
      dark: lightGreen.A700
    },
    secondary: {
      light: blueGrey[200],
      main: blueGrey[500],
      dark: blueGrey[900],
    },
    background: {
      default: blueGrey[800],
      paper: blueGrey[900],
    },
    type: "dark",
  },
  typography: {
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
  },
});

console.log(theme);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <HashRouter>
        <CssBaseline />
        <AppBarNavigation />
        <SideBarDrawer />
        <Content />
        <Footer/>
        </HashRouter>
      </Fragment>
    </ThemeProvider>
  );
};

export default App;

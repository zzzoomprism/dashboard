import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarNavigation from "./containers/AppBarNavigation";
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import lightGreen from "@material-ui/core/colors/lightGreen";
import cyan from "@material-ui/core/colors/cyan";
import blueGrey from "@material-ui/core/colors/blueGrey";
import SideBarDrawer from "./containers/SideBarDrawer";
import Footer from "./components/Footer";
import Content from "./components/Content";


const theme = createMuiTheme({
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


const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <CssBaseline />
        <AppBarNavigation />
        <SideBarDrawer />
              <Content/>
      </Fragment>
    </ThemeProvider>
  );
};


export default App;

import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarNavigation from "./containers/AppBarNavigation";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import lightGreen from "@material-ui/core/colors/lightGreen";
import blueGrey from "@material-ui/core/colors/blueGrey";
import SideBarDrawer from "./containers/SideBarDrawer";
import Content from "./components/Content";
import yellow from "@material-ui/core/colors/yellow";

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
    inherit: yellow,
    background: {
      paper: blueGrey[900],
      default: blueGrey[800]
    },
    type: "dark"
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <CssBaseline />
        <AppBarNavigation />
        <SideBarDrawer />
        <Content />
      </Fragment>
    </ThemeProvider>
  );
};

export default App;

import React, { Fragment } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBarNavigation from "./containers/AppBarNavigation";
import {ThemeProvider, createMuiTheme, makeStyles} from "@material-ui/core/styles";
import lightGreen from "@material-ui/core/colors/lightGreen";
import blueGrey from "@material-ui/core/colors/blueGrey";
import SideBarDrawer from "./containers/SideBarDrawer";
import Footer from "./components/Footer";
import {HashRouter, Route, Switch} from "react-router-dom";
import Auth from "./components/Pages/Auth/Auth";
import Crypto from "./components/Pages/Dashboard/Crypto/Crypto";
import Profile from "./components/Pages/Socials/Profile/Profile";


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

const useStyle = makeStyles((theme)=>({
  content: {
    float: "right",
    [theme.breakpoints.up('md')]:{
      width: "calc(100% - 270px)",
    }
  },
  toolbar: theme.mixins.toolbar,
}));



const App = () => {
  const classes = useStyle();
  const Content = () => (
      <Switch>
        <Route exact path={"/dashboard/currency"} component={Crypto}/>
        <Route exact path={"/socials/profile"} component={Profile}/>
        <Route exact path={"/auth"} component={Auth}/>
      </Switch>
  );




  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <HashRouter>
        <CssBaseline />
        <AppBarNavigation />
        <SideBarDrawer />
          <main className={classes.content}>
            <div className={classes.toolbar} />
              <Switch>
                <Content/>
              </Switch>
          </main>
        <Footer/>
        </HashRouter>
      </Fragment>
    </ThemeProvider>
  );
};


export default App;

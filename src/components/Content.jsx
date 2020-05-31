import React from "react";
import Crypto from "./Pages/Dashboard/Crypto/Crypto";
import {HashRouter, Route, Switch} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Profile from "./Pages/Socials/Profile/Profile";

const useStyle = makeStyles((theme)=>({
  content: {
    float: "right",
    [theme.breakpoints.up('md')]:{
      width: "calc(100% - 270px)",
    }
  },
  toolbar: theme.mixins.toolbar,
}));


const Content = () => {
  const classes = useStyle();
  const Content = () => (
    <Switch>
      <Route exact path={"/dashboard/currency"} component={Crypto}/>
      <Route exact path={"/socials/profile"} component={Profile}/>
    </Switch>
  );
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <HashRouter>
        <Switch>
         <Content/>
        </Switch>
      </HashRouter>

    </main>
  );
};

export default Content;

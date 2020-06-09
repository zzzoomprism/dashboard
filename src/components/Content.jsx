import React from "react";
import {Route, Switch} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Crypto from "./Pages/Dashboard/Crypto/Crypto";
import Profile from "./Pages/Socials/Profile/Profile";
import Auth from "./../containers/Auth";
import People from "./Pages/Socials/People/People";

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
            <Route exact path={"/socials/people"} component={People}/>
            <Route exact path={"/auth"} component={Auth}/>
        </Switch>
    );

    return  <main className={classes.content}>
                <div className={classes.toolbar} />
                <Switch>
                    <Content/>
                </Switch>
            </main>
};

export default Content;
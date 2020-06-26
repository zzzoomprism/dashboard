import React, {Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Profile from "./Pages/Socials/Profile/Profile/ProfileContainer";
import Auth from "../containers/Auth";
import Loaded from "./Loaded";
import Crypto from "../containers/Pages/Dashboard/Crypto/Crypto";

const People = React.lazy(() => import("./Pages/Socials/People/People"))

const useStyle = makeStyles((theme) => ({
    content: {
        float: "right",
        width: "100%",
        [theme.breakpoints.up('md')]: {
            width: "calc(100% - 270px)",
        },
    },
    toolbar: theme.mixins.toolbar,
}));

const Content = () => {
    const classes = useStyle();

    const Content = () => (
        <Suspense fallback={<Loaded/>}>
            <Switch>
                <Route exact path={"/dashboard/currency"} component={Crypto}/>
                <Route path={"/profile/:id"} component={Profile}/>
                <Route exact path={"/socials/people"} component={People}/>
                <Route exact path={"/auth"} component={Auth}/>
            </Switch>
        </Suspense>
    );

    return <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Switch>
            <Content/>
        </Switch>
    </main>
};

export default Content;
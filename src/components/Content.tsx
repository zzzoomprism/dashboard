import React, {Suspense} from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Auth from "../containers/Auth";
import Loaded from "./Loaded";
import Crypto from "../containers/Pages/Dashboard/Crypto/Crypto";
import Folders from "./Pages/Dashboard/Folders/Folders";
import Settings from "./Pages/Settings/Settings";

const People = React.lazy(() => import("./Pages/Socials/People/People"));
const Following = React.lazy (() => import("./Pages/Socials/Following/FollowingContainer"));
const Profile = React.lazy(()=>import("./Pages/Socials/Profile/Profile/ProfileContainer"));

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
                <Route exact path={"/dashboard/folders"} component={Folders}/>
                <Route path={"/profile/:id"} component={Profile}/>
                <Route exact path={"/socials/people"} component={People}/>
                <Route exact path={"/socials/following"} component={Following}/>
                <Route exact path={"/auth"} component={Auth}/>
                <Route path={"/settings"} component={Settings}/>
                <Route exact path={"/"} render={() => <Redirect to={"/auth"}/>}/>
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
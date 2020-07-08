import React, {Fragment} from 'react';
import SettingSideBar from "./SettingSideBar";
import {HashRouter, Route, Switch} from "react-router-dom";
import ProfileSettings from "./ProfileSettings/ProfileSettingsContainer";
import ThemeSettings from "./ThemeSettings";
import {makeStyles} from "@material-ui/core/styles";
import {withAuthRedirect} from "../../../hoc/AuthRedirect";

const useStyle = makeStyles((theme) => ({
    content: {
        marginLeft: 240,
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}))

const Settings = () => {
    const classes = useStyle();
    const Settings = () => <Switch>
        <Route exact path={"/settings/profile"} component={ProfileSettings}/>
        <Route exact path={"/settings/theme"} component={ThemeSettings}/>
    </Switch>

    return (
        <Fragment>
            <SettingSideBar/>
            <main className={classes.content}>
                <HashRouter>
                    <Switch>
                        <Settings/>
                    </Switch>
                </HashRouter>
            </main>
        </Fragment>
    );
};

export default withAuthRedirect(Settings);
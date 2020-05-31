import React, {Fragment} from "react";
import Grid from "@material-ui/core/Grid";
import ProfileAppBar from "./ProfileAppBar";
import AboutCard from "./AboutCard";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Contact from "./Contact";
import Biography from "./Biography";
import Friends from "./Friends";

const useStyle = makeStyles(theme => ({
    paper: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        marginTop: -20,
    },
    secondPaperBlock: {
        marginTop: theme.spacing(2),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
    friendsComponent: {
        marginTop: -theme.spacing(6),
        [theme.breakpoints.down("md")]: {
            marginTop: theme.spacing(2),
        }
    }
}));

const Profile = (props) => {
    const classes = useStyle();
    return <Fragment>
        <ProfileAppBar/>
        <Grid container className={classes.paper}>
                <Grid item xs={12} sm={12} md={7}>
                    <AboutCard/>
                </Grid>
                <Grid item xs={12} sm={12} md={5}>
                    <Contact/>
                </Grid>
        </Grid>
        <Grid container className={classes.secondPaperBlock}>
            <Grid item xs={12} sm={12} md={7}>
                <Biography/>
            </Grid>
            <Grid item xs={12} sm={12} md={5} className={classes.friendsComponent}>
                <Friends/>
            </Grid>
        </Grid>

    </Fragment>
};


export default Profile;
import React, {Fragment} from "react";
import Grid from "@material-ui/core/Grid";
import AboutCard from "./AboutCard";
import {makeStyles} from "@material-ui/core/styles";
import Contact from "./Contact";
import Biography from "./Biography";
import Friends from "./Friends";
import ProfileAppBarContainer from "../../../../containers/Pages/Socials/ProfileAppBarContainer";
import {withAuthRedirect} from "./../../../../hoc/AuthRedirect";
import {compose} from "redux";


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
        [theme.breakpoints.down("sm")]: {
            marginTop: theme.spacing(2),
        },
        // [theme.breakpoints.up("lg")]: {
        //     marginTop: theme.spacing(1),
        // }
    }
}));

const Profile = () => {
    const classes = useStyle();
    return <Fragment>
        <ProfileAppBarContainer/>
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


// export default Profile;
export default compose(withAuthRedirect)(Profile);
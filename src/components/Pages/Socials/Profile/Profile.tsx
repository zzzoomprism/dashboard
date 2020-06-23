import React, {Fragment, useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import AboutCard from "./AboutCard";
import {makeStyles} from "@material-ui/core/styles";
import Contact from "./Contact";
import Biography from "./Biography";
import Friends from "./Friends";
import ProfileAppBar from "../../../../containers/Pages/Socials/ProfileAppBar";
import {withAuthRedirect} from "./../../../../hoc/AuthRedirect";
import {compose} from "redux";
import {PeopleType, SamuraiType} from "../../../../types/socials";
import Loaded from "../../../Loaded";


const useStyle = makeStyles(theme => ({
    paper: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        marginTop: -theme.spacing(2),
    },
    secondPaperBlock: {
        marginTop: -theme.spacing(2),
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
    block: {
        marginRight: theme.spacing(2),
    }
}));

type PropsType = {
    user: SamuraiType | null,
    match: any,
    getUserByIdThunk: (id: number) => void
}

const Profile: React.FC<PropsType> = ({user, match, getUserByIdThunk} ) => {
    const classes = useStyle();
    let id = match.params.id;
    useEffect(()=>{
        getUserByIdThunk(id);
    }, []);
    return <Fragment>
        <ProfileAppBar/>
        <Grid container className={classes.paper} justify={"space-between"}>
            <Grid container item xs={12} sm={12} md={7} spacing={2}>
                    <Grid item xs={12} sm={12} md={12}>
                        <AboutCard/>
                    </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Biography description={(user) ? user.aboutMe : ''} fullname={(user) ? user.fullName : '' } />
                </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={5} spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                    <Contact contactInfo={(user) ? user.contacts : null}/>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Friends/>
                </Grid>
            </Grid>
        </Grid>
        </Fragment>
};


// export default Profile;
export default compose(withAuthRedirect)(Profile);
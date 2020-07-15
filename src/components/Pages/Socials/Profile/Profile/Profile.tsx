import React, {Fragment, useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Biography from "../Biography/BiographyContainer";
import Following from "./../Following/Following";
import ProfileAppBar from "../../../../../containers/Pages/Socials/ProfileAppBar";
import {withAuthRedirect} from "../../../../../hoc/AuthRedirect";
import {compose} from "redux";
import {SamuraiType} from "../../../../../types/socials";
import Loaded from "../../../../Loaded";
import AboutCard from "../AboutCard/AboutCardContainer";
import Contact from "../Contacts/ContactContainer";


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
    location: any,
    isFetching: boolean,
    getUserByIdThunk: (id: number) => void
}

const Profile: React.FC<PropsType> = ({user, isFetching, match, getUserByIdThunk}) => {
    const classes = useStyle();
    let id = match.params.id;
    useEffect(() => {
        getUserByIdThunk(id);
    }, [id]);
    if (!user || isFetching)
        return <Loaded/>;
    return <Fragment>
        <ProfileAppBar/>
        <Grid container justify={"space-between"} alignItems={"flex-start"} className={classes.paper}>
            <Grid container item xs={12} sm={12} md={7} spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                    <AboutCard lookingForAJob={user.lookingForAJob} jobDescription={user.lookingForAJobDescription}/>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Biography description={user.aboutMe}
                               fullname={user.fullName}/>
                </Grid>
            </Grid>
            <Grid container item xs={12} sm={12} md={5} spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                    <Contact/>
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                    <Following/>
                </Grid>
            </Grid>
        </Grid>
    </Fragment>
};


export default compose(withAuthRedirect)(Profile);
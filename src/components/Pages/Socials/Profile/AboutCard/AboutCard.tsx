import React from "react";
import {compose} from "redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import AboutCardFormRedux from "./AboutCardForm";
import {SamuraiType} from "../../../../../types/socials";
import Loaded from "../../../../Loaded";
import {formChecking} from "../../../../../hoc/FormEditCheck";
import SnackBarContainer from "../../../components/SnackbarContainer";
import {ErrorType} from "../../../../../types/errors";
import HeadLineOfProfilePaper from "../../components/HeadLineOfProfilePaper";


const useStyle = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3),
    },
}));


type PropsTypeAboutCard = {
    user: SamuraiType | null
    myIdUser: number | null
    updateProfile: (formData: Omit<SamuraiType, 'photos'>, formName: string) => Promise<void>
    showEditMode: boolean
    isEdit: boolean
    isFetching: boolean
    error: ErrorType | null
    editButton: React.ComponentType
    closeEditMode: () => void
}

const AboutCard: React.FC<PropsTypeAboutCard> = ({updateProfile, user, editButton, isEdit, closeEditMode, isFetching, error}) => {
    const classes = useStyle();
    if (!user)
        return <Loaded/>

    const onSubmit = (formData: any) => {
        updateProfile(formData, 'aboutCardForm')
            .then(() => {
                closeEditMode();
            })
    }
    return <Paper className={classes.paper}>
        <HeadLineOfProfilePaper editButton={editButton} headline={"About"}/>
        {isEdit ? <AboutCardFormRedux initialValues={user} lookingJob={user.lookingForAJob} isFetching={isFetching}
                                      desc={user.lookingForAJobDescription} onSubmit={onSubmit}/> :
                <Grid container>
                    <Grid item xs={12} sm={12} md={6}>
                        <List component="nav">
                            <ListItem>
                                <ListItemIcon>
                                    {user.lookingForAJob ? <CheckCircleRoundedIcon color={"primary"}/> :
                                        <CancelRoundedIcon/>}
                                </ListItemIcon>
                                <ListItemText secondary={"Looking job?"} primary={user.lookingForAJobDescription}/>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid> }
        {error && !isFetching &&
        <SnackBarContainer error={error} successAlert={"Your information about you update successfully!"}/>}
    </Paper>
};

export default compose(formChecking)(AboutCard);
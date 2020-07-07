import React, {Fragment, useEffect} from 'react';
import {Divider, Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ProfileForm from "./ProfileForm";
import AvatarSetting from "../ProfilePhoto/AvatarSettingContainer";
import {SamuraiType} from "../../../../types/socials";
import Loaded from "../../../Loaded";
import SnackBarContainer from "../../components/SnackbarContainer";
import Paper from "@material-ui/core/Paper";
import {ErrorType} from "../../../../types/errors";


const useStyle = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            marginTop: theme.spacing(2),
        },
    },

}));

type PropsType = {
    profile: SamuraiType | null
    updateProfile: (formData: Omit<SamuraiType, 'photos'>, formName: string) => void
    error: ErrorType | null
    isFetching: boolean
}

const ProfileSettings: React.FC<PropsType> = ({profile, updateProfile, error, isFetching}) => {
    const classes = useStyle();
    const onSubmit = (formData: any) => {
        updateProfile(formData, 'profileSettings')
    };
    if (!profile)
        return <Loaded/>;
    return (
        <Fragment>
            <Typography variant={"h3"}>Public Profile</Typography>
            <Divider/>
            <Grid container direction="row"
                  justify="space-between"
                  alignItems="flex-start" className={classes.root}>
                <Grid item xs={12} sm={12} md={7}>
                    <ProfileForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                </Grid>
                <Grid container item xs={12} sm={12} md={5} justify="center"
                      alignItems="center">
                    <AvatarSetting user={profile}/>
                </Grid>
            </Grid>
            {error && !isFetching &&
            <SnackBarContainer error={error} successAlert={"Your information about you update successfully!"}/>}
        </Fragment>
    );
};


export default ProfileSettings;
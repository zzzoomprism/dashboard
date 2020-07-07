import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {Contacts, SamuraiType} from "../../../../../types/socials";
import {Divider, List} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ContactReduxForm from "./ContactForm";
import {compose} from "redux";
import {formChecking} from "../../../../../hoc/FormEditCheck";
import {iconHelper} from "../../../../../utils/helpers/SocialNetworkIcon";
import Loaded from "../../../../Loaded";
import HeadLineOfProfilePaper from "../../components/HeadLineOfProfilePaper";
import {ErrorType} from "../../../../../types/errors";
import SnackBarContainer from "../../../components/SnackbarContainer";
import {stopSubmit} from "redux-form";
import {ResultCodeEnum} from "../../../../../api/api";


const useStyle = makeStyles(theme=>({
    contact: {
        padding: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            marginTop: theme.spacing(2)
        }
    }
}));



type PropsType = {
    user: SamuraiType | null
    isEdit: boolean
    editButton: React.ComponentType
    isFetching: boolean
    error: ErrorType | null
    closeEditMode: () => void
    updateProfile: (formData: Object, formName: string) => Promise<void>
}

const Contact:React.FC<PropsType> = ({user,  editButton, isEdit , closeEditMode, updateProfile, error, isFetching}) => {
    const classes = useStyle();
    let arrayList: any = [];
    if(!user)
        return <Loaded/>
    const onSubmit = (formData: any) => {
        updateProfile(formData, 'contacts')
            .then(() => {
                closeEditMode();
            })
            .catch((e)=>{
                stopSubmit('contacts', e)
            })
    }
        for (let [key, value] of Object.entries(user.contacts)) {
            if (value)
                arrayList = [...arrayList, <ListItem key={value + "-edit-form"}>
                    <ListItemIcon>
                        {iconHelper(key)}
                    </ListItemIcon>
                    <ListItemText>
                        <Typography noWrap variant={"body2"}>{value}</Typography>
                    </ListItemText>
                </ListItem>]
        }

    return <Paper className={classes.contact}>
        <HeadLineOfProfilePaper editButton={editButton} headline={"Contacts"}/>
        {isEdit ? <ContactReduxForm isFetching={isFetching} initialValues={user} userInfo={user} onSubmit={onSubmit}/> :
            <List component="nav">
                    {arrayList}
        </List>}
        {error && !isFetching &&
        <SnackBarContainer error={error} successAlert={"Your information about you update successfully!"}/>}
    </Paper>
};


export default compose(formChecking)(Contact);
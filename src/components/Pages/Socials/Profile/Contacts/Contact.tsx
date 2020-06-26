import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ImageIcon from "@material-ui/icons/Image";
import ListItemText from "@material-ui/core/ListItemText";
import {Contacts, SamuraiType} from "../../../../../types/socials";
import {Divider, List} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ContactReduxForm from "./ContactForm";
import {compose} from "redux";
import {formChecking} from "../../../../../hoc/FormEditCheck";


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
    closeEditMode: () => void
    updateProfile: (formData: Object) => void
}

const Contact:React.FC<PropsType> = ({user,  editButton, isEdit , closeEditMode, updateProfile}) => {
    const classes = useStyle();
    let arrayList: any = [];
    if(user) {
        for (let [key, value] of Object.entries(user.contacts)) {
            if (value)
                arrayList = [...arrayList, <ListItem>
                    <ListItemIcon>
                        <ImageIcon/>
                    </ListItemIcon>
                    <ListItemText primary={value} secondary={key}/>
                </ListItem>]
        }
    }

    return <Paper className={classes.contact}>
        <Grid container
              direction="row"
              justify="space-between"
              alignItems="center">
            <Grid item >
                <Typography variant={"h3"}>
                    Contacts
                </Typography>
            </Grid>
            <Grid item >
                {editButton}
            </Grid>
        </Grid>
        <Divider/>
        {isEdit ? <ContactReduxForm onSubmit={(formData: any) => { updateProfile({'contacts': formData}); closeEditMode()}}/> :
            <List component="nav">
            {arrayList}
        </List>}

    </Paper>
};


export default compose(formChecking)(Contact);
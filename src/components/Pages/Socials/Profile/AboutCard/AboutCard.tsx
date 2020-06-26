import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ImageIcon from '@material-ui/icons/Image';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Divider from "@material-ui/core/Divider";
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import {Fab, IconButton, Slide, Snackbar, Tooltip} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import AboutCardFormRedux from "./AboutCardForm";
import CloseIcon from '@material-ui/icons/Close';
import {SamuraiType} from "../../../../../types/socials";
import Loaded from "../../../../Loaded";
import {Alert} from "@material-ui/lab";
import {formChecking} from "../../../../../hoc/FormEditCheck";
import {compose} from "redux";


const useStyle = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3),
    },
}));

type PropsType = {
    children : React.ReactNode
    value: null | number
    index: null | number
    other?: React.HTMLProps<any>
}

const TabPanels: React.FC<PropsType> = ({ children, value, index, ...other }) => {
    return  <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
        {...other}
    >
        {value === index && (
            <Box p={3} component={"div"}>
                {children}
            </Box>
        )}
    </div>
};

function SlideTransition(props: any) {
    return <Slide {...props} direction="up" />;
}

type PropsTypeAboutCard = {
    user: SamuraiType | null
    myIdUser: number | null
    updateProfile: (formData: Omit<SamuraiType, 'photos'> ) => void
    showEditMode: boolean
    isEdit: boolean
    editButton: React.ComponentType
    closeEditMode: () => void
}

const AboutCard: React.FC<PropsTypeAboutCard> = ({ updateProfile, user, editButton, isEdit , closeEditMode }) => {
    const classes = useStyle();
    if(!user)
        return <Loaded/>
    return <Paper className={classes.paper}>
    <Grid container
          direction="row"
          justify="space-between"
          alignItems="center">
            <Grid item >
                <Typography variant={"h3"}>
                    About
                </Typography>
            </Grid>
            <Grid item>
                <Tabs
                    value={0}
                    indicatorColor="primary"
                    textColor="primary"
                    scrollButtons="auto"
                >
                    <Tab label="Overview" />
                </Tabs>
            </Grid>
         <Grid item>
             {editButton}
        </Grid>
        </Grid>
        <Divider/>
        {isEdit ? <AboutCardFormRedux lookingJob={user.lookingForAJob} desc={user.lookingForAJobDescription} onSubmit={(formData: any) => { updateProfile(formData); closeEditMode()} }/> :
            <TabPanels value={0} index={0}>
            <Grid container>
                <Grid item xs={12} sm={12} md={6}>
                    <List component="nav">
                        <ListItem>
                            <ListItemIcon>
                                { user.lookingForAJob ? <CheckCircleRoundedIcon color={"primary"}/> : <CancelRoundedIcon/>}
                            </ListItemIcon>
                            <ListItemText secondary={"Looking job?"} primary={user.lookingForAJobDescription}/>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </TabPanels>}

    </Paper>
};

export default compose(formChecking)(AboutCard);
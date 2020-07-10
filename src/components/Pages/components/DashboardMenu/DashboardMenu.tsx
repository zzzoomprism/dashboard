import React, {Fragment, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import FolderIcon from '@material-ui/icons/Folder';
import Typography from "@material-ui/core/Typography";
import PersonIcon from '@material-ui/icons/Person';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import {NavLink} from "react-router-dom";
import ProfileButton from "./ProfileButtonContainer";

const useStyles = makeStyles((theme) => ({
    list_components: {
        paddingLeft: 60
    },
    menuCategory: {
        paddingLeft: theme.spacing(2),
    }
}));

const DashboardMenu = (props: any) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    const classes = useStyles();
    return (
        <Fragment>
            <ProfileButton/>
            <Typography variant={"overline"} color={"secondary"} className={classes.menuCategory}>
                Main
            </Typography>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <DashboardIcon/>
                </ListItemIcon>
                <ListItemText primary="Dashboard"/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse
                in={open}
                timeout="auto"
                unmountOnExit
                className={classes.list_components}
            >
                <List component="div" disablePadding>
                    <ListItem button component={NavLink} to={"/dashboard/currency"}>
                        <ListItemText>Currency</ListItemText>
                    </ListItem>
                </List>
            </Collapse>
            <ListItem button component={NavLink} to={"/dashboard/folders"}>
                <ListItemIcon>
                    <FolderIcon/>
                </ListItemIcon>
                <ListItemText>Folders</ListItemText>
            </ListItem>
            <Typography variant={"overline"} color={"secondary"} className={classes.menuCategory}>
                Social Apps
            </Typography>
            <ListItem button component={NavLink} to={`/profile/${props.user || "me"}`}>
                <ListItemIcon>
                    <PersonIcon/>
                </ListItemIcon>
                <ListItemText>Profile</ListItemText>
            </ListItem>
            <ListItem button component={NavLink} to={"/socials/people"}>
                <ListItemIcon>
                    <GroupAddIcon/>
                </ListItemIcon>
                <ListItemText>People</ListItemText>
            </ListItem>
        </Fragment>
    );
};

export default DashboardMenu;

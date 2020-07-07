import React, {Fragment} from 'react';
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import {makeStyles} from "@material-ui/core/styles";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";



const useStyles = makeStyles((theme) => ({
    drawer: {
        width: 240,
        flexShrink: 0,
        borderLeft: theme.palette.divider,
    },
    drawerPaper: {
        width: 240,
        marginLeft: 270,
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0,
        },
        zIndex: 10,
        borderLeft: "1px solid " + theme.palette.divider,
    },
    drawerContainer: {
        overflow: 'auto',
        padding: theme.spacing(2),
    },
}));
const SettingSideBar = () => {
    const classes = useStyles();
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar/>
            <div className={classes.drawerContainer}>
                <List>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText>
                           <Typography variant={"caption"}> Robert Johnson</Typography>
                            <Typography variant={"caption"}> Personal settings</Typography>
                    </ListItemText>
                </ListItem>
                </List>
                <Typography variant={"overline"} color={"secondary"}>
                    Profile
                </Typography>
                <List>
                    {['Personal Info'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <Typography variant={"overline"} color={"secondary"}>
                    Appearance
                </Typography>
                <List>
                    {['Theme'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>
    );
};

export default SettingSideBar;
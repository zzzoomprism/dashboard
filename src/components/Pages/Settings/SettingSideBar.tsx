import React from 'react';
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
import {SamuraiType} from "../../../types/socials";
import {Skeleton} from "@material-ui/lab";
import {NavLink} from "react-router-dom";


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


type PropsType = {
    user: SamuraiType | null,
}
const SettingSideBar: React.FC<PropsType> = ({user}) => {
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
                            {!user ? <Skeleton animation="wave" variant="circle" width={40} height={40}/> :
                                <Avatar alt="Remy Sharp" src={user.photos.small}/>
                            }
                        </ListItemAvatar>
                        <ListItemText>
                            {!user ? <Skeleton animation="wave" height={10} width="80%" style={{marginBottom: 6}}/> :
                            <Typography variant={"body2"}> {user.fullName}</Typography> }
                            <Typography variant={"caption"} color={"secondary"}> Personal settings</Typography>
                        </ListItemText>
                    </ListItem>
                </List>
                <Typography variant={"overline"} color={"secondary"}>
                    Profile
                </Typography>
                <List>
                    {['Personal Info'].map((text) => (
                        <ListItem button key={text} component={NavLink} to={"/settings/profile"}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
                <Divider/>
                <Typography variant={"overline"} color={"secondary"}>
                    Appearance
                </Typography>
                <List>
                    {['Theme'].map((text) => (
                        <ListItem button key={text} component={NavLink} to={"/settings/theme"}>
                            <ListItemText primary={text}/>
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>
    );
};

export default SettingSideBar;
import React, {Fragment, useState} from 'react';
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from '@material-ui/icons/Settings';
import Typography from "@material-ui/core/Typography";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import {makeStyles} from "@material-ui/core/styles";
import {SamuraiType} from "../../../../types/socials";
import {Skeleton} from "@material-ui/lab";
import {NavLink} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.background.default
    },
}))

type PropsType = {
    user: SamuraiType | null,
    userId: number | null
}

const ProfileButton: React.FC<PropsType> = ({user, userId}) => {
    const [menuIsOpen, setMenuOpen] = useState(false);
    const classes = useStyles();
    return (
        <Fragment>
            <ListItem alignItems="flex-start" button onClick={() => setMenuOpen(!menuIsOpen)} className={classes.root}>
                <ListItemAvatar>
                    {!user ? <Skeleton animation="wave" variant="circle" width={40} height={40}/> :
                        <Avatar alt="Remy Sharp" src={user.photos.small}/>
                    }
                </ListItemAvatar>
                <ListItemText>
                    {!user ? <Skeleton animation="wave" height={10} width="80%" style={{marginBottom: 6}}/> :
                        <Box display="flex" fontSize={"h4.fontSize"} color={"text.secondary"} mt={1}>
                            {user.fullName}
                        </Box>}

                </ListItemText>
            </ListItem>
            <Menu
                id="simple-menu"
                keepMounted
                open={menuIsOpen}
                onClose={() => setMenuOpen(!menuIsOpen)}>
                <MenuItem component={NavLink} to={`/profile/${userId}`}>
                    <ListItemIcon>
                        <PersonIcon fontSize="small"/>
                    </ListItemIcon>
                    <Typography variant="inherit">Profile</Typography>
                </MenuItem>
                <MenuItem component={NavLink} to={`/settings/profile`}>
                    <ListItemIcon>
                        <SettingsIcon fontSize="small"/>
                    </ListItemIcon>
                    <Typography variant="inherit">Settings</Typography>
                </MenuItem>
                <MenuItem>
                    <ListItemIcon>
                        <ExitToAppIcon fontSize="small"/>
                    </ListItemIcon>
                    <Typography variant="inherit">Log out</Typography>
                </MenuItem>
            </Menu>
        </Fragment>
    );
};

export default ProfileButton;
import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
    menu:{
        marginTop: theme.spacing(4),
    }}));

const Notification = (props) => {

    const classes = useStyle();
    return (
        <Menu
            //anchorEl={props.anchor}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            keepMounted
            transformOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={false}
            className={classes.menu}
            color={"secondary"}
        >
            <MenuItem>
                <Badge  badgeContent={4} color="primary">
                    <Avatar src={""}/>
                </Badge>
                <Box p={3}>

                    <Typography display={"block"} variant="h4" gutterBottom>Alex Rees</Typography>
                    <Typography display={"block"} variant={"body2"} gutterBottom>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</Typography>
                </Box>
            </MenuItem>
            <MenuItem>
                <Badge  badgeContent={4} color="primary">
                    <Avatar src={""}/>
                </Badge>
                <Box p={3}>

                    <Typography display={"block"} variant="h4" gutterBottom>Alex Rees</Typography>
                    <Typography display={"block"} variant={"body2"} gutterBottom>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</Typography>
                </Box>
            </MenuItem>
        </Menu>
    )
};


export default Notification;
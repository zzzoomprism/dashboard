import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ImageIcon from "@material-ui/icons/Image";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";


const useStyle = makeStyles(theme=>({
    contact: {
        marginLeft: theme.spacing(3),
        [theme.breakpoints.down('md')]:{
            marginLeft: 0,
            marginTop: theme.spacing(1),
        },
        marginBottom: theme.spacing(1),
        padding: theme.spacing(3)
    }
}));

const Contact = (props) => {
    const classes = useStyle();
    return <Paper className={classes.contact}>
        <Typography variant={"h3"}>
            Contacts
        </Typography>
        <List component="nav">
            <ListItem>
                <ListItemIcon>
                    <ImageIcon />
                </ListItemIcon>
                <ListItemText primary="s96k92@gmail.com" secondary="email"/>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <ImageIcon />
                </ListItemIcon>
                <ListItemText primary="http://github.com/zzzoomprism" secondary="webpage"/>
            </ListItem>
            <ListItem>
                <ListItemIcon>
                    <ImageIcon />
                </ListItemIcon>
                <ListItemText primary="233321665" secondary="phone"/>
            </ListItem>
        </List>
    </Paper>
};


export default Contact;
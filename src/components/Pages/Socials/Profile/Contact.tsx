import React, {Component} from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ImageIcon from "@material-ui/icons/Image";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import {Contacts} from "../../../../types/socials";


const useStyle = makeStyles(theme=>({
    contact: {
        padding: theme.spacing(3)
    }
}));

type PropsType = {
    contactInfo: Contacts
}

const Contact:React.FC<PropsType> = ({contactInfo}) => {
    const classes = useStyle();
    let arrayList: any = [];
    for(let [key, value] of Object.entries(contactInfo)){
        if(value)
       arrayList = [...arrayList,  <ListItem>
            <ListItemIcon>
                <ImageIcon />
            </ListItemIcon>
            <ListItemText primary={value} secondary={key}/>
        </ListItem> ]
    }

    return <Paper className={classes.contact}>

        <Typography variant={"h3"}>
            Contacts
        </Typography>
        <List component="nav">
            {arrayList}
        </List>
    </Paper>
};


export default Contact;
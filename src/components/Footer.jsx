import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";


const useStyle = makeStyles((theme)=>({
    footerComponent: {
        top: "auto",
        bottom: 0,
        backgroundColor: theme.palette.background.paper,
        color: "white",
        padding: theme.spacing(4),
        float: "right",
        [theme.breakpoints.up('md')]:{
            width: "calc(100% - 270px)",
        },
        border: "none",
        marginTop: theme.spacing(2)
    }
}));


const Footer = (props) => {
    const classes = useStyle();
    return  <AppBar position={"relative"} className={classes.footerComponent}>
        <Typography variant={"body2"}>
            Copyright  A.Susha.  Done by React JS and Material UI. © 2018

        </Typography>
    </AppBar>
};


export default Footer;
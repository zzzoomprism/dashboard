import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import FormControl from "@material-ui/core/FormControl";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LoginForm from "./LoginForm";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    grid:{
        marginTop: theme.spacing(15),
        padding: theme.spacing(5),
    },

}));



const Auth = (props) => {
    const classes = useStyles();

    return <div>
        <Button variant="outlined" color="primary">
            Open full-screen dialog
        </Button>
        <Dialog fullScreen open={true}  >
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h4" className={classes.title}>
                        Login
                    </Typography>
                    <IconButton edge="start" color="inherit" aria-label="close">
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
              <Grid container
                    direction="column"
                    justify="center"
                    alignItems="center"
                    className={classes.grid}
              >
                      <Typography variant={"h1"}>LOGO</Typography>
                      <Typography variant={"h2"}>
                          Sign In
                      </Typography>
                  <Typography variant={"caption"}>Enter to our system!</Typography>

                    <LoginForm />

                  </Grid>
        </Dialog>
    </div>
};


export default Auth;
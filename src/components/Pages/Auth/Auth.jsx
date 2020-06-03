import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from "@material-ui/core/Grid";
import LoginReduxForm from "./LoginForm";

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
                      <Typography variant={"body2"}> If you want to sign in as a test user </Typography>
                  <Typography variant={"caption"}>Login: test</Typography>
                  <Typography variant={"caption"}>Password: test </Typography>
                      <LoginReduxForm onSubmit={(formData)=>console.log(formData)}/>
                  </Grid>
        </Dialog>
    </div>
};


export default Auth;
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
import {Redirect} from "react-router-dom";
import Alert from "@material-ui/lab/Alert";
import Loaded from "../../Loaded";
import {PeopleType} from "../../../types/socials";

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
    backdrop: {
        zIndex: theme.zIndex.drawer + 10,
        color: '#fff',
    },
}));

type AuthProps = {
    isAuth: boolean,
    errorMessage: Array<string> | null | string,
    loading: boolean,
    user_data: PeopleType | null,
    login: (login_data: string, password_data: string) => void
    loginThunk: (login_data: string, password_data: string) => void
}

const Auth: React.FC<AuthProps> = ({isAuth, errorMessage,
                                       loading, user_data,
                                       login,loginThunk,
                                       ...props}) => {
    const classes = useStyles();
    console.log(user_data);
    if(isAuth && user_data)
        return <Redirect to={`/socials/people/${user_data.id}`}/>;
    return <div>
        <Dialog fullScreen open={true}>
            {(loading) && <Loaded />}

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
                  <Typography variant={"caption"}>Login: test_react_app</Typography>
                  <Typography variant={"caption"}>Password: 11111 </Typography>
                  {(!isAuth && errorMessage) &&
                  <Alert variant="filled" severity="error">
                      {errorMessage}
                  </Alert>}
                      <LoginReduxForm onSubmit={(formData: any)=> loginThunk(formData.login, formData.password)}/>
                  </Grid>
        </Dialog>
    </div>
};

export default Auth;
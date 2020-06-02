import React, {useState} from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {reduxForm} from "redux-form";

const useStyle = makeStyles(theme=>({
    formControl: {
        width: "50%",
        [theme.breakpoints.down("xs")]:{
            width: "90%"
        },
        marginTop: theme.spacing(3),
    },
    margin: {
        margin: theme.spacing(3),
    }
}));


const LoginForm = () => {
    const [passwordIsVisible, setPasswordVisible] = useState(false);
    const classes = useStyle();
    return  <form>
        <FormControl variant="outlined"  className={classes.formControl}>
            <InputLabel htmlFor="outlined-adornment-password">Login</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                endAdornment={
                    <InputAdornment position="end">
                        <AccountCircleIcon />
                    </InputAdornment>
                }
                labelWidth={70}
            />
        </FormControl>
        <FormControl variant="outlined"  className={classes.formControl}>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={passwordIsVisible ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                            onClick={()=>setPasswordVisible(!passwordIsVisible)}
                        >
                            {passwordIsVisible ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                labelWidth={70}
            />
        </FormControl>
        <Box display={"flex"} m={3}>
            <Button variant="contained" color="primary" size="large" className={classes.margin}>
                Sign In
            </Button>
            <Button variant="outlined" color="primary" size="large" className={classes.margin}>
                Sign Up
            </Button>
        </Box>
    </form>
};

const LoginReduxForm = reduxForm({

})(LoginForm);


export default LoginForm;
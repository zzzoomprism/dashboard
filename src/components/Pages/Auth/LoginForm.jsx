import React, { useState} from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import {Visibility, VisibilityOff} from "@material-ui/icons";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import {Field, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validator";
import TextField from "@material-ui/core/TextField";

const useStyle = makeStyles(theme=>({
    root: {
        alignSelf: "center",
        width: "50%",
        [theme.breakpoints.down("xs")]:{
            width: "90%"
        },
        marginTop: theme.spacing(3),
    },
    margin: {
        margin: theme.spacing(3),
        alignSelf: "center",
    }
}));



    const renderTextField = ({label, iconButton, input, meta: {touched, error}, ...custom })=> {
        const hasError = touched && error;
        return   <TextField
                error={touched && error}
                {...input}
                {...custom}
                label={label}
                helperText={hasError && error}
                variant="outlined"
                InputProps={{
                    endAdornment: (
                       iconButton
                    ),
                }}
            />
    };

const LoginForm = (props) => {
    const classes = useStyle();
    const [passwordIsVisible, setPasswordVisible] = useState(false);
    return  <form onSubmit={props.handleSubmit} style={{width: "100%", display: "flex", flexDirection: "column"}}>
                <Field name={"login"} component={renderTextField}
                       classesStyle={classes.formControl}
                       validate={[
                           required
                       ]}
                       className={classes.root}
                       label={"Login"}
                        iconButton={ <InputAdornment position="start">
                            <AccountCircleIcon />
                        </InputAdornment>}/>
                <Field name={"password"} component={renderTextField}
                       type={passwordIsVisible ? "text" : "password" }
                       validate={[
                           required
                       ]}
                       className={classes.root}
                       label={"Password"}
                       iconButton={ <InputAdornment position="end">
                           <IconButton
                               aria-label="toggle password visibility"
                               edge="end"
                               onClick={()=>setPasswordVisible(!passwordIsVisible)}
                           >
                               {passwordIsVisible ? <Visibility/> : <VisibilityOff/>}
                           </IconButton>
                       </InputAdornment>}
                       />

                <Box display={"flex"} m={3} justifyContent={"center"}>
                    <Button type={"submit"} variant="contained" component={"button"} color="primary" size="large" className={classes.margin}>
                        Sign In
                    </Button>
                    <Button variant="outlined" color="primary" size="large" className={classes.margin}>
                        Sign Up
                    </Button>
                </Box>
            </form>
};

const LoginReduxForm = reduxForm({
    form: 'login',
})(LoginForm);


export default LoginReduxForm;
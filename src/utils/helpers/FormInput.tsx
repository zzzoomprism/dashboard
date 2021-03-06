import React from "react";
import {
    FormControl,
    FormControlLabel,
    Input,
    InputAdornment,
    InputLabel,
    Switch,
    TextareaAutosize,
    TextField
} from "@material-ui/core";
import {iconHelper} from "./SocialNetworkIcon";
import {makeStyles} from "@material-ui/core/styles";

type TextFieldType = {
    label: string
    input: any
    meta: {
        touched: boolean
        error: boolean
    }
    custom?: any,
    icon?: string,
    defaultValue?: string
}

export const renderField: React.FC<TextFieldType>  = ({label, input, meta: {touched, error}, ...custom }) => {
    let hasError = touched && error;
    return <TextField error={hasError} label={label} {...input} {...custom}/>
    };

export const renderSwitchField: React.FC<TextFieldType> = ({label, input, meta: {touched, error}, ...custom }) => {
    let hasError = touched && error;
    return  <FormControlLabel {...input}
                              control={<Switch {...custom} name="lookingForAJob" color="primary"  />}
                              label={label}

    />
};


export const renderTextFieldWithIcon: React.FC<TextFieldType> = ({label, icon, defaultValue, input, meta: {touched, error}, ...custom }) => {
    let hasError = touched && error;
    return  <FormControl fullWidth  error={hasError} margin={"normal"}>
        <Input
            {...custom} {...input}
            startAdornment={<InputAdornment position="start">{iconHelper(icon)}</InputAdornment>}
            placeholder={label}
        />
    </FormControl>
}



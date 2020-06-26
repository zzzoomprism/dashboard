import React from "react";
import {FormControlLabel, Switch, TextareaAutosize, TextField} from "@material-ui/core";

type TextFieldType = {
    label: string
    input: any
    meta: {
        touched: boolean
        error: boolean
    }
    custom?: any
}

export const renderField: React.FC<TextFieldType>  = ({label, input, meta: {touched, error}, ...custom }) => {
    let hasError = touched && error;
    return <TextField error={hasError} id="standard-basic" label={label} {...input} {...custom}/>
    };

export const renderSwitchField: React.FC<TextFieldType> = ({label, input, meta: {touched, error}, ...custom }) => {
    let hasError = touched && error;
    return  <FormControlLabel {...input}
                              control={<Switch {...custom} name="lookingForAJob" color="primary"  />}
                              label={label}

    />
};



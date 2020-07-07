import React, {useState} from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import Button from "@material-ui/core/Button";
import {Box, CircularProgress, FormControlLabel, Switch, TextField} from "@material-ui/core";
import {renderField, renderSwitchField} from "../../../../../utils/helpers/FormInput";
import {submitButton} from "../../../../../utils/helpers/SubmitButton";
import AboutFormField from "./AboutFormField";

type PropsType = {
    lookingJob: boolean
    desc: string
    isFetching: boolean
}

type FormProps = {
    lookingForAJob: boolean
    lookingForAJobDescription: string
    handleSubmit: any
}

type TextFieldType = {
    label: string
    input: any
    meta: {
        touched: boolean
        error: boolean
    }
    custom?: any
}


const AboutCardForm: React.FC<InjectedFormProps<FormProps, PropsType> & PropsType> = ({handleSubmit, desc, lookingJob, isFetching}) => {

    return <form onSubmit={handleSubmit}>
        <AboutFormField lookingJob={lookingJob}/>
        <Box mt={3}>
            {
                submitButton(isFetching, "Save", "contained", "primary")
            }
        </Box>
    </form>
};

let AboutCardFormRedux = reduxForm<FormProps, PropsType>({
    form: 'aboutCardForm'
})(AboutCardForm);


export default AboutCardFormRedux;
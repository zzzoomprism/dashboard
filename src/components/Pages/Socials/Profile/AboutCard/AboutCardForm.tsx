import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {Box} from "@material-ui/core";
import {submitButton} from "../../../../../utils/helpers/SubmitButton";
import AboutFormField from "./AboutFormField";

type PropsType = {
    lookingJob: boolean
    isFetching: boolean
}

type FormProps = {
    lookingForAJob: boolean
    lookingForAJobDescription: string
    handleSubmit: any
}


const AboutCardForm: React.FC<InjectedFormProps<FormProps, PropsType> & PropsType> = ({handleSubmit, lookingJob, isFetching}) => {

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
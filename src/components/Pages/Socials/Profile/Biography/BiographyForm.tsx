import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Box} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {renderField} from "../../../../../utils/helpers/FormInput";
import {SamuraiType} from "../../../../../types/socials";
import Loaded from "../../../../Loaded";
import {submitButton} from "../../../../../utils/helpers/SubmitButton";
import BioFormField from "./BioFormField";

type PropsType = {
    isFetching: boolean
}

type FormPropsType = {
    aboutMe: string
}


const BiographyForm:React.FC<InjectedFormProps<FormPropsType, PropsType> & PropsType> = ({handleSubmit, isFetching}) => {
    return <form onSubmit={handleSubmit}>
        <Box mt={2}>
       <BioFormField/>
        <Box mt={3}>
            {
                submitButton(isFetching, "Save", "contained", "primary")
            }
        </Box>
        </Box>
    </form>
}


let BiographyReduxForm = reduxForm<FormPropsType, PropsType>({
    form: 'biography',
    enableReinitialize: true
})(BiographyForm)

export default BiographyReduxForm
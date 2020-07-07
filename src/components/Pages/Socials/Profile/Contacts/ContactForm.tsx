import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {SamuraiType} from "../../../../../types/socials";
import {renderTextFieldWithIcon} from "../../../../../utils/helpers/FormInput";
import {Box} from "@material-ui/core";
import Loaded from "../../../../Loaded";
import {submitButton} from "../../../../../utils/helpers/SubmitButton";
import FormFields from "./FormFields";

type PropsType = {
    userInfo: SamuraiType | null
    isFetching: boolean
}

const ContactForm: React.FC<InjectedFormProps<SamuraiType, PropsType> & PropsType> = ({handleSubmit, userInfo, isFetching}) => {
    if (!userInfo)
        return <Loaded/>

    return <form onSubmit={handleSubmit}>
       <FormFields userInfo={userInfo}/>
        <Box mt={3}>
            {
                submitButton(isFetching, "Save", "contained", "primary")
            }
        </Box>
    </form>
}


let ContactReduxForm = reduxForm<SamuraiType, PropsType>({
    form: 'contacts',
    enableReinitialize: true
})(ContactForm);
export default ContactReduxForm





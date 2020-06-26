import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Contacts} from "../../../../../types/socials";
import {renderField, renderSwitchField} from "../../../../../utils/helpers/FormInput";
import {Box} from "@material-ui/core";
import Button from "@material-ui/core/Button";


type FormPropsType = {
    contacts : Contacts
}
type PropsType = {

}

const ContactForm: React.FC<InjectedFormProps<FormPropsType, PropsType> & PropsType> = ({handleSubmit}) => {
return <form onSubmit={handleSubmit}>

    <Field
        name="github"
        component={renderField}
        label={"GitHub "}
        fullWidth
        type="text"
    />
    <Field
        name="vk"
        component={renderField}
        label={"VK "}
        fullWidth
        type="text"
    />
    <Field
        name="facebook"
        component={renderField}
        label={"Facebook "}
        fullWidth
        type="text"
    />
    <Field
        name="instagram"
        component={renderField}
        label={"Instagram "}
        fullWidth
        type="text"
    />
    <Field
        name="twitter"
        component={renderField}
        label={"Twitter "}
        fullWidth
        type="text"
    />
    <Field
        name="website"
        component={renderField}
        label={"Website "}
        fullWidth
        type="text"
    />
    <Field
        name="youtube"
        component={renderField}
        label={"Youtube "}
        fullWidth
        type="text"
    />
    <Field
        name="mainLink"
        component={renderField}
        label={"Main link "}
        fullWidth
        type="text"
    />
    <Box mt={3}>
        <Button type={"submit"} variant="contained" component={"button"} color="primary" >
            Ok!
        </Button>
    </Box>
</form>
}


let ContactReduxForm = reduxForm<FormPropsType, PropsType>({
    form: 'contacts'
})(ContactForm);
export default ContactReduxForm





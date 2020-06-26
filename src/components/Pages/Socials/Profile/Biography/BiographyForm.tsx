import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Box} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {renderField} from "../../../../../utils/helpers/FormInput";

type PropsType = {

}

type FormPropsType = {
    aboutMe: string
}


const BiographyForm:React.FC<InjectedFormProps<FormPropsType, PropsType> & PropsType> = ({handleSubmit}) => {
    return <form onSubmit={handleSubmit}>
        <Box mt={2}>
       <Field
            name="aboutMe"
            component={renderField}
            label={"About me description"}
            variant={"outlined"}
            multiline
            rows={4}
            fullWidth
        />
        <Box mt={3}>
            <Button type={"submit"} variant="contained" component={"button"} color="primary" >
                Ok!
            </Button>
        </Box>
        </Box>
    </form>
}


let BiographyReduxForm = reduxForm<FormPropsType, PropsType>({
    form: 'biography'
})(BiographyForm)

export default BiographyReduxForm
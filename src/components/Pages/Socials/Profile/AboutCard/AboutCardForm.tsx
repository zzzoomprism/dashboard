import React, {useState} from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import Button from "@material-ui/core/Button";
import {Box, FormControlLabel, Switch, TextField} from "@material-ui/core";
import {renderField, renderSwitchField} from "../../../../../utils/helpers/FormInput";

type PropsType = {
    lookingJob: boolean
    desc: string
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


const AboutCardForm: React.FC<InjectedFormProps<FormProps, PropsType> & PropsType> = ({handleSubmit, desc, lookingJob}) => {
    const [checked, setChecked] = useState(lookingJob || false);
    const handleChecked = () => {
        setChecked(!checked);
    }
    return <form onSubmit={handleSubmit}>
        <Field
            checked={checked}
            onChange={handleChecked}
            name="lookingForAJob"
            component={renderSwitchField}
            label={"Are you looking for a job?"}
        />
        {checked ? <Field
            name="lookingForAJobDescription"
            component={renderField}
            label={"Looking for a job Description: "}
            fullWidth
            type="text"
            placeholder="Short job description"
            value={desc}
        /> : ""}
        <Box mt={3}>
            <Button type={"submit"} variant="contained" component={"button"} color="primary" >
                Ok!
            </Button>
        </Box>
    </form>
};

let AboutCardFormRedux = reduxForm<FormProps, PropsType>({
    form: 'aboutCardForm'
})(AboutCardForm);


export default AboutCardFormRedux;
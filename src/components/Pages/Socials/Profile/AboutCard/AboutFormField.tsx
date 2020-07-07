import React, {Fragment, useState} from 'react';
import {Field} from "redux-form";
import {renderField, renderSwitchField} from "../../../../../utils/helpers/FormInput";

type PropsType = {
    lookingJob: boolean
}

const AboutFormField:React.FC<PropsType> = ({lookingJob}) => {
    const [checked, setChecked] = useState(lookingJob || false);
    const handleChecked = () => {
        setChecked(!checked);
    }
    return (
        <Fragment>
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
            /> : ""}
        </Fragment>
    );
};

export default AboutFormField;
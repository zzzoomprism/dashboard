import React, { Fragment } from 'react';
import {renderField} from "../../../../../utils/helpers/FormInput";
import {Field} from "redux-form";

const BioFormField = () => {
    return (
        <Fragment>
            <Field
                name="aboutMe"
                component={renderField}
                label={"About me description"}
                variant={"outlined"}
                type={"text"}
                multiline
                rows={4}
                fullWidth
            />
        </Fragment>
    );
};

export default BioFormField;
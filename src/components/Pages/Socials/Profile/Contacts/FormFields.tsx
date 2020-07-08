import React, {Fragment} from 'react';
import {Field} from "redux-form";
import {renderTextFieldWithIcon} from "../../../../../utils/helpers/FormInput";
import {SamuraiType} from "../../../../../types/socials";


type PropsType = {
    userInfo: SamuraiType
}


const FormFields: React.FC<PropsType> = ({userInfo}) => {
    let fieldsArray = Object.keys(userInfo.contacts).map((el) => {
        return <Field
            name={`contacts.${el}`}
            icon={el}
            component={renderTextFieldWithIcon}
            label={el}
            fullWidth
            type="text"
            key={el + "-form"}
        />
    })
    return (
        <Fragment>
            {fieldsArray}
        </Fragment>

    );
};

export default FormFields;
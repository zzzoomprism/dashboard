import React, {Fragment, useState} from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {
    renderField,
    renderSwitchField,
    renderTextFieldWithIcon
} from "../../../../utils/helpers/FormInput";
import {required} from "../../../../utils/validators/validator";
import {Box, Divider, Grid, Typography} from "@material-ui/core";
import {SamuraiType} from "../../../../types/socials";
import Loaded from "../../../Loaded";
import FormFields from "../../Socials/Profile/Contacts/FormFields";
import {submitButton} from "../../../../utils/helpers/SubmitButton";
import BioFormField from "../../Socials/Profile/Biography/BioFormField";
import AboutFormField from "../../Socials/Profile/AboutCard/AboutFormField";
import {withAuthRedirect} from "../../../../hoc/AuthRedirect";


type PropsType = {
    profile: SamuraiType
}
const ProfileForm:React.FC<InjectedFormProps<Omit<SamuraiType, 'photos'>, PropsType> & PropsType> = ({profile, handleSubmit}) => {
    const [lookingForAJobChecked, setChecked] = useState(profile.lookingForAJob);
    const [isFetching, setIsFetching] = useState(false);
    const handleChecked = () => {setChecked(!lookingForAJobChecked);}

    return (
            <form style={{width: "100%", display: "flex", flexDirection: "column"}} onSubmit={handleSubmit}>
                <Field name={"fullName"} component={renderField}
                       validate={[
                           required
                       ]}
                       variant={"outlined"}
                       label={"Full Name"}/>

                <AboutFormField lookingJob={profile.lookingForAJob}/>

                <BioFormField/>
                <Typography variant={'h3'}>Contacts Information</Typography>
                <Divider/>
                <FormFields userInfo={profile}/>
                {submitButton(isFetching, "Save", "contained", "primary")}
            </form>
    );
};


let ProfileSettingsForm = reduxForm<Omit<SamuraiType, 'photos'>, PropsType>({
    form: 'profileSettings',
    enableReinitialize: true
})(ProfileForm);

export default ProfileSettingsForm;
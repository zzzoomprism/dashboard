import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";
import {Box, Divider, Fab, Grid, Tooltip} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import {formChecking} from "../../../../../hoc/FormEditCheck";
import {compose} from "redux";
import BiographyReduxForm from "./BiographyForm";
import {SamuraiType} from "../../../../../types/socials";
import {Form, InjectedFormProps} from "redux-form";
import HeadLineOfProfilePaper from "../../components/HeadLineOfProfilePaper";
import {ErrorType} from "../../../../../types/errors";
import SnackBarContainer from "../../../components/SnackbarContainer";


const useStyle = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3),
    },
}));
type FormProps = {
    aboutMe: string
}
type PropsType = {
    description: string
    fullname: string
    isEdit: boolean
    isFetching: boolean
    error: ErrorType | null
    editButton: React.ComponentType,
    closeEditMode: () => void
    updateProfile: (formData: FormProps, formName: string) => Promise<void>
    user: SamuraiType
}
const Biography:React.FC<PropsType> = ({description, fullname, editButton, isEdit,closeEditMode, user,isFetching,error,  updateProfile}) => {
    const classes = useStyle();
    const onSubmit = (formData: any) => {
        updateProfile(formData, 'biography')
            .then(() => {
                closeEditMode();
            })
    }
    return <Paper className={classes.paper}>
        <HeadLineOfProfilePaper editButton={editButton} headline={"Biography"}/>
        {isEdit ? <BiographyReduxForm isFetching={isFetching} initialValues={user} onSubmit={onSubmit}/> :  <Box>
            {(!fullname) ?  <Skeleton animation="wave" height={10} width={"25%"}/> :
                <Typography variant={"caption"} color={"secondary"} >
                    A little flash back of {fullname}
                </Typography>
            }
            {(!description) ?  <Skeleton animation="wave" height={10} width={"25%"}/> :
                <Typography variant={"body2"}>
                    {description || "There is no description."}
                </Typography>
            }
        </Box> }
        {error && !isFetching &&
        <SnackBarContainer error={error} successAlert={"Your information about you update successfully!"}/>}
    </Paper>
};

export default compose(formChecking)(Biography);
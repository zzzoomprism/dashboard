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
    editButton: React.ComponentType,
    closeEditMode: () => void
    updateProfile: (formData: FormProps) => void
}
const Biography:React.FC<InjectedFormProps<FormProps, PropsType> & PropsType> = ({description, fullname, editButton, isEdit,closeEditMode, updateProfile}) => {
    const classes = useStyle();
    return <Paper className={classes.paper}>
        <Grid container direction="row"
              justify="space-between"
              alignItems="center">
            <Grid item>
                <Typography variant={"h3"}>
                    Biography
                </Typography>
            </Grid>
            <Grid item>
                {editButton}
            </Grid>
        </Grid>
        <Divider/>
        {isEdit ? <BiographyReduxForm onSubmit={(formData: FormProps) => {updateProfile(formData); closeEditMode();}}/> :  <Box>
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


    </Paper>
};

export default compose(formChecking)(Biography);
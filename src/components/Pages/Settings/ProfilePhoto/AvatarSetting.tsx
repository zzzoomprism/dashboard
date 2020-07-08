import React, {useState} from 'react';
import {Avatar, Badge, Button} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import {makeStyles} from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import {SamuraiType} from "../../../../types/socials";
import {ErrorType} from "../../../../types/errors";
import Loaded from "../../../Loaded";

const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none',
    },
    avatar: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        cursor: "pointer"
    }
}));

type PropsType = {
    user: SamuraiType | null
    isFetching?: boolean,
    error?: ErrorType | null,
    updatePhoto: (image: any) => Promise<void>
}

const AvatarSetting: React.FC<PropsType> = ({user, updatePhoto}) => {
    const classes = useStyles();
    const [isDialogOpen, setDialogOpen] = useState(false);
    const handleClose = () => {
        setDialogOpen(false)
    };
    const handleOpen = () => {
        setDialogOpen(true)
    };
    const uploadPhotoChange = (form: any) => {
        updatePhoto(form.target.files[0])
            .then(() => {
                setDialogOpen(false)
            })
    };
    if (!user)
        return <Loaded/>
    return (
        <Badge color={"default"}
               anchorOrigin={{
                   vertical: 'bottom',
                   horizontal: 'right',
               }}
               badgeContent={<Button onClick={handleOpen} size={"small"}
                                     variant="contained"
                                     color="secondary"
                                     startIcon={<EditIcon/>}>
                   Edit
               </Button>} showZero>
            <Avatar className={classes.avatar} src={user.photos.large}/>

            <Dialog open={isDialogOpen} onClose={handleClose}
                    fullWidth={true}
                    maxWidth={"md"}
                    aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Update your profile photo</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Click button to upload
                    </DialogContentText>
                    <Avatar className={classes.avatar} src={user.photos.large} variant="rounded"/>
                </DialogContent>
                <DialogActions>
                    <input
                        onChange={uploadPhotoChange}
                        accept="image/*"
                        id="contained-button-file"
                        multiple
                        className={classes.input}
                        type="file"
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="outlined" color="primary" component="span">
                            Upload
                        </Button>
                    </label>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Badge>
    );
};

export default AvatarSetting;
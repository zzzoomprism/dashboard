import React, {Fragment, useState} from 'react';
import {Avatar, Badge, Button, Grid} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import {makeStyles} from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import LargeAvatar from "../../../../utils/helpers/LargeAvatar";
import {SamuraiType} from "../../../../types/socials";

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        cursor: "pointer"
    },
    input: {
        display: 'none',
    },
}));

type PropsType = {
    user: SamuraiType
    updatePhoto: (image: any) => void
}

const AvatarSetting: React.FC<PropsType> = ({user, updatePhoto}) => {
    const classes = useStyles();
    const [isDialogOpen, setDialogOpen] = useState(false);
    const [image, setImage] = useState(null as any);
    const [imageView, setImageView] = useState(user.photos.large);
    const handleClose = () => {setDialogOpen(false)};
    const handleOpen = () => {setDialogOpen(true)};
    const uploadPhotoChange = (form: any) => {
        console.log(form.target.files[0]);
        setImage(form.target.files[0]);
    };

    return (
        <Badge color={"default"}
               anchorOrigin={{
                   vertical: 'bottom',
                   horizontal: 'right',
               }}
               badgeContent={ <Button onClick={handleOpen} size={"small"}
                                      variant="contained"
                                      color="secondary"
                                      startIcon={<EditIcon />}>
                   Edit
               </Button>} showZero>
            <Avatar className={classes.large}/>

            <Dialog open={true} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Update you photo
                    </DialogContentText>
                    <LargeAvatar picture={imageView}/>
                    <Fragment>
                        <input
                            onChange={uploadPhotoChange}
                            accept="image/*"
                            id="contained-button-file"
                            multiple
                            className={classes.input}
                            type="file"
                        />
                        <label htmlFor="contained-button-file">
                            <Button variant="contained" color="primary" component="span">
                                Upload
                            </Button>
                        </label>
                    </Fragment>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={() => updatePhoto(image)} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </Badge>
    );
};

export default AvatarSetting;
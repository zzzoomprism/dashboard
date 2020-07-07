import React from 'react';
import {Avatar, Badge, Button, Grid} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        cursor: "pointer"
    },
}))

const AvatarSetting = () => {
    const classes = useStyles();
    return (
        <Badge color={"default"}
               anchorOrigin={{
                   vertical: 'bottom',
                   horizontal: 'right',
               }}
               badgeContent={ <Button size={"small"}
                                      variant="contained"
                                      color="secondary"
                                      startIcon={<EditIcon />}>
                   Edit
               </Button>} showZero>
            <Avatar className={classes.large}/>
        </Badge>
    );
};

export default AvatarSetting;
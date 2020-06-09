import React, {Fragment} from "react";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import LargeAvatar from "../../../../utils/helpers/LargeAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

const ListItemOfPerson = (props) => {
    return <Fragment>
    <ListItem alignItems="flex-start" className={props.classProp}>
            <Grid container display={"flex"} alignItems="center" justify="space-between">
                <ListItemAvatar>
                    <LargeAvatar picture={props.photo}/>
                </ListItemAvatar>
                <ListItemText className={props.textClassProp}
                    primary={props.personName}
                    secondary={
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                Florida, USA
                            </Typography>
                    }
                />

                <Button variant="outlined" color="primary">
                    {props.followed ? "UNFOLLOW" : "FOLLOW"}
                </Button>
            </Grid>
        </ListItem>
        <Divider/>
    </Fragment>
};

export default ListItemOfPerson;
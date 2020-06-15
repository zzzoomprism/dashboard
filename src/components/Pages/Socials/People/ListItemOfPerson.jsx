import React, {Fragment} from "react";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import LargeAvatar from "../../../../utils/helpers/LargeAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Skeleton from "@material-ui/lab/Skeleton";
import {Link} from "react-router-dom";

const ListItemOfPerson = (props) => {

    return <Fragment>
    <ListItem alignItems="flex-start" className={props.classProp}>
            <Grid container display={"flex"} alignItems="center" justify="space-between">
                {props.loading ? <Skeleton variant={"circle"}>
                    <LargeAvatar/>
                </Skeleton> :  <ListItemAvatar>
                    <LargeAvatar picture={props.photo}/>
                </ListItemAvatar>}

                <ListItemText className={props.textClassProp}
                    primary={props.loading ? <Skeleton/> :  <Link to={`/socials/people/${props.id}`}>{props.personName}</Link> }
                    secondary={
                            <Typography
                                component="span"
                                variant="body2"
                                color="textPrimary"
                            >
                                {props.loading ? <Skeleton/> : "Florida, USA"}
                            </Typography>
                    }
                />
                { props.loading ? " " :
                    props.followed ? <Button variant="contained" color="primary" onClick={props.unfollowClick} >
                        UNFOLLOW
                    </Button>
                        : <Button variant="outlined" color="primary" onClick={props.followClick}>
                            FOLLOW
                        </Button>
                }
            </Grid>
        </ListItem>
        <Divider/>
    </Fragment>
};

export default ListItemOfPerson;
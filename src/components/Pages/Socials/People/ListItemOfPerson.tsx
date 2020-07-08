import React, {Fragment} from "react";
import ListItem from "@material-ui/core/ListItem";
import Grid from "@material-ui/core/Grid";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import LargeAvatar from "../../../../utils/helpers/LargeAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Skeleton from "@material-ui/lab/Skeleton";
import {Link} from "react-router-dom";
import FollowButtonContainer from "../components/FollowButtonContainer";


type PropsType = {
    classProp?: any
    photo?: string | null
    textClassProp?: string
    loading: boolean
    id?: number
    personName?: string
    followed?: boolean
}


const ListItemOfPerson: React.FC<PropsType> = ({classProp, photo, textClassProp, loading, id, personName, followed}) => {
    return <Fragment>
        <ListItem alignItems="flex-start" className={classProp}>
            {/*   @ts-ignore*/}
            <Grid container display={"flex"} alignItems="center" justify="space-between">
                {loading ? <Skeleton variant={"circle"}>
                    <LargeAvatar/>
                </Skeleton> : <ListItemAvatar>
                    <LargeAvatar picture={photo}/>
                </ListItemAvatar>}

                <ListItemText className={textClassProp} primary={loading ? <Skeleton/> :
                    <Link to={{pathname: `/profile/${id}`, state: {followed: followed}}}>{personName}</Link>}
                              secondary={
                                  <Typography
                                      component="span"
                                      variant="body2"
                                      color="textPrimary"
                                  >
                                      {loading ? <Skeleton/> : "Florida, USA"}
                                  </Typography>
                              }
                />
                <FollowButtonContainer followed={followed || false} id={id || 0}/>
            </Grid>
        </ListItem>
        <Divider/>
    </Fragment>
};

export default ListItemOfPerson;
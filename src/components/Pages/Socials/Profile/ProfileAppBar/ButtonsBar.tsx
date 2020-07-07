import React, { Fragment } from 'react';
import Grid from "@material-ui/core/Grid";
import {Link, NavLink} from "react-router-dom";
import Button from "@material-ui/core/Button";
import SettingsIcon from "@material-ui/icons/Settings";
import {CircularProgress} from "@material-ui/core";
import FollowButtonContainer from "../../components/FollowButtonContainer";
import {makeStyles} from "@material-ui/core/styles";
import {SamuraiType} from "../../../../../types/socials";

const useStyle = makeStyles((theme) => ({
    container: {
        background: "#333",
        minHeight: 200,
        //justifyContent: "space-between",
        padding: theme.spacing(3),
        [theme.breakpoints.down("md")]: {
            justifyContent: "center",
        }
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        cursor: "pointer"
    },
    menuBlock: {
        marginTop: theme.spacing(5),
    },
    links: {
        padding: theme.spacing(3),
        textDecoration: "none",
        color: "white",
        '&:hover': {
            color: theme.palette.primary
        }
    },
}));

type PropsType = {
    profile_info: SamuraiType | null,
    userId: number | null,
    isCurrentUserFollowed: boolean
    getFollowLoading: boolean
}


const ButtonsBar:React.FC<PropsType> = ({profile_info, userId, getFollowLoading, isCurrentUserFollowed}) => {
    const classes = useStyle();
    return (
       <Fragment>
           {(profile_info && userId === profile_info.userId) ?
               <Grid className={classes.menuBlock} container justify={"space-between"} alignItems={"center"}>
                   <Grid item>
                       <Link to="#" className={classes.links}>
                           About !
                       </Link>
                       <Link to="#" className={classes.links}>
                           Friends !
                       </Link>
                       <Link to="#" className={classes.links}>
                           Saved Jobs !
                       </Link>
                   </Grid>
                   <Grid item>
                       <Button
                           startIcon={<SettingsIcon/>}
                       >
                           <NavLink to={"/settings/profile"}>Settings</NavLink>
                       </Button>
                   </Grid>
               </Grid>
               :
               <Grid className={classes.menuBlock} container justify={"flex-end"} alignItems={"center"}>
                   <Grid item>
                       {getFollowLoading ? <CircularProgress/> :
                           <FollowButtonContainer id={(!profile_info) ? 0 : profile_info.userId}
                                                  followed={isCurrentUserFollowed}/>}
                   </Grid>
               </Grid>

           }
       </Fragment>
    );
};

export default ButtonsBar;
import React, {Fragment, useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import ShortInfoOfProfile from "./ShortInfoOfProfile";
import FollowersButton from "./FollowersButton";
import ButtonsBar from "./ButtonsBar";
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
    getCurrentUserFollow: (id: number) => void
    followingCount: number
}

const ProfileAppBar: React.FC<PropsType> = ({profile_info, userId, getCurrentUserFollow, isCurrentUserFollowed, followingCount}) => {
    const classes = useStyle();
    const [getFollowLoading, setLoading] = useState(false);
    useEffect(() => {
        if (profile_info) {
            setLoading(true);
            getCurrentUserFollow(profile_info.userId);
            setTimeout(() => setLoading(false), 1000);
        } else
            setLoading(true);

    }, [profile_info]);
    return <Fragment><Grid container className={classes.container}
                           direction="row"
                           alignItems="center" justify={"space-between"}>
        <Grid item xs={12} sm={12} md={6}>
            <ShortInfoOfProfile profile_info={profile_info}/>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
            <FollowersButton followingCount={followingCount}/>
        </Grid>

        <ButtonsBar getFollowLoading={getFollowLoading} isCurrentUserFollowed={isCurrentUserFollowed}
                    profile_info={profile_info} userId={userId}/>

    </Grid>

    </Fragment>
};

export default ProfileAppBar;
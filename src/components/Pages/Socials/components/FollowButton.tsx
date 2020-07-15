import React, {Fragment, useEffect, useState} from "react";
import Button from "@material-ui/core/Button";
import {CircularProgress} from "@material-ui/core";


type PropsType = {
    followed?: boolean
    id: number
    peopleSetLoading: boolean
    followingThunk: (userId: number) => void
    unfollowingThunk: (userId: number) => void
    followQueue: Array<number>
    getUserFollowingInfo: (userId: number) => void
}


const FollowButton: React.FC<PropsType> = ({followed, followingThunk, unfollowingThunk, getUserFollowingInfo, id, peopleSetLoading, followQueue}) => {
    let isLoading = followQueue.includes(id);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true);
        getUserFollowingInfo(id);
        setTimeout(()=>{setLoading(false)}, 300);
    },[]);
    return <Fragment>
        {
            (isLoading || peopleSetLoading || loading) ? <CircularProgress/> :
                followed ? <Button variant="contained" color="primary" onClick={() => unfollowingThunk(id)}>
                        UNFOLLOW
                    </Button>
                    : <Button variant="outlined" color="primary" onClick={() => followingThunk(id)}>
                        FOLLOW
                    </Button>
        }
    </Fragment>
}

export default FollowButton;
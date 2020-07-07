import React, {Fragment, useEffect} from "react";
import Button from "@material-ui/core/Button";
import {CircularProgress} from "@material-ui/core";



type PropsType = {
    followed?: boolean
    id: number
    peopleSetLoading: boolean
    followingThunk: (userId: number) => void
    unfollowingThunk: (userId: number) => void
    followQueue: Array<number>
}


const FollowButton: React.FC<PropsType> = ({ followed, followingThunk, unfollowingThunk, id, peopleSetLoading, followQueue}) => {
    let isLoading = followQueue.includes(id);
    return <Fragment>
        {
            (isLoading || peopleSetLoading)  ? <CircularProgress/> :
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
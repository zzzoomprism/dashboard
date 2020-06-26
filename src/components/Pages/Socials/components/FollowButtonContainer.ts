import React from "react";
import {connect} from "react-redux";
import FollowButton from "./FollowButton";
import {RootStateType} from "../../../../redux/rootReducer";
import {followingThunk, getCurrentUserFollow, unfollowingThunk} from "../../../../redux/Socials/peopleReducer";


type MapStateType = {
    isLoading: boolean
    peopleSetLoading:boolean
}

type MapDispatchtype = {
    followingThunk: (userId: number) => void
    unfollowingThunk: (userId: number) => void
}
type OwnPropsType = {
    followed: boolean
    id: number | null
}

const mapStateToProps = (store: RootStateType) => ({
    isLoading: store.people.followingIsFetching,
    peopleSetLoading: store.people.loading
});


//<TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState>
export default connect<MapStateType, MapDispatchtype, OwnPropsType, RootStateType>(mapStateToProps, {followingThunk, unfollowingThunk })(FollowButton);
import React from "react";
import {connect} from "react-redux";
import Following from "./Following";
import {RootStateType} from "../../../../redux/rootReducer";
import {setFollowingUsersThunk, unFollowFriend} from "../../../../redux/Socials/followingReducer";

const mapStateToProps = (store: RootStateType) => ({
    totalCount: store.profile.followingCount,
    followingUsers: store.following.followingUsers,
    isFetching: store.following.isFetching
});

export default connect(mapStateToProps, {setFollowingUsersThunk, unFollowFriend})(Following);
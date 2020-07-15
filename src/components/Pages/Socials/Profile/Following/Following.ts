import React from "react";
import {connect} from "react-redux";
import Friends from "./Friends";
import {RootStateType} from "../../../../../redux/rootReducer";



const mapStateToProps = (store: RootStateType) => ({
    countOfFollowing: store.profile.followingCount,
    followingPeople: store.profile.followingPeople
});


export default connect(mapStateToProps, {})(Friends);
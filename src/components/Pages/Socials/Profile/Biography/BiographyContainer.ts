import React from "react";
import {RootStateType} from "../../../../../redux/rootReducer";
import Biography from "./Biography";
import {connect} from "react-redux";
import {updateProfile} from "../../../../../redux/Socials/profileReducer";


const mapStateToProps = (store: RootStateType) => ({
    user: store.profile.user,
    isFetching: store.profile.isFetching,
    error: store.profile.error,
});


export default connect(mapStateToProps, {updateProfile})(Biography);
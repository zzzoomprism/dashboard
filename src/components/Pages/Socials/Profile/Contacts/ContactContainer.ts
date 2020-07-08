import React from "react";
import {connect} from "react-redux";
import Contact from "./Contact";
import {RootStateType} from "../../../../../redux/rootReducer";
import {updateProfile} from "../../../../../redux/Socials/profileReducer";


const mapStateToProps = (store: RootStateType) => ({
    user: store.profile.user,
    isFetching: store.profile.isFetching,
    error: store.profile.error,
});


export default connect(mapStateToProps, {updateProfile})(Contact);
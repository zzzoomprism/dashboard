import React from "react";
import {connect} from "react-redux";
import Profile from "./Profile";
import {getUserByIdThunk} from "../../../../../redux/Socials/profileReducer";
import {SamuraiType} from "../../../../../types/socials";
import {RootStateType} from "../../../../../redux/rootReducer";

type ProfilePropsType = {
    user: SamuraiType | null
}


const mapStateToProps = (store: RootStateType): ProfilePropsType => ({
    user: store.profile.user,
});


export default connect(mapStateToProps, {getUserByIdThunk})(Profile);
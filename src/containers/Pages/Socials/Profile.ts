import React from "react";
import {connect} from "react-redux";
import Profile from "../../../components/Pages/Socials/Profile/Profile";
import {getUserByUserId} from "../../../redux/Socials/profileReducer";
import {PeopleType} from "../../../types/socials";

type ProfilePropsType = {
        user: PeopleType | null
}


const mapStateToProps = (store: any): ProfilePropsType => ({
        user: store.profile.user,
});


export default connect(mapStateToProps, {getUserByUserId})(Profile);
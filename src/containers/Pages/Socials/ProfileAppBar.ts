import React from "react";
import ProfileAppBar from "../../../components/Pages/Socials/Profile/ProfileAppBar";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/rootReducer";
import {SamuraiType} from "../../../types/socials";

type MapStatePropsType = {
    profile_info: SamuraiType | null
}

const mapStateToProps = (store: RootStateType): MapStatePropsType => ({
    profile_info: store.profile.user,

});



export default connect(mapStateToProps, {})(ProfileAppBar);
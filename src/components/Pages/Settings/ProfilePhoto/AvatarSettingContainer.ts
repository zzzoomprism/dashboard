import React from "react";
import {RootStateType} from "../../../../redux/rootReducer";
import {connect} from "react-redux";
import AvatarSetting from "./AvatarSetting";
import {updatePhoto} from "../../../../redux/Socials/profileReducer";

const mapStoreToProps = (store:RootStateType) => ({
});

export default connect(mapStoreToProps, {updatePhoto})(AvatarSetting);
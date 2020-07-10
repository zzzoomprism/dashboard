import React from "react";
import SettingSideBar from "./SettingSideBar";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/rootReducer";


const mapStateToProps = (store: RootStateType) =>({
    user: store.profile.currentUser,
})

export default connect(mapStateToProps, {})(SettingSideBar);

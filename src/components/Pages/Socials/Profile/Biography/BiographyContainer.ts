import React from "react";
import {RootStateType} from "../../../../../redux/rootReducer";
import Biography from "./Biography";
import {connect} from "react-redux";
import {updateProfile} from "../../../../../redux/Socials/profileReducer";


const mapStateToProps = (store: RootStateType) => ({

});


export default connect(mapStateToProps, {updateProfile})(Biography);
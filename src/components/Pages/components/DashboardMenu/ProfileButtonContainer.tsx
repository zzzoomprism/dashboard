import React from "react";
import {connect} from "react-redux";
import ProfileButton from "./ProfileButton";
import {RootStateType} from "../../../../redux/rootReducer";


const mapStoreToProps = (store: RootStateType) =>({
        user: store.profile.currentUser,
        userId: store.app.user
});


export default connect(mapStoreToProps,{})(ProfileButton);
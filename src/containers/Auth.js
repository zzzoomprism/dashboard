import React from "react";
import {connect} from "react-redux";
import Auth from "./../components/Pages/Auth/Auth";
import {login} from "../redux/appReducer";

const mapStoreToProps = (store) => ({
    isAuth: store.app.isAuth,
    errorMessage: store.app.loginErrorMessage,
    loading: store.app.loading,
    user_data: store.profile.user_data
});


export default connect(mapStoreToProps, {login})(Auth);
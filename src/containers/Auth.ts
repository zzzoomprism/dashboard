import React from "react";
import {connect} from "react-redux";
import Auth from "../components/Pages/Auth/Auth";
import {login} from "../redux/appReducer";
import {RootStateType} from "../redux/rootReducer";
import {PeopleType} from "../types/socials";

type MapStatePropsType = {
    isAuth: boolean,
    errorMessage: Array<string> | null | string,
    loading: boolean,
    user_data: PeopleType | null,
}

type MapDispatchPropsType = {
    login: (login_data: string, password_data: string) => void
}

const mapStoreToProps = (store: RootStateType) => ({
    isAuth: store.app.isAuth,
    errorMessage: store.app.loginErrorMessage,
    loading: store.app.loading,
    user_data: store.profile.user_data
});

//TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
export default connect<MapStatePropsType, MapDispatchPropsType, {},  RootStateType>(mapStoreToProps, {login})(Auth);
import React from "react";
import {connect} from "react-redux";
import Auth from "../components/Pages/Auth/Auth";
import {loginThunk} from "../redux/appReducer";
import {RootStateType} from "../redux/rootReducer";
import {PeopleType, SamuraiType} from "../types/socials";

type MapStatePropsType = {
    isAuth: boolean,
    errorMessage: Array<string> | null | string,
    loading: boolean,
    user: number | null
}

type MapDispatchPropsType = {
    loginThunk: (login_data: string, password_data: string) => void,

}

const mapStoreToProps = (store: RootStateType) => ({
    isAuth: store.app.isAuth,
    errorMessage: store.app.loginErrorMessage,
    loading: store.app.loading,
    user: store.app.user
});

//TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
export default connect<MapStatePropsType, MapDispatchPropsType, {},  RootStateType>(mapStoreToProps, { loginThunk})(Auth);
import {userAPI} from "../api/api";
import {put, call, takeLatest } from "redux-saga/effects";


export function* login(action){
    try{
        yield put({type: "LOADING", data: true});
        let login_user = yield call(userAPI.login, action.login, action.password);
        yield put({type: "LOGIN", data: login_user});
        if(!login_user.resultCode){
            let user_data = yield call(userAPI.me);
            console.log(user_data);
            yield put({type: "SET_USER_DATA", user_data});
            yield put({type: "LOADING", data: false});
        }
    }
    catch (e) {
        console.log(e);
    }
}


export function* loginWatch(){
    yield takeLatest("LOGIN_USER", login);
}


export function* getUser(action){
    try{
        //yield put({type: "LOADING", data: true});
        let user = yield call(userAPI.getUserById, action.id);
        yield put({type: "GET_USER", user});
    }
    catch (e) {
        console.log(e);
    }
}



export function* getUserProfile(){
    yield takeLatest("GET_USER_PROFILE", getUser);
}
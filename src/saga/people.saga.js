import {userAPI} from "../api/api";
import {takeLatest, put, call, takeEvery} from "redux-saga/effects";
import {delay} from "@redux-saga/core/effects";

export function* setPeopleSagas(){
    try{
        yield put({type: "SET_PEOPLE_LOADING", data: true});
        let people = yield call(userAPI.users);
        yield put({type: "SET_PEOPLE_TO_STATE", people});
        delay(3000);
        yield put({type: "SET_PEOPLE_LOADING", data: false});

    }
    catch (e) {
        console.log(e);
    }

}


export function* setPeopleWatch(){
    yield takeLatest("SET_PEOPLE", setPeopleSagas )
}

export function* sendFollowApi(action){
    let response = yield call(userAPI.follow, action.id);
        console.log(response);
    yield put({type: "FOLLOW_ACTION", id: action.id})
}


export function* followUser(){
    yield takeLatest("FOLLOW", sendFollowApi);
}

export function* unfollowingAction(action){
    let response = yield call(userAPI.unfollow, action.id);
    console.log(response);
    yield put({type: "UNFOLLOW_ACTION", id: action.id})
}

export function* unfollowUser() {
    yield takeLatest("UNFOLLOW", unfollowingAction);
}
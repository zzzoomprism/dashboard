import {put, call, takeLatest } from "redux-saga/effects";
import {userAPI} from "../api/api";

export const myDelay = ms => new Promise(res => setTimeout(res, ms));

export function* getUsers(action) {
    try{
        let users = yield call (userAPI.getUsers, action.currentPage);
        yield put({type: "SET_USERS", users});
    }
    catch (e) {
        console.log(e);
    }
}

export function* sendMoneyToSetUsers() {
    yield takeLatest("SEND_MONEY_TO_SET_USERS", getUsers);
}

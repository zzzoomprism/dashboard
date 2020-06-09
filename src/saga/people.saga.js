import {userAPI} from "../api/api";
import {takeLatest, put, call} from "redux-saga/effects";

export function* setPeopleSagas(action){
    try{
        //yield put({type: "LOADING", data: true});
        let people = yield call(userAPI.users);
        console.log(people);
        yield put({type: "SET_PEOPLE_TO_STATE", people});

    }
    catch (e) {
        console.log(e);
    }

}


export function* setPeopleWatch(){
    yield takeLatest("SET_PEOPLE", setPeopleSagas )
}
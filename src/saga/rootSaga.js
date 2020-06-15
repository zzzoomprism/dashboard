import {fork, all} from "redux-saga/effects";
import {sendMoneyToSetUsers} from "./currency.saga";
import {loginWatch} from "./profile.saga";
import {setPeopleWatch, followUser, unfollowUser} from "./people.saga";

export default function* rootSaga() {
    yield all([
        fork(sendMoneyToSetUsers),
        fork(loginWatch),
        fork(setPeopleWatch),
        fork(followUser),
        fork(unfollowUser)
    ])

}



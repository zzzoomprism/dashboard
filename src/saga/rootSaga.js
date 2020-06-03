import { put, takeLatest } from "redux-saga/effects";

export const myDelay = ms => new Promise(res => setTimeout(res, ms));

export function* fetchData(action) {

}

export function* watch() {
  yield takeLatest("UPDATE_CART_COUNT_CHECK", fetchData);
}

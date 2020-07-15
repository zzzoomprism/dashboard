import {combineReducers} from "redux";
import appBarReducer from "./appBarReducer";
import cryptoReducer from "./Dashboard/cryptoReducer";
import appReducer from "./appReducer";
import profileReducer from "./Socials/profileReducer";
import peopleReducer from "./Socials/peopleReducer";
import followingReducer from "./Socials/followingReducer";
import {reducer as formReducer} from "redux-form";

export const rootReducer = combineReducers({
    appBar: appBarReducer,
    crypto: cryptoReducer,
    app: appReducer,
    profile: profileReducer,
    people: peopleReducer,
    following: followingReducer,
    form: formReducer,
});

//type ActionTypes<T> = T extends {[key: string]: infer U} ? U : never;
//export type InferActionTypes<T extends {[key: string]: (...arg: any[]) => any}> = ReturnType<ActionTypes<T>>

export type InferActionTypes<T> = T extends { [key: string]: (...args: any[]) => infer R } ? R : never;


export type RootStateType = ReturnType<typeof rootReducer>



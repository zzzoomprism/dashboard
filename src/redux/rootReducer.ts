import {combineReducers} from "redux";
import appBarReducer from "./appBarReducer";
import cryptoReducer from "./Dashboard/cryptoReducer";
import appReducer from "./appReducer";
import profileReducer from "./Socials/profileReducer";
import peopleReducer from "./Socials/peopleReducer";
import {reducer as formReducer} from "redux-form";

export const rootReducer = combineReducers({
    appBar: appBarReducer,
    crypto: cryptoReducer,
    app: appReducer,
    profile: profileReducer,
    people: peopleReducer,
    form: formReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>

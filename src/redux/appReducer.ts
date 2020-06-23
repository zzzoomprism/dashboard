import {serverAPI} from "../api/api";
import {LoginServerType} from "../types/socials";
import {AxiosPromise} from "axios";

export type InitialStateType = typeof initialState;

const initialState = {
    isAuth: false as boolean,
    user: null as number | null,
    loginErrorMessage: "" as Array<string> | null | string,
    loading: false as boolean,
};


const reducer = (state = initialState, action: any): InitialStateType => {
    const newState = {...state};
    switch (action.type) {
        case "LOGIN":
            console.log(action.data);
            if (action.data.resultCode || !action.data) {
                newState.loading = false;
                newState.isAuth = false;
                newState.loginErrorMessage = action.data.messages[0];
            } else {
                newState.user = action.data.data.userId;
                newState.isAuth = true;
            }
            console.log(newState);
            break;

        case "LOADING":
            newState.loading = action.data;
            break;
    }

    return newState;
};


export default reducer;


export const loginThunk = (email: string, password: string) => (dispatch: any) => {
    console.log(email);
    dispatch({type: "LOADING", data: true});
    serverAPI.login(email, password)
        .then(login_user => {
                dispatch({type: "LOGIN", data: login_user});
            dispatch({type: "LOADING", data: false});

            }
        );
}

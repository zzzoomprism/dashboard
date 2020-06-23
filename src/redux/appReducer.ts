import {serverAPI} from "../api/api";

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
            if (action.data.resultCode || !action.data) {
                newState.loading = false;
                newState.isAuth = false;
                newState.loginErrorMessage = [...action.data.messages];
            } else {
                newState.user = action.data.data.userId;
                newState.isAuth = true;
            }
            break;

        case "LOADING":
            newState.loading = action.data;
            break;
    }

    return newState;
};


export default reducer;


export const loginThunk = (email: string, password: string) => (dispatch: any) => {
    dispatch({type: "LOADING", data: true});
    serverAPI.login(email, password)
        .then(login_user => {
                dispatch({type: "LOGIN", data: login_user});
            dispatch({type: "LOADING", data: false});

            }
        );
}

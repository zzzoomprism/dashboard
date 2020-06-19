import {userAPI} from "../api/api";

export type InitialStateType = typeof initialState;

const initialState = {
    isAuth: false as boolean,
    user: null as Array<Object> | null,
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
                newState.loginErrorMessage = action.data.messages[0];
            } else {
                newState.user = action.data;
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
    userAPI.login(email, password)
        .then(login_user => {
                dispatch({type: "LOGIN", data: login_user});
                if (!login_user.resultCode) {
                    userAPI.me()
                        .then(user_data => {
                            console.log(user_data);
                            dispatch({type: "SET_USER_DATA", user_data});
                            dispatch({type: "LOADING", data: false});
                        })

                }
            }
        );
}

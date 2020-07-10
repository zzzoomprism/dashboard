import {ResultCodeEnum, serverAPI} from "../api/api";
import {ErrorType} from "../types/errors";
import {ThunkAction} from "redux-thunk";
import {InferActionTypes, RootStateType} from "./rootReducer";
import {defaultTheme, greenTheme} from "../utils/theme";

const initialState = {
    isAuth: false as boolean,
    user: null as number | null,
    loginErrorMessage: "" as Array<string> | null | string,
    loading: false as boolean,
    theme: defaultTheme,
    themeName: 'default'
};

export type InitialStateType = typeof initialState;


const reducer = (state = initialState, action: ActionType): InitialStateType => {
    const newState = {...state};
    switch (action.type) {
        case "LOGIN":
            if (action.data.resultCode === ResultCodeEnum.Error || !action.data) {
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
        case "SET_THEME":
            newState.themeName = action.themeName;
            newState.theme = Object.assign({}, action.theme);
            break;
    }
    return newState;
};


export default reducer;

export const actions = {
    setLogin: (data: ErrorType) => ({type: "LOGIN", data} as const),
    setLoading: (loading: boolean) => ({type: "LOADING", data: loading} as const),
    setTheme: (theme: any, themeName: string) => ({type: "SET_THEME", theme, themeName} as const)
}

type ActionType = InferActionTypes<typeof actions>
type ThunkType = ThunkAction<void, RootStateType, any, ActionType>;
export const loginThunk = (email: string, password: string): ThunkType => (dispatch) => {
    dispatch(actions.setLoading(true));
    serverAPI.login(email, password)
        .then(login_user => {
                dispatch(actions.setLogin(login_user));
                dispatch(actions.setLoading(false));
            }
        );
}

export const settingAppTheme = (themeName: string): ThunkType => (dispatch) => {
    switch (themeName) {
        case 'default':
            dispatch(actions.setTheme(defaultTheme, themeName));
            break;
        case 'green':
            dispatch(actions.setTheme(greenTheme, themeName));
            break;
    }
}

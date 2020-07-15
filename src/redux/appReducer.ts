import {ResultCodeEnum, serverAPI} from "../api/api";
import {ErrorType} from "../types/errors";
import {ThunkAction} from "redux-thunk";
import {InferActionTypes, RootStateType} from "./rootReducer";
import {defaultTheme, defaultThemeOption, themeBackgroundColor, themePrimaryColor} from "../utils/theme";
import {createMuiTheme} from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";

const initialState = {
    isAuth: false as boolean,
    user: null as number | null,
    loginErrorMessage: "" as Array<string> | null | string,
    loading: false as boolean,
    theme: {
        ...defaultTheme
    },
    themeOptions: {
        ...defaultThemeOption,
    },
    themeName: 'default',
    backgroundName: 'default',
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
        case "SET_THEME_COLOR":
            newState.themeName = action.themeName;
            newState.themeOptions = {...action.theme};
            const themeColorOption = createMuiTheme(action.theme);
            newState.theme = {...themeColorOption};
            break;

        case "SET_THEME_BACKGROUND":
            newState.backgroundName = action.backgroundName;
            newState.themeOptions = {...action.theme};
            const themeBackgroundOption = createMuiTheme(action.theme);
            newState.theme = {...themeBackgroundOption};
            break;
    }
    return newState;
};


export default reducer;

export const actions = {
    setLogin: (data: ErrorType) => ({type: "LOGIN", data} as const),
    setLoading: (loading: boolean) => ({type: "LOADING", data: loading} as const),
    setThemeColor: (theme: any, themeName: string) => ({type: "SET_THEME_COLOR", theme, themeName} as const),
    setThemeBackground: (theme: any, backgroundName: string) => ({
        type: "SET_THEME_BACKGROUND",
        theme,
        backgroundName
    } as const)
};

type ActionType = InferActionTypes<typeof actions>
type ThunkType = ThunkAction<void, RootStateType, any, ActionType>;
export const loginThunk = (email: string, password: string): ThunkType => (dispatch) => {
    dispatch(actions.setLoading(true));
   serverAPI.login(email, password)
        .then((login_user) => {
                dispatch(actions.setLogin(login_user));
                dispatch(actions.setLoading(false));
            }
        );
};

export const settingAppThemeColor = (themeName: string): ThunkType => (dispatch, getState) => {
    let option = Object.assign({}, getState().app.themeOptions);
    switch (themeName) {
        case 'default':
            option.palette = Object.assign(option.palette, themePrimaryColor.default);
            dispatch(actions.setThemeColor(option, themeName));
            break;
        case 'green':
            option.palette = Object.assign(option.palette, themePrimaryColor.green);
            dispatch(actions.setThemeColor(option, themeName));
            break;
    }
};

export const settingAppThemeBackground = (backgroundName: string): ThunkType => (dispatch, getState) => {
    let option = Object.assign({}, getState().app.themeOptions);
    switch (backgroundName) {
        case 'default':
            option.palette = Object.assign(option.palette, {background: themeBackgroundColor.default});
            dispatch(actions.setThemeBackground(option, backgroundName));
            break;
        case 'blueGrey':
            option.palette = Object.assign(option.palette, {background: themeBackgroundColor.blueGrey});
            dispatch(actions.setThemeBackground(option, backgroundName));
            break;
    }
};

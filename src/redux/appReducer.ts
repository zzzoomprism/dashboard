import {ResultCodeEnum, serverAPI} from "../api/api";
import {ErrorType} from "../types/errors";
import {ThunkAction} from "redux-thunk";
import {InferActionTypes, RootStateType} from "./rootReducer";

const initialState = {
    isAuth: false as boolean,
    user: null as number | null,
    loginErrorMessage: "" as Array<string> | null | string,
    loading: false as boolean,
    followingCount: 0,
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
        case "SET_FOLLOW_COUNT":
            newState.followingCount = action.count;
            break;
    }
    return newState;
};


export default reducer;

export const actions = {
    setLogin: (data:ErrorType)=>({type: "LOGIN", data} as const),
    setLoading: (loading: boolean) => ({type: "LOADING", data: loading} as const),
    followCount: (count: number) =>({type: "SET_FOLLOW_COUNT", count} as const),
};

type ActionType = InferActionTypes<typeof actions>
export const loginThunk = (email: string, password: string):ThunkAction<void, RootStateType, any, ActionType> => (dispatch: any) => {
    dispatch(actions.setLoading(true));
    Promise.all([serverAPI.login(email, password),
                        serverAPI.followingCount()])
        .then(([login_user, countInfo]) => {
                dispatch(actions.setLogin(login_user));
                dispatch(actions.followCount(countInfo.totalCount));
                dispatch(actions.setLoading(false));
            }
        );
};



import {Contacts, PhotoType, SamuraiType} from "../../types/socials";
import {ResultCodeEnum, serverAPI} from "../../api/api";
import {InferActionTypes, RootStateType} from "../rootReducer";
import {ThunkAction} from "redux-thunk";
import {ErrorType} from "../../types/errors";
import {stopSubmit} from "redux-form";
import {Omit} from "@material-ui/core";

const initialState = {
    loading: false as boolean,
    user: null as SamuraiType | null,
    currentUser: null as SamuraiType | null,
    isCurrentUserFollowed: false,
    isFetching: false,
    isSuccess: false,
    error: null as ErrorType | null,
    dataForm: null as Omit<SamuraiType, 'photos'> | null
};

export type InitialStateType = typeof initialState;
const reducer = (state = initialState, action: ActionType): InitialStateType => {
    const newState = {...state};
    switch (action.type) {
        case "SET_FETCHING":
            newState.isFetching = action.isFetching;
            break;
        case "SET_USER":
            if (action.user) {
                newState.user = Object.assign({}, action.user);
            }
            break;
        case "SET_ERROR_MESSAGE":
            if(action.error)
                newState.error = {...action.error};
            else
                newState.error = null;
            break;
        case "SET_FORM_DATA":
            if (state.user) {
                console.log(state.user);
                let formdata = {...state.user};
                formdata.contacts = {...state.user.contacts};
                delete formdata.photos;
                newState.dataForm = {...formdata};
                newState.dataForm.contacts = {...formdata.contacts};
                Object.assign(newState.dataForm, action.dataForm);
            }
            else
                newState.dataForm = null;
            break;
        case "SET_PROFILE_PHOTO":
            if (state.user) {
                newState.user = {...state.user};
                newState.user.photos = {...action.image};
            }
            break;
        case "SET_CURRENT_USER":
            newState.currentUser = {...action.user};
            newState.currentUser.contacts = {...action.user.contacts};
            newState.currentUser.photos = {...action.user.photos};
            break;
    }
    return newState;
};
export default reducer;

export const actions = {
    setFetching: (isFetching: boolean) => ({type: "SET_FETCHING", isFetching} as const),
    setUser: (user: SamuraiType | null) => ({type: "SET_USER", user} as const),
    setErrorData: (error: ErrorType | null) => ({type: "SET_ERROR_MESSAGE", error: error} as const),
    setFormData: (dataForm: Omit<SamuraiType, 'photos'>) => ({type: "SET_FORM_DATA", dataForm} as const),
    setPhotos: (image: PhotoType) => ({type: "SET_PROFILE_PHOTO", image} as const),
    setCurrentUser: (user: SamuraiType) => ({type: "SET_CURRENT_USER", user} as const),
};

type ActionType = InferActionTypes<typeof actions>
// export type ThunkAction<R, S, E, A extends Action> = (
//     dispatch: ThunkDispatch<S, E, A>,
//     getState: () => S,
//     extraArgument: E
// ) => R;

export const getUserByIdThunk = (userId: number): ThunkAction<void, RootStateType, any, ActionType> => (dispatch, getState) => {
    dispatch(actions.setUser(null));
    serverAPI.getUserById(userId)
        .then((user: SamuraiType) => {
            dispatch(actions.setUser(user));
            if(user.userId === getState().app.user)
                dispatch(actions.setCurrentUser(user));
        })
};
export const updatePhoto = (image: any): ThunkAction<Promise<void>, RootStateType, any, ActionType> => (dispatch) => {
    let formData = new FormData();
    formData.append("image", image);
    dispatch(actions.setFetching(true));
    return serverAPI.updatePhoto(formData)
        .then((res)=> {
            if(res.resultCode === ResultCodeEnum.Success) {
                dispatch(actions.setPhotos(res.data.photos));
                dispatch(actions.setErrorData(res));
                dispatch(actions.setFetching(false));
            }
            else
                dispatch(actions.setErrorData(res));
                setTimeout(()=>dispatch(actions.setErrorData(null)), 6000);
        });
};
export const updateProfile = (data: any, formName: string): ThunkAction<void, RootStateType, any, ActionType> => async (dispatch, getState: any) => {
    dispatch(actions.setFetching(true));
    dispatch(actions.setFormData(data));
    let response = await serverAPI.updateProfile(getState().profile.dataForm);
    if (response.resultCode === 0) {
        dispatch(getUserByIdThunk(getState().app.user));
        dispatch(actions.setErrorData(response));
        dispatch(actions.setFetching(false));
        setTimeout(()=>dispatch(actions.setErrorData(null)), 6000);
    } else {
        let objKeys = {...getState().profile.dataForm}
        delete objKeys.contacts;
        let arrayKey = Object.keys(objKeys);
        let key = arrayKey.filter((el) => {
            for (let i = 0; i < response.messages.length; i++) {
                if (response.messages[i].toLowerCase().includes(el))
                    return el;
            }
        });
        let contactsKeys = ["facebook", "twitter", "vk", "github", "mainLink", "instagram", "website", "youtube"];
        let key2 = contactsKeys.filter((el) => {
            for (let i = 0; i < response.messages.length; i++) {
                if (response.messages[i].toLowerCase().includes(el))
                    return el;
            }
        });
        let errorStack = {};
        for (let i = 0; i < key.length; i++) {
            errorStack = Object.assign(errorStack, {[key[i]]: response.messages[i]});
        }
        let contactsError = {contacts: {}};
        for (let i = 0; i < key2.length; i++) {
            contactsError.contacts = {...contactsError.contacts, [key2[i]]: response.messages[i]};
        }
        errorStack = Object.assign(errorStack, contactsError);
        console.log(key2);
        console.log(errorStack);
        //@ts-ignore
        dispatch(stopSubmit(formName, errorStack))
        dispatch(actions.setErrorData(response));
        dispatch(actions.setFetching(false));
        setTimeout(()=>dispatch(actions.setErrorData(null)), 6000);
        return Promise.reject(response);
    }

};


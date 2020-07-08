import {Contacts, PhotoType, SamuraiType} from "../../types/socials";
import {ResultCodeEnum, serverAPI} from "../../api/api";
import {InferActionTypes, RootStateType} from "../rootReducer";
import {ThunkAction} from "redux-thunk";
import {ErrorType} from "../../types/errors";
import {stopSubmit} from "redux-form";

const initialState = {
    loading: false as boolean,
    user: null as SamuraiType | null,
    isCurrentUserFollowed: false,
    isFetching: false,
    isSuccess: false,
    error: null as ErrorType | null,
    dataForm: {
        userId: 0,
        aboutMe: "",
        lookingForAJob: false,
        lookingForAJobDescription: " ",
        fullName: "",
        contacts: {} as Contacts,
    }
};

type InitialStateType = typeof initialState;
const reducer = (state = initialState, action: ActionType): InitialStateType => {
    const newState = {...state};
    switch (action.type) {
        case "SET_FETCHING":
            newState.isFetching = action.isFetching;
            break;
        case "GET_USER":
            if (action.user)
                newState.user = {...action.user};
            break;
        case "SET_FORM_DATA":
            if (state.user) {
                let formdata = {...state.user};
                formdata.contacts = {...state.user.contacts};
                delete formdata.photos;
                newState.dataForm = {...formdata};
                newState.dataForm.contacts = {...formdata.contacts};
                Object.assign(newState.dataForm, action.dataForm);
            }
            break;
        case "SET_ERROR_MESSAGE":
            if(action.error)
                newState.error = {...action.error};
            else
                newState.error = null;
            console.log(newState.error);
            break;
        case "SET_PROFILE_PHOTO":
            if (state.user) {
                newState.user = {...state.user};
                newState.user.photos = {...action.image};
            }
            break;
    }
    return newState;
};
export default reducer;

const actions = {
    getUser: (user: SamuraiType | null) => ({type: "GET_USER", user} as const),
    setErrorData: (error: ErrorType | null) => ({type: "SET_ERROR_MESSAGE", error: error} as const),
    setFetching: (isFetching: boolean) => ({type: "SET_FETCHING", isFetching} as const),
    setFormData: (dataForm: Omit<SamuraiType, 'photos'>) => ({type: "SET_FORM_DATA", dataForm} as const),
    setPhotos: (image: PhotoType) => ({type: "SET_PROFILE_PHOTO", image} as const),
};

type ActionType = InferActionTypes<typeof actions>
// export type ThunkAction<R, S, E, A extends Action> = (
//     dispatch: ThunkDispatch<S, E, A>,
//     getState: () => S,
//     extraArgument: E
// ) => R;

export const getUserByIdThunk = (userId: number): ThunkAction<void, RootStateType, any, ActionType> => (dispatch) => {
    dispatch(actions.getUser(null));
    serverAPI.getUserById(userId)
        .then((user: SamuraiType | null) => {
            dispatch(actions.getUser(user));
            console.log(user);
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


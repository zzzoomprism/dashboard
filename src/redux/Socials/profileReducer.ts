import {Contacts, PhotoType, SamuraiType} from "../../types/socials";
import {ResultCodeEnum, serverAPI} from "../../api/api";
import {InferActionTypes} from "../rootReducer";
import {Dispatch} from "redux";

const initialState = {
    loading: false as boolean,
    user: null as SamuraiType | null,
    isCurrentUserFollowed: false,
    isFetching: false,
    dataForm: {
        userId: 0,
        aboutMe: "_NO_DATA_",
        lookingForAJob: false,
        lookingForAJobDescription: " ",
        fullName: "test_react_app",
        contacts: {},
    }
};

type InitialStateType = typeof initialState;
const reducer = (state = initialState, action: ActionType) :InitialStateType => {
    const newState = {...state};
    switch (action.type) {
        case "CURRENT_USER_FOLLOW_INFO":
            newState.isCurrentUserFollowed = action.isCurrentUserFollowed
            break;
        case "SET_FETCHING":
            newState.isFetching = action.isFetching;
            break;
        case "GET_USER":
            if(action.user)
            newState.user = {...action.user};
            break;
        case "SET_FORM_DATA":
            if(state.user) {
                let formdata = {...state.user};
                formdata.contacts = {...state.user.contacts};
                delete formdata.photos;
                newState.dataForm = {...formdata};
                newState.dataForm.contacts = {...formdata.contacts};
                Object.assign(newState.dataForm, action.dataForm);
            }
            break;
    }
    return newState;
};
export default reducer;

const actions = {
    getUser: (user: SamuraiType | null) => ({type: "GET_USER", user} as const),
    setCurrentUserFollowData: (isCurrentUserFollowed: boolean) => ({type: "CURRENT_USER_FOLLOW_INFO", isCurrentUserFollowed} as const),
    setFetching: (isFetching: boolean) => ({type: "SET_FETCHING", isFetching} as const),
    setFormData: (dataForm: Omit<SamuraiType, 'photos'>) => ({type: "SET_FORM_DATA", dataForm} as const)
}

type ActionType = InferActionTypes<typeof actions>

export const getUserByIdThunk = (userId: number) => (dispatch: Dispatch<ActionType>) => {
    dispatch(actions.getUser(null));
    serverAPI.getUserById(userId)
        .then((user: SamuraiType | null) => {
            dispatch(actions.getUser(user));
        })
}

export const updateProfile = (data: any) => (dispatch: Dispatch<ActionType>, getState: any) => {
    console.log(data);
    dispatch(actions.setFormData(data));
        serverAPI.updateProfile(getState().profile.dataForm)
            .then(res => {
                getUserByIdThunk(getState().app.user);
            })
            .catch(error => console.log(error))
}


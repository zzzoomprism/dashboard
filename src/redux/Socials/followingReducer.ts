import {PeopleType} from "../../types/socials";
import {InferActionTypes, RootStateType} from "../rootReducer";
import {ThunkAction} from "redux-thunk";
import {ResultCodeEnum, serverAPI} from "../../api/api";

const initialState = {
    totalFollowingCount: 0,
    followingUsers: null as Array<PeopleType> | null,
    isFetching: false,
}

type InitialStateType = typeof initialState;

const reducer = (state = initialState, action: ActionType): InitialStateType => {
    const newState = {...state};
    switch (action.type) {
        case "FOLLOW/SET_FOLLOWING_USERS":
            newState.followingUsers = [...action.users];
            break;
        case "FOLLOW/SET_FETCHING_DATA":
            newState.isFetching = action.fetching;
            break;
        case "FOLLOW/UNFOLLOW_USER":
            if(state.followingUsers)
            newState.followingUsers = state.followingUsers.filter( el => {
                if (el.id !== action.id) return el
            });
    }
    return newState;
}

type ActionType = InferActionTypes<typeof actions>

const actions = {
    setFollowingUsers: (users: Array<PeopleType>) => ({type: "FOLLOW/SET_FOLLOWING_USERS", users} as const),
    setFetching: (fetching: boolean) => ({type: "FOLLOW/SET_FETCHING_DATA", fetching} as const),
    unfollowUser: (id: number) => ({type: "FOLLOW/UNFOLLOW_USER", id} as const),
};

type ThunkType = ThunkAction<void, RootStateType, any, ActionType>;

export const setFollowingUsersThunk = (page: number):ThunkType  =>  async (dispatch) => {
    dispatch(actions.setFetching(true));
    let response = await serverAPI.followingCount(10, page);
    dispatch(actions.setFollowingUsers(response.items));
    dispatch(actions.setFetching(false));
}

export const unFollowFriend = (id: number, page: number): ThunkType => async (dispatch) => {
    dispatch(actions.setFetching(true));
    let response = await serverAPI.unfollow(id);
    if(response.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.unfollowUser(id));
        dispatch(actions.setFetching(false));
        dispatch(setFollowingUsersThunk(page))
    }
}

export default reducer;
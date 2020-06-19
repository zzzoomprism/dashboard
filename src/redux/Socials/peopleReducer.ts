import {PeopleType} from "../../types/socials";
import {userAPI} from "../../api/api";
import {Dispatch} from "redux";
import {ThunkAction} from "redux-thunk";
import {InferActionTypes, RootStateType} from "../rootReducer";


const initialState = {
    people: [] as Array<PeopleType>,
    loading: false as boolean,
};



type InitialStateType = typeof initialState;
const reducer = (state = initialState, action: ActionType): InitialStateType => {
    const newState = {...state};


    switch (action.type) {
        case "SET_PEOPLE_TO_STATE":
            newState.people = action.people;
            break;
        case "FOLLOW_ACTION":
            newState.people = state.people.map(el => {
                if (el.id === action.id)
                    return {...el, followed: true}
                return el;
            })
            break;
        case "UNFOLLOW_ACTION":
            newState.people = state.people.map(el => {
                if (el.id === action.id)
                    return {...el, followed: false}
                return el;
            })
            break;
        case "SET_PEOPLE_LOADING":
            newState.loading = action.data;
            break;
    }

    return newState;

};

export default reducer;

type SetPeopleActionType = {
    type: "SET_PEOPLE_TO_STATE",
    people: Array<PeopleType>
};
type FollowType = {
    type: "FOLLOW_ACTION",
    id: number
};
type UnFollowType = {
    type: "UNFOLLOW_ACTION",
    id: number
};
type SetPeopleLoadingType = {
    type: "SET_PEOPLE_LOADING",
    data: boolean
};

export const action = {
    setPeopleToState: (people: Array<PeopleType>): SetPeopleActionType => ({type: "SET_PEOPLE_TO_STATE", people}),
    followAction: (id: number):FollowType => ({type: "FOLLOW_ACTION", id: id}),
    unfollowAction: (id: number): UnFollowType => ({type: "UNFOLLOW_ACTION", id: id}),
    setPeopleLoading: (data: boolean):SetPeopleLoadingType => ({type: "SET_PEOPLE_LOADING", data: data }),
}

type ActionType = InferActionTypes<typeof action>;


export const setPeopleThunk = () :ThunkAction<void, RootStateType, any, ActionType>=> async (dispatch) => {
    dispatch(action.setPeopleLoading(true));
    let people = await userAPI.users();
    console.log(people);
    dispatch(action.setPeopleToState(people));
    dispatch(action.setPeopleLoading(false));
}


export const followingThunk = (userId : number):ThunkAction<void, RootStateType, any, ActionType> => (dispatch: Dispatch<ActionType>) => {
   userAPI.follow(userId)
       .then(response => {
           console.log(response);
           dispatch(action.followAction(userId))
       })
}


export const unfollowingThunk = (userId : number):ThunkAction<void, RootStateType, any, ActionType> => (dispatch: Dispatch<ActionType>) => {
    userAPI.unfollow(userId)
        .then(response => {
            console.log(response);
            dispatch(action.unfollowAction(userId))
        })
}
import {PeopleType} from "../../types/socials";

const SET_PEOPLE = "SET_PEOPLE";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";


const initialState = {
    people: [] as Array<PeopleType>,
    loading: false as boolean,
};
type InitialStateType = typeof initialState;
const reducer = (state = initialState, action: any): InitialStateType => {
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

type SetPeopleType = {
    type: typeof SET_PEOPLE
}

export const setPeople = (): SetPeopleType => ({type: "SET_PEOPLE"});

type FollowingType = {
    type: typeof FOLLOW,
    id: number,
}

export const following = (userId: number): FollowingType => ({type: "FOLLOW", id: userId});

type UnFollowingType = {
    type: typeof UNFOLLOW,
    id: number,
}

export const unfollowing = (userId: number): UnFollowingType => ({type: "UNFOLLOW", id: userId});
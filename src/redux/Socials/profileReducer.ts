import {PeopleType} from "../../types/socials";

const GET_USER_PROFILE = "GET_USER_PROFILE";


const initialState = {
    user_data: null as PeopleType | null,
    loading: false as boolean,
    user: null as Object | null,
};

type InitialStateType = typeof initialState;
const reducer = (state = initialState, action: any) :InitialStateType => {
    const newState = {...state};
    switch (action.type) {
        case "SET_USER_DATA":
            newState.user_data = action.user_data;
            break;
        case "GET_USER":
            newState.user = action.user;
            break;


    }
    return newState;


};

export default reducer;

type GetUserByIdType = {
    type: typeof GET_USER_PROFILE,
    id: number | string
}

export const getUserByUserId = (userId: number):GetUserByIdType => ({type: "GET_USER_PROFILE", id: userId});
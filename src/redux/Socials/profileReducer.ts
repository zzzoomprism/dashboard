import {PeopleType, SamuraiType} from "../../types/socials";
import {userAPI} from "../../api/user-api";
import {serverAPI} from "../../api/api";

const initialState = {
    user_data: null as PeopleType | null,
    loading: false as boolean,
    user: null as SamuraiType | null,
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


export const getUserByIdThunk = (userId: number) => (dispatch:any) => {
    dispatch({type: "GET_USER", user: null});
    serverAPI.getUserById(userId)
        .then(user => {
            dispatch({type: "GET_USER", user});
        })
}
import {currencyAPI, userAPI} from "../../api/api";
import {NewsType, UserType} from "../../types/socials";
import {InferActionTypes, RootStateType} from "../rootReducer";
import {ThunkAction} from "redux-thunk";
import {act} from "react-dom/test-utils";
import {action} from "../Socials/peopleReducer";
import {Dispatch} from "redux";


const initialState = {
    loaded: false,
    currentPage: 1,
    users: [] as Array<UserType>,
    news: [] as Array<NewsType>,
    calculate: {
        loading: false,
        from: null as string | null,
        to:  null as string | null,
        amount: 1,
        result: 0
    }

};

type InitialStateType = typeof initialState;

const reducer = (state = initialState, action: ActionType): InitialStateType =>{
    const newState = {...state};
    newState.calculate = {...state.calculate};
    switch(action.type){
        case "SET_LOADED_VALUE":
            newState.loaded = action.loaded;
            break;
        case "SET_CURRENT_PAGE":
            newState.currentPage = action.currentPage;
            break;
        case "SET_USERS" :
            newState.users = [...action.users];
            console.log(newState);
            break;
        case "SET_NEWS":
            newState.news = [...action.news];
            break;
        case "SET_CURRENCY_DATA":
            newState.calculate.from = action.from;
            newState.calculate.to = action.to;
            newState.calculate.amount = action.amount;
            break;
        case "SET_CURRENCY_RESULT":
            newState.calculate.result = action.result;
            break;
        case "SET_CALCULATE_LOADING":
            newState.calculate.loading = action.loading;
            break;
    }
    return newState;
};


export default reducer;


type SetUsersActionType = {
    type: "SET_USERS",
    users: Array<UserType>
}
type SetCurrentPageType = {
    type: "SET_CURRENT_PAGE",
    currentPage: number
}
type SetLoadedValueAction = {
    type: "SET_LOADED_VALUE",
    loaded: boolean
}
type SetNewsActionType = {
    type: "SET_NEWS"
    news: Array<NewsType>
}
type CurrencyType = {
    type: "SET_CURRENCY_DATA"
    from: string
    to: string
    amount: number
}
type CurrencyResultType = {
    type: "SET_CURRENCY_RESULT",
    result: number
}
type CalculateLoadingType = {
    type: "SET_CALCULATE_LOADING",
    loading: boolean
}

export const actions = {
    setUsersAction: (users: Array<UserType>):SetUsersActionType => ({type: "SET_USERS", users}),
    setCurrentPageAction: (currentPage: number): SetCurrentPageType => ({type: "SET_CURRENT_PAGE", currentPage}),
    setLoadedValueAction: (data: boolean):SetLoadedValueAction => ({type: "SET_LOADED_VALUE", loaded: data}),
    setNewsAction: (news: Array<NewsType>): SetNewsActionType => ({type: "SET_NEWS", news}),
    setCalculateData: (calculate_from: string, calculate_to: string, calculate_amount: number): CurrencyType => ({type: "SET_CURRENCY_DATA", from: calculate_from, to: calculate_to, amount: calculate_amount}),
    setCurrencyResult: (result: number):CurrencyResultType => ({type: "SET_CURRENCY_RESULT", result}),
    setCalculateLoading: (loading: boolean): CalculateLoadingType => ({type: "SET_CALCULATE_LOADING", loading})
}

type ActionType = InferActionTypes<typeof actions>
type ThunkType = ThunkAction<Promise<void>, RootStateType, any, ActionType>

export const setUsersThunk = (currentPage: number):ThunkType => async (dispatch) => {
    let users = await userAPI.getUsers(currentPage);
    dispatch(actions.setUsersAction(users));
}

export const setNewsThunk =() : ThunkAction<void, RootStateType, any, ActionType> => async (dispatch) => {
    let news = await userAPI.getNews();
    dispatch(actions.setNewsAction(news));
}

export const currencyExchange = (from: string, to: string, amount: number) : ThunkType => async (dispatch) => {
    dispatch(actions.setCalculateLoading(true));
    let amount_value = amount || 1;
    dispatch(actions.setCalculateData(from, to, amount_value));
    let response = await currencyAPI.getCurrencyExchange(from, to);
    let rate = response.rates[to];
    let result = (rate*amount_value).toFixed(3);
    dispatch(actions.setCurrencyResult(+result));
    setTimeout(()=>{dispatch(actions.setCalculateLoading(false));}, 1000);
}






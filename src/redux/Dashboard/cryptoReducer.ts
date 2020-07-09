import {currencyAPI} from "../../api/currency-api";
import {NewsType, UserType} from "../../types/socials";
import {InferActionTypes, RootStateType} from "../rootReducer";
import {ThunkAction} from "redux-thunk";
import {userAPI} from "../../api/user-api";
import {newsAPI} from "../../api/news-api";


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

export const actions = {
    setUsersAction: (users: Array<UserType>) => ({type: "SET_USERS", users} as const),
    setCurrentPageAction: (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const),
    setLoadedValueAction: (data: boolean) => ({type: "SET_LOADED_VALUE", loaded: data} as const),
    setNewsAction: (news: Array<NewsType>) => ({type: "SET_NEWS", news} as const),
    setCalculateData: (calculate_from: string, calculate_to: string, calculate_amount: number) => ({type: "SET_CURRENCY_DATA", from: calculate_from, to: calculate_to, amount: calculate_amount} as const),
    setCurrencyResult: (result: number) => ({type: "SET_CURRENCY_RESULT", result} as const),
    setCalculateLoading: (loading: boolean) => ({type: "SET_CALCULATE_LOADING", loading} as const)
}

type ActionType = InferActionTypes<typeof actions>
type ThunkType = ThunkAction<Promise<void>, RootStateType, any, ActionType>

export const setUsersThunk = (currentPage: number):ThunkType => async (dispatch) => {
    let users = await userAPI.getUsers(currentPage);
    dispatch(actions.setUsersAction(users.results));
}

export const setNewsThunk =() : ThunkAction<void, RootStateType, any, ActionType> => async (dispatch) => {
    let news = await newsAPI.getNews();
    dispatch(actions.setNewsAction(news.articles));
}

export const currencyExchange = (from: string, to: string, amount: number) : ThunkType => async (dispatch) => {
    dispatch(actions.setCalculateLoading(true));
    let amount_value = amount || 1;
    dispatch(actions.setCalculateData(from, to, amount_value));
    let response = await currencyAPI.getCurrencyExchange(from, to);
    let rate = Object.values(response.rates)[0];
        if(rate) {
            let result = (rate * amount_value).toFixed(3);
            dispatch(actions.setCurrencyResult(+result));
            setTimeout(() => {
                dispatch(actions.setCalculateLoading(false));
            }, 1000);
        }
}






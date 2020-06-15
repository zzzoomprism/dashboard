
export type InitialStateType = typeof initialState;

const initialState = {
    isAuth: false as boolean,
    user: null as Array<Object> | null,
    loginErrorMessage: "" as Array<string> | null | string,
    loading: false as boolean,
};


const reducer = (state = initialState, action: any): InitialStateType => {
    const newState = {...state};
    switch(action.type){
        case "LOGIN":
            if(action.data.resultCode || !action.data)
            {
                newState.loading = false;
                newState.isAuth = false;
                newState.loginErrorMessage = action.data.messages[0];
            }
            else{
                newState.user = action.data;
                newState.isAuth = true;
            }
            break;

        case "LOADING":
            newState.loading = action.data;
            break;

    }

    return newState;
};


export default reducer;


const LOGIN_USER = "LOGIN_USER";
export const login = (login_data: string, password_data: string): LoginType => ({ type: LOGIN_USER, password: password_data, login: login_data })


export type LoginType = {
    type: typeof LOGIN_USER
    login: string
    password: string
}
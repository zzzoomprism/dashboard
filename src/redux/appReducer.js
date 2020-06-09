const initialState = {
    isAuth: false,
    user: null,
    loginErrorMessage: "",
    loading: false,
};


const reducer = (state = initialState, action)=>{
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


export const login = (login_data, password_data) => ({type: "LOGIN_USER", login: login_data, password: password_data});


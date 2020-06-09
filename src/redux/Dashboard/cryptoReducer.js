const initialState = {
    loaded: false,
    currentPage: 1,
    users: null,
};


const reducer = (state = initialState, action)=>{
    const newState = {...state};
    switch(action.type){
        case "SET_LOADED_VALUE":
            newState.loaded = action.value;
            break;
        case "SET_CURRENT_PAGE":
            newState.currentPage = action.currentPage;
            break;
        case "SET_USERS" :
            newState.users = [...action.users];
            console.log(newState);
            break;
    }
    return newState;
};


export default reducer;


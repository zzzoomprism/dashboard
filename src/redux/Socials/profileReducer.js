const initialState = {
};


const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case "SET_USER_DATA":
            newState.user_data = action.user_data;
            console.log(newState);
            break;
    }
    return newState;
};


export default reducer;
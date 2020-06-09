const initialState = {
    people: null,
};


const reducer = (state = initialState, action) => {
    const newState = {...state};
    switch (action.type) {
        case "SET_PEOPLE_TO_STATE":
            newState.people = action.people;
            break;
    }
    return newState;
};


export default reducer;

export const setPeople = ()=> ({type: "SET_PEOPLE"});
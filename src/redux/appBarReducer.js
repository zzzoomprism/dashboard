const initialState = {
  sidebar_open: false
};

function reducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case "SIDEBAR_TOGGLE":
      newState.sidebar_open = !state.sidebar_open;
      console.log(newState.sidebar_open);
      break;
    case "SIDEBAR_CLOSE":
      newState.sidebar_open = false;
      break;
  }
  return newState;
}

export default reducer;

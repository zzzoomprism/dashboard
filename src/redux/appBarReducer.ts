import {InferActionTypes} from "./rootReducer";

const initialState = {
  sidebar_open: false
};
type InitialStateType = typeof initialState;

type ActionType = InferActionTypes<typeof actions>

const reducer = (state = initialState, action: ActionType): InitialStateType => {
  const newState = { ...state };
  switch (action.type) {
    case "SIDEBAR_TOGGLE":
      newState.sidebar_open = !state.sidebar_open;
      break;
    case "SIDEBAR_CLOSE":
      newState.sidebar_open = false;
      break;
  }
  return newState;
}

export default reducer;

const actions = {
  setSideBarToggle: ()=> ({type: "SIDEBAR_TOGGLE"} as const),
  setSideBarClose: () => ({type: "SIDEBAR_CLOSE"} as const)
};
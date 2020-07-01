import { types } from "../actions";

export const initialState = {
  testPassed: false,
  menuOpen: false,
  allDatasets: ["Number of cases", "Number of Deaths", "Number of Recovered"],
  state: "",
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_STATE:
      return Object.assign({}, state, { state: action.payload });
    case types.TOGGLE_MENU:
      return Object.assign({}, state, { menuOpen: action.payload });

    case types.TEST:
      return Object.assign({}, state, { testPassed: action.payload });

    default:
      return state;
  }
}

import { types } from "../actions";
import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";

export const initialState = {
  testPassed: false,
  menuOpen: false,
  allDatasets: ["Number of cases", "Number of Deaths", "Number of Recovered"],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.TOGGLE_MENU:
      return Object.assign({}, state, { menuOpen: action.payload });

    case types.TEST:
      return Object.assign({}, state, { testPassed: action.payload });

    default:
      return state;
  }
}

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
});

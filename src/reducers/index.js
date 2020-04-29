// import { combineReducer } from "react-redux";
// import successReducer from "./successReducer";

// export default combineReducer({
//   successReducer,
// });

import { TEST } from "../actions";

export const initialState = {
  testPassed: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case TEST:
      return Object.assign({}, state, { testPassed: true });

    default:
      return state;
  }
}

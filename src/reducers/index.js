import { types } from "../actions";

export const initialState = {
  testPassed: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case types.TEST:
      return Object.assign({}, state, { testPassed: action.payload });

    default:
      return state;
  }
}

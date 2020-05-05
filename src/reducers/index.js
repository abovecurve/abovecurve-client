import { types } from "../actions";

export const initialState = {
  testPassed: false,
  menuOpen: false,
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

import { TEST } from "../actions";

let initialState = {
  testPassed: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST:
      return Object.assign({}, state, { testPassed: true });

    default:
      return state;
  }
};

export default reducer;

//acion types
export const types = {
  TEST: "TEST",
  TOGGLE_MENU: "TOGGLE_MENU",
  SET_STATE: "SET_STATE",
};

export const actionsSetState = (state) => (dispatch) => {
  return dispatch({
    type: types.SET_STATE,
    payload: state,
  });
};

export const actionsTest = () => (dispatch) => {
  return dispatch({
    type: types.TEST,
    payload: true,
  });
};

export const actionsToggleMenu = (bool) => (dispatch) => {
  return dispatch({
    type: types.TOGGLE_MENU,
    payload: bool,
  });
};

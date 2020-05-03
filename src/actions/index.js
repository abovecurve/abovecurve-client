//acion types
export const types = {
  TEST: "TEST",
};

export const actionsTest = () => (dispatch) => {
  return dispatch({
    type: types.TEST,
    payload: true,
  });
};

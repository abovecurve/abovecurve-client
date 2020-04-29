//acion types
export const TEST = "TEST";

export const actionsTest = () => (dispatch) => {
  return dispatch({
    type: TEST,
    payload: "Testing from actions",
  });
};

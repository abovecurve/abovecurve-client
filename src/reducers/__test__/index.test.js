import { types } from "../../actions";
import { reducer, initialState } from "../index";

describe("Reducer", () => {
  it("Should return default state", () => {
    const newState = reducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  it("should return new state if receiving type", () => {
    const newState = reducer(undefined, { type: types.TEST, payload: true });

    expect(newState).toEqual({ testPassed: true });
  });
});

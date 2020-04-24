import axios from "axios";
import { fetchData, API_URL } from "../index";

jest.mock("axios");

describe("Axios utility method", () => {
  it("suould successfully get data from an API", async () => {
    const data = {
      data: {
        message: "Hello from the Above Curve API!",
      },
    };

    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(fetchData("/ping")).resolves.toEqual(data);

    expect(axios.get).toHaveBeenCalledWith(`${API_URL}/ping`);
  });

  it("should return error from an API with bad call", async () => {
    const errorMessage = "Network Error";
    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    await expect(fetchData("/ding")).rejects.toThrow(errorMessage);
  });
});

import { login, logout, signUp } from "../service/api.service";

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await login(userData);
    dispatch({
      type: "LOGIN",
      payload: { data: response.data, token: response.token },
    });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const signInUser = (userData) => async (dispatch) => {
  try {
    const response = await signUp(userData);
    dispatch({
      type: "LOGIN",
      payload: response,
    });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const logoutAction = (userID) => async (dispatch) => {
  try {
    const response = await logout(userID);
    dispatch({
      type: "LOGIN",
      payload: response,
    });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

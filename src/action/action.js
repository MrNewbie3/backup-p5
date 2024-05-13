import { login } from "../service/login";

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await login(userData);
    dispatch({
      type: "LOGIN",
      payload: response,
    });
  } catch (error) {
    console.log(error);
  }
};

export const signInUser = (userData) => async (dispatch) => {
    try {
        const response = await 
        dispatch({
            type:"LOGIN",
            payload:response
        })
    } catch (error) {
        
    }
}

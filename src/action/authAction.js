// authActions.js
export const loginAction = (userData) => ({
  type: "LOGIN",
  payload: userData,
});

export const logoutAction = () => ({
  type: "LOGOUT",
});

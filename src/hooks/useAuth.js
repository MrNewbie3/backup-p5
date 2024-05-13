import { useDispatch, useSelector } from "react-redux";
import { loginAction, logoutAction } from "../action/authAction";

export const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const login = (userData) => {
    dispatch(loginAction(userData));
  };
  const logout = () => {
    dispatch(logoutAction());
  };

  return { isAuthenticated, user, login, logout };
};

import { combineReducers } from "redux";
import authReducer from "./authReducer"; // Assuming you have an authReducer for handling authentication

const rootReducer = combineReducers({
  auth: authReducer,
  // Add more reducers here as needed (e.g., profileReducer, cartReducer, etc.)
});

export default rootReducer;

import { createStore, applyMiddleware, StoreCreator } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

import { thunk } from "redux-thunk";
import rootReducer from "../reducer/reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // Persist only 'auth' state
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

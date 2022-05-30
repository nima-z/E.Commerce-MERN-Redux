import { configureStore, combineReducers } from "@reduxjs/toolkit";
import adminReducer from "./adminRedux";
import productReducer from "./productRedux";
import clientReducer from "./clientRedux";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "admin",
  version: 1,
  storage,
};
const rootReducer = combineReducers({
  admin: adminReducer,
  product: productReducer,
  client: clientReducer,
});
const persistedRoot = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRoot,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./CartRedux";
import userReducer from "./UserRedux";
import wishListReducer from "./WishListRedux";

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
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  wishList: wishListReducer,
});

const persistedRoot = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedRoot,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(Store);

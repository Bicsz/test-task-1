import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import userReducer from "./redusers/userReducer";

const reducers = combineReducers({
  userData: userReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: false,
  middleware: [thunk],
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

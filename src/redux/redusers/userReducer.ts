import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export interface UserDataState {
  isAuth: boolean;
  login: string | null;
  password: string | null;
  id: string | null;
  name: string | null;
}

const initialState: UserDataState = {
  isAuth: false,
  login: null,
  password: null,
  id: null,
  name: null,
};

type AuthParams = {
  login: string;
  password: string;
  id: string;
  name: string;
};

export const UserDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    exitAuth: () => initialState,
    saveAuth: (state, action: PayloadAction<AuthParams>) => {
      state.isAuth = true;
      state.login = action.payload.login;
      state.password = action.payload.password;
      state.id = action.payload.id;
      state.name = action.payload.name;
    },
    checkAuth: (state) => {},
  },
});

// Action creators are generated for each case reducer function
export const { exitAuth, saveAuth, checkAuth } = UserDataSlice.actions;

export default UserDataSlice.reducer;

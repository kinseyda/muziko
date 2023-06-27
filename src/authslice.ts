import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./data/schema/user";

// Define a type for the slice state
interface AuthState {
  user?: User;
}

// Define the initial state using that type
const initialState: AuthState = {
  user: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<User | undefined>) => {
      state.user = action.payload;
    },
  },
});

export const { setLogin } = authSlice.actions;

export default authSlice.reducer;

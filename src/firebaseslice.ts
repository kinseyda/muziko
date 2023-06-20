import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Firestore } from "firebase/firestore";
import { db, auth } from "./firebase";
import { Auth } from "firebase/auth";

// Define a type for the slice state
interface FirebaseState {
  db: Firestore;
  auth: Auth;
}

// Define the initial state using that type
const initialState: FirebaseState = {
  db: db,
  auth: auth,
};

export const firebaseSlice = createSlice({
  name: "firebase",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      //   state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = firebaseSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.db.db;

export default firebaseSlice.reducer;

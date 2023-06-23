import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AccessToken {
  token: string;
  validityPeriod: number;
  created: number;
}

// Define a type for the slice state
interface SpotifyState {
  accessToken?: AccessToken;
}

// Define the initial state using that type
const initialState: SpotifyState = {
  accessToken: undefined,
};

export const spotifySlice = createSlice({
  name: "spotify",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<AccessToken | undefined>) => {
      state.accessToken = action.payload;
    },
  },
});

export const { setAccessToken } = spotifySlice.actions;

export default spotifySlice.reducer;

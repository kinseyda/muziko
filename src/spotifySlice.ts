import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchToken.fulfilled, (state, action) => {
      state.accessToken = action.payload;
    });
  },
});

export const { setAccessToken } = spotifySlice.actions;

export default spotifySlice.reducer;

// Fetches a new spotify client token unless a valid one is already in the state.
export const fetchToken = createAsyncThunk(
  "spotify/fetchToken",
  async () => {
    const newToken = (
      await (
        await fetch("https://requesttoken-7ybywndcja-uc.a.run.app", {
          method: "GET",
        })
      ).json()
    ).token;
    const newTokenObj = {
      created: Math.floor(new Date().getTime() / 1000),
      token: newToken.access_token,
      validityPeriod: newToken.expires_in,
    };
    return newTokenObj;
  },
  {
    condition: (_, { getState }) => {
      const { accessToken } = getState() as SpotifyState;
      if (
        accessToken !== undefined &&
        accessToken.created + accessToken.validityPeriod >
          Math.floor(new Date().getTime() / 1000)
      ) {
        // Already token already exists and hasn't expired yet.
        console.log("Cancelling");
        return false;
      }
    },
  }
);

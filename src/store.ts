import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { authSlice } from "./authSlice";
import { settingsSlice } from "./settingsSlice";
import { spotifySlice } from "./spotifySlice";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    spotify: spotifySlice.reducer,
    settings: settingsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

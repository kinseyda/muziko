import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LanguageKey } from "./data/text/languages";

// Define a type for the slice state
interface SettingsState {
  language: LanguageKey;
  theme: "dark" | "light";
}

// Define the initial state using that type
const initialState: SettingsState = {
  language:
    localStorage.getItem("language") === "French"
      ? "French"
      : localStorage.getItem("language") === "English"
      ? "English"
      : "English",
  theme:
    localStorage.getItem("theme") === "dark"
      ? "dark"
      : localStorage.getItem("theme") === "light"
      ? "light"
      : "light",
};

export const settingsSlice = createSlice({
  name: "settings",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<LanguageKey>) => {
      state.language = action.payload;
    },
    setTheme: (state, action: PayloadAction<"dark" | "light">) => {
      state.theme = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(updateTheme.fulfilled, (state, action) => {
      state.theme = action.payload;
    });
    builder.addCase(updateLanguage.fulfilled, (state, action) => {
      state.language = action.payload;
    });
  },
});

export const { setLanguage, setTheme } = settingsSlice.actions;

export default settingsSlice.reducer;
export const updateTheme = createAsyncThunk(
  "settings/updateTheme",
  (theme: "dark" | "light") => {
    localStorage.setItem("theme", theme);
    document.querySelector("html")?.setAttribute("data-theme", theme);
    return theme;
  }
);
export const updateLanguage = createAsyncThunk(
  "settings/updateLanguage",
  (language: LanguageKey) => {
    localStorage.setItem("language", language);
    return language;
  }
);
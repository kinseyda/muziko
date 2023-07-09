import { User as fbUser } from "firebase/auth";
import { useDispatch } from "react-redux";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import { authSlice } from "./authSlice";
import { auth } from "./firebase";
import { ThemeKey, updateTheme } from "./settingsSlice";
import { AppDispatch } from "./store";
import { router } from "./routes";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  auth.onAuthStateChanged((user: fbUser | null) => {
    if (user === null) {
      dispatch(authSlice.actions.setLogin(undefined));
    } else {
      dispatch(authSlice.actions.setLogin({ email: user.email!! }));
    }
  });

  const storedTheme = localStorage.getItem("theme");
  if (
    storedTheme === "dark" ||
    storedTheme === "light" ||
    storedTheme === "oled"
  ) {
    dispatch(updateTheme(storedTheme as ThemeKey));
  } else {
    dispatch(updateTheme("light"));
  }

  return (
    <div className="App">
      <div id="page-container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

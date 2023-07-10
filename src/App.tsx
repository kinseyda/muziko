import { User as fbUser } from "firebase/auth";
import { useDispatch } from "react-redux";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { authSlice } from "./authSlice";
import { auth, db } from "./firebase";
import { ThemeKey, updateTheme } from "./settingsSlice";
import { AppDispatch } from "./store";
import { router } from "./routes";
import { doc, getDoc } from "firebase/firestore";
import { F_User } from "./data/schema/firebase";

export default function App() {
  const dispatch = useDispatch<AppDispatch>();
  auth.onAuthStateChanged(async (user: fbUser | null) => {
    if (user === null) {
      dispatch(authSlice.actions.setLogin(undefined));
    } else {
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        dispatch(
          authSlice.actions.setLogin({
            email: user.email!!,
            displayName: (docSnap.data() as F_User).displayName,
          })
        );
      } else {
        console.log(
          `Just logged in as user ${user.uid} that does not exist in the DB.`
        );
      }
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

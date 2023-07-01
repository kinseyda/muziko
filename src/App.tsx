import { User as fbUser } from "firebase/auth";
import { useDispatch } from "react-redux";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import { authSlice } from "./authSlice";
import About from "./components/pages/about/about";
import Error from "./components/pages/error/error";
import Legal from "./components/pages/legal/legal";
import Login from "./components/pages/login/login";
import Recommendations from "./components/pages/recommend/recommend";
import Register from "./components/pages/register/register";
import Search from "./components/pages/search/search";
import TopicDetails from "./components/pages/topic-details/topic-details";
import Welcome from "./components/pages/welcome/welcome";
import { auth } from "./firebase";
import { updateTheme } from "./settingsSlice";
import { AppDispatch } from "./store";

const router = createHashRouter([
  { path: "*", element: <Error /> },
  { path: "/", element: <Welcome /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/search", element: <Search /> },
  { path: "/topic", element: <TopicDetails /> },
  { path: "/about", element: <About /> },
  { path: "/legal", element: <Legal /> },
  { path: "/recommend", element: <Recommendations /> },
]);

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
  if (storedTheme === "dark" || storedTheme === "light") {
    dispatch(updateTheme(storedTheme as "dark" | "light"));
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

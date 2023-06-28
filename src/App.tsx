import { User as fbUser } from "firebase/auth";
import { useDispatch } from "react-redux";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.css";
import { authSlice } from "./authSlice";
import Error from "./components/pages/error/error";
import Login from "./components/pages/login/login";
import Register from "./components/pages/register/register";
import Search from "./components/pages/search/search";
import Test1 from "./components/pages/test/test1";
import Test2 from "./components/pages/test/test2";
import TopicDetails from "./components/pages/topic/topic-details";
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
  { path: "/test1", element: <Test1 /> },
  { path: "/test2", element: <Test2 /> },
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

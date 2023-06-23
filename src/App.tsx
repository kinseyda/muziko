import { RouterProvider, createHashRouter } from "react-router-dom";
import Test1 from "./components/pages/test1";
import Test2 from "./components/pages/test2";
import Welcome from "./components/pages/welcome/welcome";
import Error from "./components/pages/error/error";
import Login from "./components/pages/login/login";
import Register from "./components/pages/register/register";
import Search from "./components/pages/search/search";
import Topic from "./components/pages/topic/topic";
import { store } from "./store";
import { authSlice } from "./authSlice";
import { User } from "firebase/auth";
import { auth } from "./firebase";
import "./App.css";
import { useDispatch } from "react-redux";

const router = createHashRouter([
  { path: "*", element: <Error /> },
  { path: "/", element: <Welcome /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/search", element: <Search /> },
  { path: "/topic", element: <Topic /> },
  { path: "/test1", element: <Test1 /> },
  { path: "/test2", element: <Test2 /> },
]);

export default function App() {
  const dispatch = useDispatch();
  auth.onAuthStateChanged((user: User | null) => {
    if (user === null) {
      dispatch(authSlice.actions.setLogin(undefined));
    } else {
      dispatch(authSlice.actions.setLogin({ email: user.email!! }));
    }
  });

  document
    .querySelector("html")
    ?.setAttribute("data-theme", localStorage.getItem("theme") || "light");
  return (
    <div className="App">
      <div id="page-container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

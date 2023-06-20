import { RouterProvider, createHashRouter } from "react-router-dom";
import Test1 from "./components/pages/test1";
import Test2 from "./components/pages/test2";
import Welcome from "./components/pages/welcome/welcome";
import Error from "./components/pages/error/error";
import Login from "./components/pages/login/login";
import Register from "./components/pages/register/register";
import Search from "./components/pages/search/search";
import Topic from "./components/pages/topic/topic";
import ThemeSwitch from "./components/themeSwitch";
import { useSelector } from "react-redux";
import { RootState, store } from "./store";
import { useReducer } from "react";
import { authSlice } from "./authslice";
import { User } from "firebase/auth";
import { auth } from "./firebase";

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
  auth.onAuthStateChanged((user: User | null) => {
    if (user === null) {
      store.dispatch(authSlice.actions.setLogin(undefined));
    } else {
      store.dispatch(authSlice.actions.setLogin({ email: user.email!! }));
    }
  });
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

import { RouterProvider, createHashRouter } from "react-router-dom";
import Test1 from "./pages/test1";
import Test2 from "./pages/test2";

const router = createHashRouter([
  { path: "/", element: <Test1 /> },
  { path: "/test1", element: <Test1 /> },
  { path: "/test2", element: <Test2 /> },
]);

export default function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

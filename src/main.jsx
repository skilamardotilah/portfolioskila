import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/pages/Homepage.jsx";
import NotFound from "./components/pages/NotFound.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Dashboard from "./components/Dashboard";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";
import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Toaster richColors />
    <RouterProvider router={router} />
  </>
);

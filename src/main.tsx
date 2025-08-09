import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Planets from "./pages/Planet";
import { useState } from "react";
const [isOpen, setIsOpen] = useState<boolean>(false);
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout isOpen={isOpen} setIsOpen={setIsOpen} />,
    children: [
      {
        path: "/:planetName",
        element: <Planets />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

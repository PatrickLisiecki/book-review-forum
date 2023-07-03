import "./assets/index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import ErrorPage from "./components/ErrorPage.jsx";
import Forum from "./pages/Forum/Forum";
import Homepage from "./pages/Homepage/Homepage";
import React from "react";
import ReactDOM from "react-dom/client";

// import App from "./App.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/forum",
        element: <Forum />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

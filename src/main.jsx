import "./assets/index.css";

import CreateForumForm, {
    action as createForumAction,
} from "./pages/CreateForum/CreateForumForm";
import Forums, { loader as forumsLoader } from "./pages/Forums/Forums";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AboutPage from "./pages/AboutPage/AboutPage";
import ErrorPage from "./components/ErrorPage.jsx";
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
        path: "/about",
        element: <AboutPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/forums",
        element: <Forums />,
        errorElement: <ErrorPage />,
        loader: forumsLoader,
    },
    {
        path: "/forums/new",
        element: <CreateForumForm />,
        errorElement: <ErrorPage />,
        action: createForumAction,
    },
    {
        path: "/forums/:forumId",
        element: <CreateForumForm />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

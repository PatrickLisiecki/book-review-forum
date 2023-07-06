import "./assets/index.css";

import CreateForum, {
    action as createForumAction,
} from "./pages/Forms/CreateForum";
import CreateThread, {
    action as createThreadAction,
} from "./pages/Forms/CreateThread";
import DestroyForum, {
    action as destroyForumAction,
} from "./pages/Forms/DestroyForum";
import EditForum, {
    action as editForumAction,
    loader as editForumLoader,
} from "./pages/Forms/EditForum";
import Forum, { loader as forumLoader } from "./pages/Forum/Forum";
import ForumsPage, {
    loader as forumsLoader,
} from "./pages/ForumsPage/ForumsPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
    faArrowRightToBracket,
    faBook,
    faBookmark,
    faChevronRight,
    faComments,
    faLink,
    faPenToSquare,
    faTrash,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";

import AboutPage from "./pages/AboutPage/AboutPage";
import Contact from "./pages/Homepage/Contact";
import ErrorPage from "./components/ErrorPage.jsx";
import Homepage from "./pages/Homepage/Homepage";
import React from "react";
import ReactDOM from "react-dom/client";
import { library } from "@fortawesome/fontawesome-svg-core";

// import App from "./App.jsx";

library.add(
    faBook,
    faBookmark,
    faComments,
    faLink,
    faXmark,
    faArrowRightToBracket,
    faChevronRight,
    faPenToSquare,
    faTrash
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/contact",
                element: <Contact />,
            },
        ],
    },
    {
        path: "/about",
        element: <AboutPage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/forums",
        element: <ForumsPage />,
        errorElement: <ErrorPage />,
        loader: forumsLoader,
    },
    {
        path: "/forums/new",
        element: <CreateForum />,
        errorElement: <ErrorPage />,
        action: createForumAction,
    },
    {
        path: "/forums/:forumId",
        element: <Forum />,
        errorElement: <ErrorPage />,
        loader: forumLoader,
    },
    {
        path: "/forums/:forumId/new",
        element: <CreateThread />,
        errorElement: <ErrorPage />,
        action: createThreadAction,
    },
    {
        path: "/forums/:forumId/edit",
        element: <EditForum />,
        errorElement: <ErrorPage />,
        loader: editForumLoader,
        action: editForumAction,
    },
    {
        path: "/forums/:forumId/destroy",
        element: <DestroyForum />,
        errorElement: <ErrorPage />,
        action: destroyForumAction,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

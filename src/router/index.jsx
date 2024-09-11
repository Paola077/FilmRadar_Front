import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Movies from "../pages/Movies";

export const router = createBrowserRouter ([
    {
        path: "/",
        element: <Movies/>,
    }
])
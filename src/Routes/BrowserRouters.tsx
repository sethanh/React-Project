import {
    createBrowserRouter,
} from "react-router-dom";

import Contact from "./Contact";
import { ErrorPage, Home } from "@Pages/index";
import { HomeLoader } from '@Pages/Home'

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        loader: async () => {
            return HomeLoader.data;
        },
        errorElement: <ErrorPage />,
    },
    {
        path: "contacts/:contactId",
        element: <Contact />,
    },
]);

export default routers;
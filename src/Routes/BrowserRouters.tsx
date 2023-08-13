import {
    createBrowserRouter,
} from "react-router-dom";

import Root from "@Routes/Root";
import Contact  from "./Contact";
import { ErrorPage } from "@Pages/index";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: "contacts/:contactId",
        element: <Contact />,
    },
]);

export default routers;
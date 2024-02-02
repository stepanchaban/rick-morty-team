import { App } from './App';
import {
    createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/signin",
        element: <div>signin</div>,
    },
    {
        path: "/signup",
        element: <div>signup</div>,
    },
    {
        path: "/favorites",
        element: <div>favorites</div>,
    },
    {
        path: "/history",
        element: <div>history</div>,
    },
]);

export default router;
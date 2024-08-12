import { createBrowserRouter } from "react-router-dom";
import App1 from "../pages/App1/index";
import App2 from "../pages/App2/index";
import App3 from "../pages/App3/index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App1 />,
        children: [
            {
                path: 'app3',
                element: <App3 />
            }
        ]
    },
    {
        path: "/app2/:id/:name",
        element: <App2 />
    }
])

export default router;
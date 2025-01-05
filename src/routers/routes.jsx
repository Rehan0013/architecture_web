import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import About from "../pages/About.jsx";
import Contact from "../pages/Contact.jsx";
import Gallery from "../pages/Gallery.jsx";
import Projects from "../pages/Projects.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/projects",
        element: <Projects />,
    },
    {
        path: "/gallery",
        element: <Gallery />,
    },
    {
        path: "/contact",
        element: <Contact />,
    },
]);

export default router;
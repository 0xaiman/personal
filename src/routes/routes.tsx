import { createBrowserRouter } from "react-router-dom"
import { About } from "../pages/About.tsx"
import { Contact } from "../pages/Contact.tsx"
import { Home } from "../pages/Home.tsx"
import { NotFound } from "../pages/NotFound.tsx"

export const routeList = [
    {
        path:"/",
        name:"Home",
        element: <Home/>,
        errorElement:<NotFound/>
    },
    {
        path:"/",
        name:"About",
        element: <About/>
    },
    {
        path:"/",
        name:"Contact",
        element: <Contact/>
    },
]

export const router = createBrowserRouter(routeList)
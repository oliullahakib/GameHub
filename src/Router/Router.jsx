import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AppDetails from "../components/AppDetails";
import AllApps from "../components/AllApps";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {
                index:true,
                Component:Home,
                loader:()=>fetch('/gameData.json'),
                hydrateFallbackElement:<p>Loading...</p>
            },
            {
                path:"/app-details/:id",
                Component:AppDetails
            },
            {
                path:'/all-apps',
                Component:AllApps,
                 loader:()=>fetch('/gameData.json')
            }
        ]
    }
])
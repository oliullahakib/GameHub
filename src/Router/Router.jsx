import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AppDetails from "../components/AppDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllApps from "../Pages/AllApps";
import MyProfile from "../Pages/MyProfile";
import UpdateMyProfile from "../Pages/UpdateMyProfile";

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
                Component:AppDetails,
                loader:()=>fetch('/gameData.json'),
                 hydrateFallbackElement:<p>Loading...</p>
            },
            {
                path:'/all-apps',
                Component:AllApps,
                 loader:()=>fetch('/gameData.json'),
                 hydrateFallbackElement:<p>Loading...</p>
            },
            {
                path:"/login",
                Component:Login
            },
            {
                path:'/register',
                Component:Register
            },
            {
                path:"/profile",
                Component:MyProfile
            },
            {
                path:"/profile/update-profile",
                Component:UpdateMyProfile
            }
        ]
    }
])
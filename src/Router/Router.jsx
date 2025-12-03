import { createBrowserRouter } from "react-router";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import AppDetails from "../components/AppDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AllApps from "../Pages/AllApps";
import MyProfile from "../Pages/MyProfile";
import UpdateMyProfile from "../Pages/UpdateMyProfile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Loading from "../Pages/Loading";
import ForgotPassword from "../Pages/ForgotPassword";
import Error404 from "../Pages/Error404";
import AppNotFound from "../Pages/AppNotFound";
import AboutUs from "../Pages/AboutUs";
import WishList from "../Pages/WishList";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {
                index:true,
                Component:Home,
                loader:()=>fetch('http://localhost:3000/games'),
                hydrateFallbackElement:<Loading/>
            },
            {
                path:"/app-details/:id",
                element:<AppDetails/>,
                loader:()=>fetch('http://localhost:3000/games'),
                hydrateFallbackElement:<Loading/>,
                errorElement:<AppNotFound/>
            },
            {
                path:'/all-apps',
                Component:AllApps,
                 loader:()=>fetch('http://localhost:3000/games'),
                 hydrateFallbackElement:<Loading/>
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
                path:"/about-us",
                Component:AboutUs
            },
            {
                path:"/wish-list",
                Component:WishList
            },
            {
                path:"/profile/update-profile",
                Component:UpdateMyProfile
            },
            {
                path:"/forgot-password",
                Component:ForgotPassword
            },
            {
                path:"/*",
                Component:Error404
            }
        ]
    }
])
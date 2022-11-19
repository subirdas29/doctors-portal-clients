import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import Allusers from "../../Pages/DashBoard/Allusers";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRouter from "../AdminRouter/AdminRouter";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[{
            path:'/',
            element:<Home></Home>
        },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/signup',
        element:<SignUp></SignUp>
    },
    {
        path:'/appointment',
        element:<PrivateRouter>
            <Appointment></Appointment>
        </PrivateRouter>
    },
    
    ]
    },
    {
        path:'/dashboard',
        element:<PrivateRouter>
           <DashboardLayout></DashboardLayout>
        </PrivateRouter>,
        children:[
            {
            path:'/dashboard',
            element:<DashBoard></DashBoard>
            },
            {
            path:'/dashboard/alluser',
            element:
                <AdminRouter> <Allusers></Allusers></AdminRouter>
            },
    ]
    },
])
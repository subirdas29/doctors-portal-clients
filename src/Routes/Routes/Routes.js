import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import Appointment from "../../Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../Pages/DashBoard/AddDoctor";
import Allusers from "../../Pages/DashBoard/Allusers";
import DashBoard from "../../Pages/DashBoard/DashBoard";
import ManageDoctors from "../../Pages/DashBoard/manageDoctors/ManageDoctors";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import AdminRouter from "../AdminRouter/AdminRouter";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
<<<<<<< HEAD
import About from "../../Pages/About/About";
=======
>>>>>>> 2abe198f66b5fb957757574e4f1f21993a829e2b

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
<<<<<<< HEAD
        path:'/about',
        element:<About></About>
    },
    {
=======
>>>>>>> 2abe198f66b5fb957757574e4f1f21993a829e2b
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
            {
            path:'/dashboard/adddoctor',
            element:
                <AdminRouter><AddDoctor></AddDoctor></AdminRouter>
            },
            {
            path:'/dashboard/managedoctor',
            element:
                <AdminRouter><ManageDoctors></ManageDoctors></AdminRouter>
            },
    ]
    },
])
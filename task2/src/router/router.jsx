import { createBrowserRouter } from "react-router-dom";
import Output from "../components/Output";
import Navbar from "../components/Navbar";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Navbar/>
    },
    {
        path:'/task2',
        element: <Output/>
    }
])
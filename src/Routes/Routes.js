import { createBrowserRouter } from "react-router-dom";
import About from "../About/About";
import Blog from "../components/Blog/Blog";
import Checkout from "../components/Checkout/Checkout";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Courses from "../components/Courses/Courses";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login/Login";
import Register from "../components/Login/Register/Register";
import Profile from "../components/Profile/Profile";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <PrivateRoute>
                    <Blog></Blog>
                </PrivateRoute>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/courses/checkout/:id',
                element: <PrivateRoute>
                    <Checkout></Checkout>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            }
        ]
    }


])
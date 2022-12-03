import { createBrowserRouter } from "react-router-dom";
import Login from "../authentication/Login/Login";
import SignUp from "../authentication/SignUp/SignUp";
import CheckOut from "../components/CheckOut/CheckOut";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../layout/Home/Home";
import Main from "../layout/Main/Main";
import About from "../shared/About/About";
import Blog from "../shared/Blog/Blog";
import CourseDetails from "../shared/CourseDetails/CourseDetails";
import Courses from "../shared/Courses/Courses";
import FAQ from "../shared/FAQ/FAQ";
import ToogleTheme from "../shared/ToogleTheme/ToogleTheme";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://study-hub-server.vercel.app/category"),
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () => fetch("https://study-hub-server.vercel.app/category"),
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/about",
        element: <About></About>,
      },

      {
        path: "/course-details/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => {
          return fetch(
            `https://study-hub-server.vercel.app/course/${params.id}`
          );
        },
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/toggle-theme",
        element: <ToogleTheme></ToogleTheme>,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

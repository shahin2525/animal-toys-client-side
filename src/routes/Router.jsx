import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../errorPage/ErrorPage";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import LoginLayout from "../layout/LoginLayout";
import Login from "../pages/Login/Login";
import SignupLayout from "../layout/SignupLayout";
import Signup from "../pages/Signup/Signup";
import AddToyLayout from "../layout/AddToyLayout";
import AddAToy from "../pages/AddAToy/AddAToy";
import BlogLayout from "../layout/BlogLayout";
import Blog from "../pages/Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignupLayout></SignupLayout>,
    children: [
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "/add-toy",
    element: <AddToyLayout></AddToyLayout>,
    children: [
      {
        path: "/add-toy",
        element: <AddAToy></AddAToy>,
      },
    ],
  },
  {
    path: "/blog",
    element: <BlogLayout></BlogLayout>,
    children: [
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
export default router;

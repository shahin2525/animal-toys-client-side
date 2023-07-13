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
import PrivateRoutes from "./PrivateRoutes";
import AllToyLayout from "../layout/AllToyLayout";
import AllToys from "../pages/AllToys/AllToys";
import MyToyLayout from "../layout/MyToyLayout";
import MyToys from "../pages/MyToys/MyToys";

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
    element: (
      <PrivateRoutes>
        <AddToyLayout></AddToyLayout>
      </PrivateRoutes>
    ),
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
  {
    path: "/all-toy",
    element: <AllToyLayout></AllToyLayout>,
    children: [
      {
        path: "/all-toy",
        element: <AllToys></AllToys>,
      },
    ],
  },
  {
    path: "/my-toys",
    element: <MyToyLayout></MyToyLayout>,
    children: [
      {
        path: "/my-toys",
        element: <MyToys></MyToys>,
      },
    ],
  },
]);
export default router;

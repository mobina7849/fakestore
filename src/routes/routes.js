import { createBrowserRouter } from "react-router-dom";
import Layout from "../component/layout";
import AboutUs from "../pages/about-us/AboutUs";
import Categories from "../pages/categories/categories";
import Home from "../pages/home";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
            //true yani to hamon / safhe Home ham baz kone
            index: true,
            element: <Home/>,
              
        },
        {
            path: "about-us",
            element: <AboutUs/>,
              
        },
        {
            path: "categories/:categoryID",
            element: <Categories/>,
              
        },
      ]
        
    },

    // {
    //   path: "/",
    //   element: <Layout2 />,
    //   children: [
    //     {
    //       path: "login",
    //       element: <Login />,
    //     },
    //     {
    //       path: "register",
    //       element: <Register />,
    //     },
    //   ],
    // },
  ]);
  
  export default router;
  
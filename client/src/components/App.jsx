import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./Home/Home";
import Signin from "./Auth/Siginin/Signin";
import Signup from "./Auth/Signup/Signup";
import Productdetail from "./Product/Productdetail";
import Userdetail from "./User/Userdetail";
import About from "./Home/About/About";
import Profile from "./Dashboard/Profile/Profile";
import BuyProducts from "./Dashboard/Buyproducts/BuyProducts";
import Sellproducts from "./Dashboard/Sellproducts/Sellproducts";
import Updateuser from "./Dashboard/Profile/Updateuser/Updateuser";
import Deleteconfirm from "./Dashboard/Profile/Deleteconfirm/Deleteconfirm";
import Addproduct from "./Dashboard/AddProduct/Addproduct";
import Users from "./Dashboard/Sellproducts/Users/Users";
import Updateproduct from "./Dashboard/Updateproduct/Updateproduct";
import Buyproduct from "./Buyproduct/Buyproduct";
const router = createBrowserRouter([
  {
    path:"/",
    element: <Home />
  },
  {
    path:"/about",
    element:<About />
  },
  {
    path:"/auth/sign-in",
    element:<Signin />
  },
  {
    path:"/auth/sign-up",
    element:<Signup />
  },
  {
    path:"/products/product/:productid",
    element:<Productdetail/>
  },
  {
    path:"/users/user/:userid",
    element:<Userdetail/>
  },
  {
    path:"/users/user/:userid/profile",
    element:<Profile />
  },
  {
    path:"/users/user/:userid/buy-products",
    element:<BuyProducts />
  },
  {
    path:"/users/user/:userid/sell-products",
    element:<Sellproducts />
  },
  {
    path:"/users/user/:userid/update-user",
    element:<Updateuser />
  },
  {
    path:"/users/user/:userid/delete-prompt",
    element:<Deleteconfirm />
  },
  {
    path:"/users/user/:userid/add-product",
    element:<Addproduct />
  },
  {
    path:"/users/user/:userid/:productid/users",
    element:<Users />
  },
  {
    path:"/users/user/:userid/:productid/update-product",
    element:<Updateproduct />
  },
  {
    path:"/users/user/:userid/:productid/buy-now",
    element:<Buyproduct />
  }

])
const App = ()=>{
  return (
   <RouterProvider router={router} />
  )
}

export default App;

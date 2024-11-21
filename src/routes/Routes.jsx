import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Statistics from "../pages/Statistics";
import AllProducts from "../components/AllProducts";
import ErrorPage from "../pages/ErrorPage";
import Phones from "../components/Phones";
import Laptops from "../components/Laptops";
import Smartwatches from "../components/Smartwatches";

import Accessories from "../components/Accessories";
import NoDataFound from "../components/NoDataFound";
import ProductDetails from "../components/ProductDetails";
import Cart from "../components/Cart";
import Wishlist from "../components/Wishlist";

const routes = createBrowserRouter([



    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children:([{
            path:'/',
            element:<Home></Home>,
            
            errorElement:<ErrorPage></ErrorPage>,
            children:([
                {
                    path:'/',
                    element:<AllProducts></AllProducts>,
                    errorElement:<ErrorPage></ErrorPage>,
                    loader:()=>fetch('/data.json'),
                },
                {
                    path:'/Phones',
                    element:<Phones></Phones>,
                    errorElement:<ErrorPage></ErrorPage>,
                    loader:()=>fetch('/data.json')
                },
                {
                    path:'/laptop',
                    element:<Laptops></Laptops>,
                    loader:()=>fetch('/data.json'),
                    errorElement:<ErrorPage></ErrorPage>,
                },
                {
                    path:'/smartwatch',
                    element:<Smartwatches></Smartwatches>,
                    loader:()=>fetch('/data.json'),
                    errorElement:<ErrorPage></ErrorPage>,

                },
                {
                    path:'/accessories',
                    element:<NoDataFound></NoDataFound>,
                    errorElement:<ErrorPage></ErrorPage>,
                }
            ])
        },
        {
            path:'/dashboard',
            element:<Dashboard></Dashboard>,
            errorElement:<ErrorPage></ErrorPage>,
            children:([
                {
                    path:'/dashboard',
                    element:<Cart></Cart>,
                    errorElement:<ErrorPage></ErrorPage>,
                },
                {
                    path:'/dashboard/wishlist',
                    element:<Wishlist></Wishlist>,
                    errorElement:<ErrorPage></ErrorPage>,
                },
                
            ])
        },
        {
            path:'/statistics',
            element:<Statistics></Statistics>,
            errorElement:<ErrorPage></ErrorPage>,
        },
        {
            path:'/productDetails/:id',
            element:<ProductDetails></ProductDetails>,
            loader:()=>fetch('/data.json'),
            errorElement:<ErrorPage></ErrorPage>,
            

        }
    
    ])
    },
   
])
export default routes
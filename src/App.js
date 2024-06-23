import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import logo from '../Notes/th-removebg-preview.png';
import Header from "./Component/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TopRestaurent from "./Component/TopRestaurent";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Error from "./Component/Error";
import Body from "./Component/Body";

import CheckClass from "./Component/CheckClass";
import VaraityDetails from "./Component/VaraityDatails";
import ShimmerUI from "./Component/ShimmerUI";
import Accordian from "./Component/Accordian";
import { UseName } from "./Utils/constants";


const RestaurentDetails = lazy(()=>import("./Component/RestaurentDetails"))

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <Header />,
        children:[
            {
                path:"/",
                element:<Body/>
                
            },
            {
                path:"/restaurent",
                element:<TopRestaurent />
                
            },
            {
                path:"/about",
                element:<About />
                
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/restaurent/:resID",
                element:<Suspense fallback={"Dhinesh Kumar"}><RestaurentDetails /></Suspense>
            },
            {
                path:"/class",
                element:<CheckClass name={"Dhinesh"} country={"India"} founder={"Dhinesh Francis"} position ={"Chief Excutive Officer(CEO)"} />
            },{
                path:"/varaity/:varID",
                element:<VaraityDetails />
            },
            {
                path:"/accordian",
                element:<Accordian />
            }
        ],
        errorElement: <Error />
       
    }
    
])
const rootElement = document.querySelector(".root");
const root = ReactDOM.createRoot(rootElement);
root.render(<RouterProvider router={appRouter}/>);

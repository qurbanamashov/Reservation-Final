import { createBrowserRouter } from "react-router-dom";
import About from "../Pages/About/About";
import Apartments from "../Pages/Apartments/Apartments";
import Cabins from "../Pages/Cabins/Cabins";
import Home from "../Pages/Home/Home";
import Hotel from "../Pages/Hotel/Hotel";
import HotelDetail from "../Pages/HotelDetail/HotelDetail";
import List from "../Pages/List/List";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Resorts from "../Pages/Resorts/Resorts";
import Villas from "../Pages/Villas/Villas";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/detail/:id",
    element: <HotelDetail/>,
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path:"/Hotel",
    element:<Hotel/>
  },
  {
    path:"/Cabins",
    element:<Cabins/>
  },
  {
    path:"/Villas",
    element:<Villas/>
  },
  {
    path:"/Apartment",
    element:<Apartments/>
  },
  {
    path:"/Resorts",
    element:<Resorts/>
  },
]);
export default router
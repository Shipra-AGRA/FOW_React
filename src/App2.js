import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import RestaurantMenuCopy from './components/RestaurantMenuCopy';
import { lazy, Suspense } from 'react';
// import Grocery from './components/Grocery';


const Grocery=lazy(()=>{return import("./components/Grocery")})
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet/>
        </div>
    )
}


//header will stick with every page
const appRouter2=createBrowserRouter([{
    path:"/",
    element:<AppLayout/>,
    children:[
        {
            path:"/",
            element:<Body/>
        },
        {
            path:"/about",
            element:<About/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
        {
            path:"/restaurants/:resId",
            element:<RestaurantMenuCopy/> //<RestaurantMenu/>
        },
        {
            path:"/grocery",
            element:(<Suspense fallback={<h2>Loading...</h2>}><Grocery/></Suspense>)
        }
    ],
    errorElement:<Error/>
}])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter2}/>)
export default AppLayout
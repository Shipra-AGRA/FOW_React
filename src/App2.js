import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter,Outlet,RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import RestaurantMenuCopy from './components/RestaurantMenuCopy';
import { lazy, Suspense, useEffect, useState } from 'react';
import HeaderCopyTalwind from './components/HeaderCopyTalwind';
import AccordianCards from './components/AccordianCards';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';
// import Grocery from './components/Grocery';


const Grocery=lazy(()=>{return import("./components/Grocery")})
const AppLayout = () => {
    //consider authentication happening here, we fetch user details and store them in a state variable
    const [userName,setUserName]=useState("")

    useEffect(()=>{
        const data={
            name:"shipra Ag."
        };
        setUserName(data.name)
    },[])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
            <div className="app">
                {/* <UserContext.Provider value={{loggedInUser:"Header"}}> */}
                    <Header />
                {/* </UserContext.Provider> */}
            {/* <HeaderCopyTalwind/> */}
            <Outlet/>
        </div>
        </UserContext.Provider>
        </Provider>
        
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
            // element:<Grocery/>
            element:(<Suspense fallback={<h2>Loading...</h2>}><Grocery/></Suspense>)
        },
        {
            path:"/AccordianCards",
            element:<AccordianCards/>
        },
        {
            path:"/cart",
            element:<Cart/>
        }
    ],
    errorElement:<Error/>
}])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter2}/>)
export default AppLayout
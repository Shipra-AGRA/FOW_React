import RestaurantCard from "./RestaurantCard"
import resObj from "../utils/mockData"
import React, { useContext, useEffect } from "react"
import { useState } from "react"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext.js"

const Body = () => {

    useEffect(()=>{
        fetchData();
    },[])

    const {loggedInUser,setUserName}=useContext(UserContext)
    console.log("userContext@@",loggedInUser)

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57590&lng=77.33450&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json()
        const restroData=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfRestaurant(restroData)
        setFilteredRestaurant(restroData)
    }

    const [ListOfRestaurant,setListOfRestaurant]=useState([])
    const [searchText,setSearchText]=useState("")
    const [filteredRestaurant,setFilteredRestaurant]=useState([])

    const onlineStatus=useOnlineStatus()
    console.log("onlineStatus",onlineStatus)
    if(onlineStatus === false) return <h1>Looks like you are offline!! Please check your internet connection.</h1>

    return ListOfRestaurant.length===0?<Shimmer/>:(
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input type="text" className="search-box"
                    onChange={(e)=>{setSearchText(e.target.value)}} 
                    value={searchText}
                    />
                    <button onClick={()=>{
                        const filteredRestro=ListOfRestaurant.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    )
                    setFilteredRestaurant(filteredRestro)
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList=ListOfRestaurant.filter((res)=>res.info.avgRating>4.3)
                    setFilteredRestaurant(filteredList)
                }}>Top Rated Restaurant</button>
                <div>
                    <input className="border p-3" onChange={(e)=>{setUserName(e.target.value)}} value={loggedInUser}/>
                </div>
            </div>
            <div className='res-container'>
                {
                    filteredRestaurant.map((restaurant)=>(
                        <Link to={"/restaurants/"+restaurant.info.id}><RestaurantCard resData={restaurant} key={restaurant.info.id}/></Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Body
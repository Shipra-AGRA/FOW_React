import RestaurantCard from "./RestaurantCard"
import resObj from "../utils/mockData"
import React, { useEffect } from "react"
import { useState } from "react"

const Body = () => {

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.57590&lng=77.33450&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json=await data.json()
        setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const [ListOfRestaurant,setListOfRestaurant]=useState([])
    if(ListOfRestaurant.length===0){
        return <h1>Loading...</h1>
    }

    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={()=>{
                    const filteredList=ListOfRestaurant.filter((res)=>res.info.avgRating>4.3)
                    setListOfRestaurant(filteredList)
                }}>Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                {
                    ListOfRestaurant.map((restaurant)=>(
                        <RestaurantCard resData={restaurant} key={restaurant.info.id}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Body
import RestaurantCard from "./RestaurantCard"
import resObj from "../utils/mockData"
import React from "react"
import { useState } from "react"

const Body = () => {
    const [ListOfRestaurant,setListOfRestaurant]=useState(resObj)

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
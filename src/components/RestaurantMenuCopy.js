import { useState } from "react"
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenuCopy=()=>{
    const {resId}=useParams()
    const resInfo=useRestaurantMenu(resId)
    
    if (resInfo===null) return <Shimmer/>

    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info
    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[1]?.card?.card

return (
    <div className="menu">
        <h1>{name}</h1>
        <h2>{cuisines.join(",")}</h2>
        <h2>{costForTwoMessage}</h2>
        <ul>
            {
                itemCards.map((itemCard)=>(
                    <li key={itemCard.id}>{itemCard.card.info.name} - Rs.{itemCard.card.info.defaultPrice/100 || itemCard.card.info.price/100}</li>
                ))
            }
        </ul>
    </div>
)
}
export default RestaurantMenuCopy
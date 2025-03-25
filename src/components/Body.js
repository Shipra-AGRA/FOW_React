import RestaurantCard from "./RestaurantCard"
import resObj from "../utils/mockData"

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>search</div>
            <div className='res-container'>
                {
                    resObj.map((restaurant)=>(
                        <RestaurantCard resData={restaurant} key={restaurant.info.id}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Body
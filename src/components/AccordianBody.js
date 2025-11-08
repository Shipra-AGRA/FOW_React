import { useDispatch } from "react-redux"
import { CDN_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice"

const AccordianBody=({data})=>{
    console.log("data@@",data)
    const {locality,areaName,costForTwo}=data?.info || {}
    const dispatch=useDispatch()
    function handelClick(){
        dispatch(addItem({data}))
    }
return(
    <div className="flex justify-between">
        <div>
            <span>{areaName+", "+locality}</span>
        <br/>
        <span>{costForTwo}</span>
        </div>
       <div className="relative">
         <span>
            <img src={`${CDN_URL}${data?.info?.cloudinaryImageId}`} className="w-24 h-24"/>
            <button className="absolute bottom-1 bg-black text-white p-1 rounded-sm m-0"
            onClick={handelClick}>Add+</button>
            </span>
       </div>
    </div>
)
}
export default AccordianBody
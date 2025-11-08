import { useEffect, useState } from "react"
import RestaurantCard from "./RestaurantCard"
import { Link } from "react-router-dom"
import AccordianData from "./AccordianData"

const AccordianCards=()=>{
    const [data,setData]=useState(null)
    const [accIndex,setAccIndex]=useState(null)
    
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=27.16199945634617&lng=77.98457968980074&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null")
        const json=await data.json()
        const restroData=json?.data?.cards
        const filterData=restroData.filter((d)=>(d?.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.Restaurant"))
        setData(filterData)
    }

    const handleClick=(index)=>{
        accIndex===index?setAccIndex(null):setAccIndex(index)
    }
    
return(
    <>
    {
        data?.map((d,index)=>(
            <AccordianData key={index} data={d?.card?.card} accIndex={index===accIndex?true:false} setAccIndex={()=>{handleClick(index)}}/>
        ))
    }
    </>
)
}
export default AccordianCards
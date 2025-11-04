import React from "react"
import { useState } from "react"
import AccordianBody from "./AccordianBody"

const AccordianData=({data})=>{

    const [hide,setHide]=useState(true)
    const handleClick=()=>{
        setHide(!hide)
    }
return(
    <div center>
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg">{data.info.name}</span>
        <span>⬇️</span>
        </div>
        {!hide && <AccordianBody data={data}/>}
        </div>
    </div>
)
}
export default AccordianData
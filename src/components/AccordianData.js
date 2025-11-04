import React from "react"
import { useState } from "react"
import AccordianBody from "./AccordianBody"

const AccordianData=({data,accIndex,setAccIndex})=>{

    // const [hide,setHide]=useState(true)
    // const handleClick1=()=>{
    //     setHide(!hide)
    // }

    const handleClick2=()=>{
        setAccIndex()
    }
return(
    <div center>
        <div className="w-6/12 bg-gray-50 shadow-lg p-4 mx-auto my-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick2}>
            <span className="font-bold text-lg">{data.info.name}</span>
        <span>⬇️</span>
        </div>
        {/* {!hide && <AccordianBody data={data}/>} */}
       { accIndex && <AccordianBody data={data}/>}
        </div>
    </div>
)
}
export default AccordianData
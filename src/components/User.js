import { useEffect } from "react"

const User=({name,location})=>{

    // useEffect(()=>{
    //     setInterval(()=>{
    //         console.log("func")
    //     },1000)
    // },[]) //this func will printed every second regardless of any specific page. it will work on all pages.

    useEffect(()=>{
            const timer=setInterval(()=>{
                console.log("func")
            },1000)
            console.log("useEffect")

            //this function is called when unmounting the component
            return ()=>{
                console.log("useEffect return")
                clearInterval(timer);
            }
        },[])
        console.log("render")
return(
    <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}, UP</h3>
        <h4>Contact: shipraagrawal230@gmail.com</h4>
    </div>
)
}
export default User
import React from "react"
import User from "./User"
import UserClass from "./UserClass"
// const About=()=>{
// return(
//     <div className="about">
//         <h1>About Component</h1>
//         <User name={"Shipra (function)"} location={"Noida"}/>
//         <UserClass name={"Shipra (class)"} location/>
//     </div>
// )
// }

class About extends React.Component{
    constructor(props){
        super(props)
        console.log("parent cons")
    }
    componentDidMount(){
        console.log("parent CDM")
    }
    render(){
        console.log("parent render")
        return(
                <div className="about">
                    <h1>About Component</h1>
                    <User name={"Shipra (function)"} location={"Noida"}/>
                    <UserClass name={"Shipra (class)"} />
                    <UserClass name={"Hello (class)"} />
                </div>
            )
    }
}
export default About
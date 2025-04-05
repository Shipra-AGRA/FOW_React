import User from "./User"
import UserClass from "./UserClass"
const About=()=>{
return(
    <div className="about">
        <h1>About Component</h1>
        <User name={"Shipra (function)"} location={"Noida"}/>
        <UserClass name={"Shipra (class)"} location/>
    </div>
)
}
export default About
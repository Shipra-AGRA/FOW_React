//this will make react know that this will be a class based component.
//render method return the JSX that will be displayed onto the UI.

import React from "react"
class UserClass extends React.Component{
render(){
    return(
        <div className="user-card">
            <h2>Name: Shipra</h2>
            <h3>Location: Noida, UP</h3>
            <h4>Contact: shipraagrawal230@gmail.com</h4>
        </div>
    )
}
}

export default UserClass

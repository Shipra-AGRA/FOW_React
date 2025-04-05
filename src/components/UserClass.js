//this will make react know that this will be a class based component.
//render method return the JSX that will be displayed onto the UI.
//loading the CBC on a webpage means creating the instance of a class.

import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props) //mandatory

        this.state={
            count:0
        }
    }
render(){
    return(
        <div className="user-card">
            <h2>Name: {this.props.name}</h2>
            <h3>Location: Noida, UP</h3>
            <h4>Contact: shipraagrawal230@gmail.com</h4>
            <h4>count: {this.state.count}</h4>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increase Count</button>
        </div>
    )
}
}

export default UserClass

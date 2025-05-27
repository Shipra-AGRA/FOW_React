//this will make react know that this will be a class based component.
//render method return the JSX that will be displayed onto the UI.
//loading the CBC on a webpage means creating the instance of a class.

import React from "react"
class UserClass extends React.Component{ //extends React.Component will make react know that this is a class based component and it has a render method that returns some piece of JSX
    constructor(props){
        super(props) //mandatory

        console.log(this.props.name + "child cons")
        this.state={
            count:0,
            data:{
                name:"shipra"
            }
        }
    }
    async componentDidMount(){
        // setInterval(()=>{
        //     console.log("hello")
        // },1000)  //not good as it will call every second regardless of any page.

        this.timer=setInterval(()=>{
            console.log("hello")
        },1000)
        
        console.log(this.props.name+"child CDM")
        const data=await fetch("https://fakestoreapi.com/users/1")
        const json=await data.json()
        console.log("json",json)
        this.setState({
            data:json
        })
    }
    componentDidUpdate(prevProps,prevState){
        //useeffect with some dependency
        if(this.state.count !== prevState.count){

        }
        console.log("component did update")
    }
    componentWillUnmount(){
        clearInterval(this.timer)
        console.log("component will mount")
    }
render(){
    console.log(this.props.name+"child render")
    return(
        <div className="user-card">
            <h2>Name: {this.props.name}</h2>
            <h3>Location: Noida, UP</h3>
            <h4>Contact: shipraagrawal230@gmail.com</h4>
            <h4>count: {this.state.count}</h4>
            <button onClick={()=>{this.setState({count:this.state.count+1})}}>Increase Count</button>
            <h3>{this.state.data?.name?.firstname}</h3>
        </div>
    )
}
}

export default UserClass

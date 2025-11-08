import { useContext, useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext.js"
import { useSelector } from "react-redux"

const Header = () => {
    const {loggedInUser}=useContext(UserContext)
    const [btnName,setBtnName]=useState("Login")
    const itemsCount=useSelector((store)=>store?.cart?.items?.length)
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo"
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart{itemsCount}</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="login" onClick={()=>{btnName==='Login'?setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button>
                    <li>{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
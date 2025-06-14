import { useState } from "react"
import { LOGO_URL } from "../utils/constants"
import { Link } from "react-router-dom"

const HeaderCopyTalwind = () => {
    const [btnName,setBtnName]=useState("Login")
    return (
        <div className="flex justify-between">
            <div className="logo-container">
                <img className="w-8"
                    src={LOGO_URL}
                />
            </div>
            <div className="nav-items">
                <ul className="flex p-16 m-16">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link>Cart</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <button className="p-4 bg-green-100" onClick={()=>{btnName==='Login'?setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default HeaderCopyTalwind
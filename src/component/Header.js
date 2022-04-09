import React from "react";
import Logo from "../image/Vectorairbnblogo.png"

export default function Header() {
    return (
        <div className="header">
            <img src={Logo} alt="Airbnb Logo"></img>
        </div>
    )
}
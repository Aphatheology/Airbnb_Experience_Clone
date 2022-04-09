import React from "react";
import HeroImage from "../image/Group77hero.png"

export default function HeroSection() {
    return (
        <div className="herosection">
            <img src={HeroImage} className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}
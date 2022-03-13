import React from "react";
import NavBar from "../components/NavBar.js"
import Footer from "../components/Footer.js"
import profilePicture from "../images/profile-picture.png"


export default function About () {
    return(
    <main>
        <NavBar />

        <div className="info-box">
        <div id="about-me-header">
        <img src={profilePicture} alt="Max" height="125vh"/>
        <h1 className="box-title">About Me</h1>
        </div>
        </div>

        <Footer />
    </main>
    )
}
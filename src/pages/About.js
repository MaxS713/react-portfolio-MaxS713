import React from "react";
import NavBar from "../components/NavBar.js"
import Footer from "../components/Footer.js"
import profilePicture from "../media/profile-picture.png"


export default function About () {
    return(
    <>
        <NavBar />

        <div id="about-me">
        <div id="about-me-header">
        <img src={profilePicture} alt="Max" height="125vh"/>
        <h1>About Me</h1>
        </div>
        </div>

        <Footer />
    </>
    )
}
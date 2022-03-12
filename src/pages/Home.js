import React from "react";
import NavBar from "../components/NavBar.js"
import Footer from "../components/Footer.js"
import minecraftSkin from "../images/minecraft-skin.png"


export default function HomePage () {
    return(
    <main>
        <NavBar />

        <div id="hero">
            <h1>Hi, I'm Max</h1>
            <img src={minecraftSkin} height="350vh" alt="Max's Minecraft skin"/>
        </div>

        <Footer />
    </main>
    )
}



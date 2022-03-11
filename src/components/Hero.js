import React from "react";
import minecraftSkin from '../minecraft-skin.png'

export default function Hero () {
    return (
        <div id="hero">
            <h1>Hi, I'm Max</h1>
            <img src={minecraftSkin} height="350vh" alt="Max's Minecraft skin"/>
        </div>
        )
    };

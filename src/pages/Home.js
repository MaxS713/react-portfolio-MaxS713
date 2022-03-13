import React from "react";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import TxtTypeAnimation from "../components/TxtType.js";
import minecraftSkin from "../images/minecraft-skin.png";

export default function HomePage() {

  TxtTypeAnimation(); //function invocation of the imported title animation 

  return (
    <main id="home-page">
      <NavBar /> {/*Navigation Bar component*/}

{/*Main Page content with minecraft skin and title animation*/}
      <div id="hero">

        <h1 id="hero-title">
          <span className="bracket">[&nbsp;</span>
          <div
            className="typewrite"
            data-period="2000"
            data-type='[ "Hello World!", "I&#39;m Max"]'
          ></div>
          <span className="wrap"></span>
          <span className="bracket">&nbsp;]</span>
        </h1>

        <img src={minecraftSkin} height="350vh" alt="Max's Minecraft skin" />

      </div>

      <Footer /> {/*Footer component*/}
    </main>
  );
}

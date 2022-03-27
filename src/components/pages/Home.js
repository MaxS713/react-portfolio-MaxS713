import React from "react";
import NavBar from "../NavBar.js";
import Footer from "../Footer.js";
import TxtTypeAnimation from "../TxtType.js";
import minecraftSkin from "../../assets/images/minecraft-skin.png";
import "./Home.css"


export default function HomePage() {

  TxtTypeAnimation(); //imported function invocation for the title animation

  return (
    <main id="home-page">
      <NavBar /> {/*Navigation Bar component*/}

{/*Main Page content with the title animation and minecraft skin*/}
      <div id="hero">

        <h1 id="hero-title">
          <span className="bracket">&lt;&nbsp;</span>
          <div
            className="typewrite"
            data-period="2000"
            data-type='[ "Hello World!", "I&#39;m Max", "Welcome!"]'
          ></div>
          <span className="wrap"></span>
          <span className="bracket">&nbsp;&#47;&gt;</span>
        </h1>

        <img src={minecraftSkin} height="350vh" alt="Max's Minecraft skin" />

      </div>

      <Footer /> {/*Footer component*/}
    </main>
  );
}

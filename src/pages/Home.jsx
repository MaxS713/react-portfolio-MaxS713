
import TxtTypeAnimation from "../components/TxtType";

import minecraftSkin from "../assets/images/minecraft-skin.png";

import "./Home.css";

export default function HomePage() {
  TxtTypeAnimation();

  return (
    <main id="home-page">
      <div id="hero">
        <h1 id="hero-title">
          <span className="bracket">&lt;&nbsp;</span>
          <div
            className="typewrite"
            data-period="2000"
            data-type='[ "Hello World!", "I&#39;m Max", "Welcome!"]'
          />
          <span className="wrap" />
          <span className="bracket">&nbsp;&#47;&gt;</span>
        </h1>

        <img src={minecraftSkin} height="350vh" alt="Max's Minecraft skin" />
      </div>
    </main>
  );
}

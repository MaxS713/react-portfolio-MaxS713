import React from "react";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import profilePicture from "../images/profile-picture.png";

export default function About() {
  return (
    <main>
      <NavBar /> {/*Navigation Bar component*/}
      {/*About page content*/}
      <div className="info-box">
        <div id="about-me-header">
          <img src={profilePicture} alt="Max" height="125vh" />
          <h1 className="box-title">About Me</h1>
        </div>

        <div id="about-me-content">
          <p>Hello! My name is Maxime Soufer, call me Max.</p>
          <p>I'm located in Burlington, VT.</p>
          <p>
            I enjoy coding and creating things that can in one way or another
            improve someone's life. My interest in coding started since I can
            remember. Always trying to tinker and dig further into how all
            software and the internet funtions. I would even try to code simple
            text based games on my graphic calculator in high-school and have my
            friends try them out!
          </p>
          <p>
            {" "}
            I am currently studying with a program called Upright Education
            a.k.a Burlington Code Academy. Building knowledge in all things
            coding.{" "}
          </p>

          <p>
            AFK, you will find me taking care of my pet rabbit, cooking food,
            watching popular movies and tv shows and playing music!{" "}
          </p>
        </div>
      </div>
      <Footer /> {/*Footer component*/}
    </main>
  );
}

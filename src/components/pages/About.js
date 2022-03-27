import React from "react";
import NavBar from "../NavBar.js";
import Footer from "../Footer.js";
import profilePicture from "../../assets/images/profile-picture.png";
import "./About.css"

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
          <p>Hello! My name is Maxime Soufer - call me Max.</p>
          <p>I'm based in Burlington, VT.</p>
          <p>
            I enjoy coding and creating things that can improve quality of life
            for others. I have been interested in coding as long as I can
            remember. As a child, I was always tinkering and digging further
            into how the internet and software functions. I would even try to
            code simple text-based games on my graphing calculator in high
            school for my friends to try out!
          </p>
          <p>
            I am currently studying with a program called Upright Education
            (a.k.a Burlington Code Academy) and building knowledge in all things
            coding: JavaScript, HTML and CSS.
          </p>

          <p>
            AFK, you will find me taking care of my pet Dutch rabbit, cooking
            food, watching popular movies and tv shows, and playing music!
          </p>
        </div>
      </div>

      <Footer /> {/*Footer component*/}
    </main>
  );
}

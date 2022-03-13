import React from "react";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import guessTheNumberPreview from "../images/guessthenumber-preview.png";
import zorkingtonPreview from "../images/zorkington-preview.png";
import jeopardyPreview from "../images/jeopardy-preview.png";

export default function Projects() {
  return (
    <main>
      <NavBar />

      <div className="info-box">
        <h1 className="box-title">My creations</h1>
        <div className="project-list">
            <div className="project-item">
          <div className="description-header">
            <h2>Project Name</h2>
            <img
              src={guessTheNumberPreview}
              height="100vh"
              alt="Preview of Guess The Number console game"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          </div>
          <div className="project-item">
          <div className="description-header">
            <h2>Project Name</h2>
            <img
              src={zorkingtonPreview}
              height="100vh"
              alt="Preview of Zorkington console game"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          </div>
          <div className="project-item">
          <div className="description-header">
            <h2>Project Name</h2>
            <img
              src={jeopardyPreview}
              height="100vh"
              alt="Preview of Jeopardy board game"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

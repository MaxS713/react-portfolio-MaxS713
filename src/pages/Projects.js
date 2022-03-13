import React from "react";
import NavBar from "../components/NavBar.js";
import Footer from "../components/Footer.js";
import guessTheNumberPreview from "../images/guessthenumber-preview.png";
import zorkingtonPreview from "../images/zorkington-preview.png";
import jeopardyPreview from "../images/jeopardy-preview.png";
import "./Projects.css";

export default function Projects() {
  return (
    <main>
      <NavBar /> {/*Navigation Bar component*/}

      {/*List of projects - in a grid layout*/}
      {/*Later on, could work on having a system to pull them straight from the github API*/}
      <div className="info-box">

        <h1 className="box-title">Things I've worked on...</h1>
        
        <div id="project-list">
          <div className="project-item">
            <div className="description-header">
              <h2>Guess The Number</h2>
              <a href="https://github.com/MaxS713/guess-the-number-MaxS713">
                <img
                  src={guessTheNumberPreview}
                  height="100vh"
                  alt="Preview of Guess The Number console game"
                />
              </a>
            </div>
            <p>
              A console program that has the computer guess a number you picked,
              or lets you guess a number the computer picked! Showcases basic
              javascript logic and operators.
            </p>
          </div>

          <div className="project-item">
            <h2>Zorkington</h2>
            <a href="https://github.com/MaxS713/zorkington-MaxS713">
              <img
                src={zorkingtonPreview}
                height="100vh"
                alt="Preview of Zorkington console game"
              />
            </a>
            <p>
              A text based console game inspired by the first popular of its
              kind: Zorkington. The game is called Xirtam and is based on the
              theme of the Matrix. Feel free to try it out! {"\n"}
              This showcases the use of basic javascript objects and class
              constructors.
            </p>
          </div>

          <div className="project-item">
            <h2>Jeopardy Board</h2>
            <a href="https://github.com/MaxS713/jeopardy-board-MaxS713">
              <img
                src={jeopardyPreview}
                height="100vh"
                alt="Preview of Jeopardy board game"
              />
            </a>
            <p>
              A trivia game based on the famous TV show Jeopardy. This showcases
              HTML, CSS and JS working together!
            </p>
          </div>
        </div>
      </div>
      <Footer /> {/*Footer component*/}
    </main>
  );
}

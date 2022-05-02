import React from "react";
import NavBar from "../NavBar.js";
import Footer from "../Footer.js";
import guessTheNumberPreview from "../../assets/images/guessthenumber-preview.png";
import zorkingtonPreview from "../../assets/images/zorkington-preview.png";
import jeopardyPreview from "../../assets/images/jeopardy-preview.png";
import yelpingtonPreview from "../../assets/images/yelpington-preview.png";
import reactChatPreview from "../../assets/images/react-chat-preview.png";
import atrPreview from "../../assets/images/atr-preview.png";
import "./Projects.css";

export default function Projects() {
  return (
    <main>
      <NavBar /> {/*Navigation Bar component*/}
      {/*List of projects - in a grid layout*/}
      {/*Later on, could work on having a system to pull them straight from the github API*/}
      <div className="projects-box">
        <h1 className="box-title">Things I've worked on...</h1>

        <div id="project-list">
          <div className="project-item">
            <h2>
              <a href="https://github.com/MaxS713/All-Things-Rams">
                All Things Rams
              </a>
            </h2>
            <a href="https://github.com/MaxS713/All-Things-Rams">
              <img
                src={atrPreview}
                height="100vh"
                alt="Preview of All Things Rams Website"
              />
            </a>
            <p>
              This project was the <strong>capstone project</strong> for the
              software development boot camp of Upright Education (Feb. 2022).
              The client wanted a website that had all the latest news and
              socials updates about the L.A. Rams football team. This is a
              full-stack application with the use of React, Express and Mongo
              DB. Web scraping was done with the help of puppeteer and social
              media APIs.
            </p>
            <p>
              <a href="https://all-things-rams-capstone-demo.herokuapp.com/">
                See it here!
              </a>
              &nbsp;-&nbsp;
              <a href="https://docs.google.com/presentation/d/e/2PACX-1vREfGwiVL3cejUz0VofCgVTQLdaF6ZCTSdzYF_VleP2Cqjo4LkaIFv-qRT3VVi-A6CWGPx63HB3db0G/pub?start=true&loop=true&delayms=3000&slide=id.p">
                Demo Day Slides
              </a>
            </p>
          </div>

          <div className="project-item">
            <h2>
              <a href="https://github.com/MaxS713/jeopardy-board-MaxS713">
                Jeopardy Board
              </a>
            </h2>
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
            <p>
              <a href="https://maxs713.github.io/jeopardy-board-MaxS713/">
                Try it here!
              </a>
            </p>
          </div>

          <div className="project-item">
            <h2>
              <a href="https://github.com/MaxS713/zorkington-MaxS713">
                Zorkington
              </a>
            </h2>
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
              theme of the Matrix. This showcases the use of basic javascript
              objects and class constructors.
            </p>
          </div>

          <div className="project-item">
            <div className="description-header">
              <h2>
                <a href="https://github.com/MaxS713/yelpington-MaxS713">
                  Yelpington
                </a>
              </h2>
              <a href="https://github.com/MaxS713/yelpington-MaxS713">
                <img
                  src={yelpingtonPreview}
                  height="100vh"
                  alt="Preview of yelpington app"
                />
              </a>
            </div>
            <p>
              A react app based on "yelp", a directory of some restaurants in
              Burlington, VT. Showcases the use of a node.js express server and
              the map library "leaflet".
            </p>
            <p>
              <a href="https://yelpington-maxs.vercel.app/">Visit it here!</a>
            </p>
          </div>

          <div className="project-item">
            <div className="description-header">
              <h2>
                <a href="https://github.com/MaxS713/react-chat-maxs-jas">
                  React Chat
                </a>
              </h2>
              <a href="https://github.com/MaxS713/react-chat-maxs-jas">
                <img
                  src={reactChatPreview}
                  height="100vh"
                  alt="Preview of the react chat app"
                />
              </a>
            </div>
            <p>
              A react chat app. Showcases the use of an express server and a
              MongoDB database.
            </p>
            <p>
              <a href="https://react-chat-maxs-jas.vercel.app/">Try it here!</a>
            </p>
          </div>

          <div className="project-item">
            <div className="description-header">
              <h2>
                <a href="https://github.com/MaxS713/guess-the-number-MaxS713">
                  Guess The Number
                </a>
              </h2>
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
              JavaScript logic and operators.
            </p>
          </div>
        </div>
      </div>
      <Footer /> {/*Footer component*/}
    </main>
  );
}

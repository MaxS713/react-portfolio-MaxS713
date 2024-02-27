import guessTheNumberPreview from "../assets/images/guessthenumber-preview.png";
import zorkingtonPreview from "../assets/images/zorkington-preview.png";
import jeopardyPreview from "../assets/images/jeopardy-preview.png";
import yelpingtonPreview from "../assets/images/yelpington-preview.png";
import reactChatPreview from "../assets/images/react-chat-preview.png";
import atrPreview from "../assets/images/atr-preview.png";
import crudPreview from "../assets/images/crud-preview.png";

import "./Projects.css";

export default function Projects() {
  return (
    <main>
      <div className="projects-box">
        <h1 className="box-title">Things I&apos;ve worked on...</h1>

        <div id="project-list">
          <div className="project-item">
            <h2>
              <a href="https://github.com/MaxS713/All-Things-Rams">All Things Rams</a>
            </h2>
            <a href="https://github.com/MaxS713/All-Things-Rams">
              <img src={atrPreview} height="100vh" alt="Preview of All Things Rams Website" />
            </a>
            <p>
              This project was the
              <b>capstone project</b>
              for the software development boot camp of Upright Education (Feb. 2022). The client
              wanted a website that had all the latest news and socials updates about the L.A. Rams
              football team. This is a full-stack application with the use of React, Express and
              Mongo DB. Web scraping was done with the help of puppeteer and social media APIs.
            </p>
            <a href="https://all-things-rams-capstone-demo.herokuapp.com/">See it here!</a>
          </div>

          <div className="project-item">
            <h2>
              <a href="https://github.com/MaxS713/jeopardy-board-MaxS713">Jeopardy Board</a>
            </h2>
            <a href="https://github.com/MaxS713/jeopardy-board-MaxS713">
              <img src={jeopardyPreview} height="100vh" alt="Preview of Jeopardy board game" />
            </a>
            <p>
              A trivia game based on the famous TV show Jeopardy. This showcases HTML, CSS and JS
              working together!
            </p>
            <a href="https://maxs713.github.io/jeopardy-board-MaxS713/">Try it here!</a>
          </div>

          <div className="project-item">
            <h2>
              <a href="https://github.com/MaxS713/zorkington-MaxS713">Zorkington</a>
            </h2>
            <a href="https://github.com/MaxS713/zorkington-MaxS713">
              <img
                src={zorkingtonPreview}
                height="100vh"
                alt="Preview of Zorkington console game"
              />
            </a>
            <p>
              A text based console game inspired by the first popular of its kind: Zorkington. The
              game is called Xirtam and is based on the theme of the Matrix. This showcases the use
              of basic javascript objects and class constructors.
            </p>
          </div>

          <div className="project-item">
            <h2>
              <a href="https://crud-the-robot-factory.vercel.app/">CRUD - The Robot Factory</a>
            </h2>
            <a href="https://crud-the-robot-factory.vercel.app/">
              <img src={crudPreview} height="100vh" alt="Preview of the Robot Factory Game" />
            </a>
            <p>
              This is a full stack application game I designed on my free time for my classmates to
              try out. You manage a group of robots, have them gather resources, defend your base
              and raid other players.
            </p>
            <a href="https://crud-the-robot-factory.vercel.app/">Try it here!</a>
          </div>

          <div className="project-item">
            <div className="description-header">
              <h2>
                <a href="https://github.com/MaxS713/yelpington-MaxS713">Yelpington</a>
              </h2>
              <a href="https://github.com/MaxS713/yelpington-MaxS713">
                <img src={yelpingtonPreview} height="100vh" alt="Preview of yelpington app" />
              </a>
            </div>
            <p>
              A react app based on &quot;yelp&quot;, a directory of some restaurants in Burlington,
              VT. Showcases the use of a node.js express server and the map library
              &quot;leaflet&quot;.
            </p>
            <a href="https://yelpington-maxs.vercel.app/">Try it here!</a>
          </div>

          <div className="project-item">
            <div className="description-header">
              <h2>
                <a href="https://github.com/MaxS713/react-chat-maxs-jas">React Chat</a>
              </h2>
              <a href="https://github.com/MaxS713/react-chat-maxs-jas">
                <img src={reactChatPreview} height="100vh" alt="Preview of the react chat app" />
              </a>
            </div>
            <p>A react chat app. Showcases the use of an express server and a MongoDB database.</p>
            <a href="https://react-chat-maxs-jas.vercel.app/">Check it out here!</a>
          </div>

          <div className="project-item">
            <div className="description-header">
              <h2>
                <a href="https://github.com/MaxS713/guess-the-number-MaxS713">Guess The Number</a>
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
              A console program that has the computer guess a number you picked, or lets you guess a
              number the computer picked! Showcases basic JavaScript logic and operators.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

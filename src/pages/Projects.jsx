import initioPreview from "../assets/images/app-thumbnails/initio.png"
import atrPreview from "../assets/images/app-thumbnails/all-things-rams.png";
import jeopardyPreview from "../assets/images/app-thumbnails/jeopardy.png";
import zorkingtonPreview from "../assets/images/app-thumbnails/zorkington.png";
import crudPreview from "../assets/images/app-thumbnails/crud.png";
import yelpingtonPreview from "../assets/images/app-thumbnails/yelpington.png";
import ticTacToePreview from "../assets/images/app-thumbnails/tic-tac-toc-preview.png"
import reactChatPreview from "../assets/images/app-thumbnails/react-chat.png";
import guessTheNumberPreview from "../assets/images/app-thumbnails/guess-the-number.png";

import "./Projects.css";

const projects = [
  {
    title: 'initio Software',
    img: initioPreview,
    link: 'https://initio.software/',
    description: 'Full-stack application created to automate valuation of startups and small companies.\n' +
      'Participated to a great extent in all aspects of production: planning, front-end and back-end development and deployment.',
  },
  {
    title: 'All Things Rams',
    link: 'https://github.com/MaxS713/All-Things-Rams/',
    img: atrPreview,
    description: 'This project was the capstone project for the software development boot camp of Upright Education (Feb. 2022).\n' +
      'The client wanted a website that had all the latest news and socials updates about the L.A. Rams ' +
      'football team. This is a full-stack application with the use of React, Express and ' +
      'Mongo DB. Web scraping was done with the help of puppeteer and social media APIs.',
  },
  {
    title: 'Jeopardy Board',
    img: jeopardyPreview,
    link: 'https://github.com/MaxS713/jeopardy-board-MaxS713/',
    tryLink: 'https://maxs713.github.io/jeopardy-board-MaxS713/',
    description: 'A trivia game based on the famous TV show Jeopardy. This showcases HTML, CSS and JS working together!',
  },
  {
    title: 'Zorkington',
    img: zorkingtonPreview,
    link: 'https://github.com/MaxS713/zorkington-MaxS713/',
    description: 'A text based console game inspired by the first popular of its kind: Zorkington. ' +
      'The game is called Xirtam and is based on the theme of the Matrix. This showcases the use ' +
      'of basic javascript objects and class constructors.'
  },
  {
    title: 'The Robot Factory',
    img: crudPreview,
    link: 'https://github.com/MaxS713/CRUD-The-Robot-Factory/',
    tryLink: 'https://crud-the-robot-factory.vercel.app/',
    description: 'This is a full stack application game I designed on my free time for my classmates to try out. ' +
      'You manage a group of robots, have them gather resources, defend your base and raid other players.',
  },
  {
    title: 'Yelpington',
    img: yelpingtonPreview,
    link: 'https://github.com/MaxS713/yelpington-MaxS713/',
    tryLink: 'https://yelpington-maxs.vercel.app/',
    description: "A react app based on 'yelp', a directory of some restaurants in Burlington, VT. " +
      "Showcases the use of a node.js express server and the map library 'leaflet'."
  },
  {
    title: 'Tic-Tac-Toe',
    img: ticTacToePreview,
    link: 'https://github.com/MaxS713/tic-tac-toe/',
    tryLink: 'https://tic-tac-toe-omega-inky.vercel.app/',
    description: 'Tic-Tac-Toe game to practice simple React and web application principles.'
  },
  {
    title: 'React Chat',
    img: reactChatPreview,
    link: 'https://github.com/MaxS713/react-chat-maxs-jas/',
    tryLink: 'https://react-chat-maxs-jas.vercel.app/',
    description: 'A react chat app. Showcases the use of an express server and a MongoDB database.'
  },
  {
    title: 'Guess The Number',
    img: guessTheNumberPreview,
    link: 'https://github.com/MaxS713/guess-the-number-MaxS713/',
    description: 'A console program that has the computer guess a number you picked, or lets you guess a ' +
      'number the computer picked! Showcases basic JavaScript logic and operators.'
  },
]

export default function Projects() {
  return (
    <main>
      <div className="projects-box">
        <h1 className="box-title">Things I&apos;ve worked on...</h1>

        <div id="project-list">
          {projects.map((project) => (
            <div key={project.title} className="project-item">
              <h2><a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a></h2>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.img} alt={`Preview of ${project.title}`} />
              </a>
              {project.description.split('\n').map((textPart) => <p key={textPart}>{textPart}</p>)}
              {project.tryLink && <a href={project.tryLink} target="_blank" rel="noopener noreferrer">Try it here!</a>}
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

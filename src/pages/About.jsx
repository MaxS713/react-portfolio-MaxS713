import { useState } from 'react'

import { useInterval } from '../hooks/useInterval';

import profilePicture from "../assets/images/profile-picture.png";

import { msToTime } from '../utils';

import "./About.css";

export default function About() {
  const [currentTime, setCurrentTime] = useState(new Date() - 1655276400000);

  useInterval(() => setCurrentTime(currentTime + 1000), 1000)

  return (
    <main>
      <div className="info-box">
        <div id="about-me-header">
          <img src={profilePicture} alt="Max" />
          <h1 className="box-title">About Me</h1>
        </div>

        <div id="about-me-content">
          <p>Hello! My name is Maxime Soufer - call me Max.</p>

          <p>I currently have <span>{msToTime(currentTime)}</span> of software development experience.</p>

          <p>
            I enjoy coding and creating things that can improve quality of life for others. I have
            been interested in programming as long as I can remember. As a child, I was always tinkering
            and digging into how software functions. I would even code simple text-based games
            on my graphing calculator in high school for my friends to try out!
          </p>

          <p>
            I graduated from a program called Upright Education (a.k.a Burlington Code Academy)
            where I built knowledge in all things coding.
          </p>

          <p>
            AFK, you will find me taking care of my dog, cooking food, watching popular
            movies and tv shows, and playing music!
          </p>
        </div>
      </div>
    </main>
  );
}

import React from "react";
import linkedInIcon from "../images/linkedin-icon.png";
import githubIcon from "../images/github-icon.png";
import resumePDF from "../assets/my-resume.pdf"
import "./Footer.css"

export default function Footer() {
  return (

    // Footer layout
    <div id="footer">

    {/* Contact Me section */}
      <div id="contact-me-footer-section">
        <div id="contact-me-title">
          <h2>Contact Me</h2>
        </div>
        <div id="contact-me-footer-content">
          <div id="email">
            <h3>EMAIL</h3>
            <p>maxime.soufer@gmail.com</p>
          </div>
          <div id="tel">
            <h3>TELEPHONE</h3>
            <p>+1 (802) 310-4646</p>
          </div>
        </div>
      </div>
    
    {/* Social Icons Links */}
      <div id="social-icons">
        <a href="https://www.linkedin.com/in/maxime-soufer-510003163/">
          <img src={linkedInIcon} height="50vh" alt="linkedIn Icon" />
        </a>
        <a href="https://github.com/MaxS713">
          <img src={githubIcon} height="50vh" alt="GitHub Icon" />
        </a>
      </div>
    
    {/* Resume Download Button*/}
      <div id="resume-download">
      <a href={resumePDF} download><button>Download Resume</button></a>
      </div>

    </div>
  );
}

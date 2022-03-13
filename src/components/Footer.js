import React from "react";
import linkedInIcon from "../images/linkedin-icon.png";
import githubIcon from "../images/github-icon.png";

export default function Footer() {

  return (

    // Footer layout
    <div id="footer">

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
      <div id="social-icons">
      <a href=""><img src={linkedInIcon} height="50vh" alt="linkedIn Icon" /></a>
      <a href=""><img src={githubIcon} height="50vh" alt="GitHub Icon" /></a>
      </div>

    </div>
  );
}

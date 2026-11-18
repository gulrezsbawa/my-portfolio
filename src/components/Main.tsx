import "../assets/styles/Main.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <div className="avatar-placeholder" aria-label="Gulrez Bawa">
            GB
          </div>
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/gulrezsbawa/"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/gulrezbawa/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Gulrez Bawa</h1>
          <p className="resume-headline">
            Senior Software Engineer | Frontend Architecture | React &amp;
            TypeScript
          </p>
          <p className="resume-summary">
            Senior software engineer with 10+ years of experience delivering
            financial-services and SaaS applications. I bring staff-level
            technical leadership through architecture ownership, reusable
            engineering standards, performance and quality strategy, and
            cross-functional collaboration—while staying hands-on with React and
            TypeScript.
          </p>
          <div className="hero-contact">
            <span>Calgary, AB</span>
            <a href="https://gulrezbawa.com">gulrezbawa.com</a>
            <a href="tel:+18258897425">(825) 889-7425</a>
            <a href="mailto:bawagulrez@gmail.com">bawagulrez@gmail.com</a>
          </div>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/gulrezsbawa/"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/gulrezbawa/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

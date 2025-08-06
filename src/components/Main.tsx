import "../assets/styles/Main.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQEEzx4OvxjWGg/profile-displayphoto-shrink_800_800/B56Zdiqia3GQAg-/0/1749707008770?e=1757548800&v=beta&t=ZFbdKuOapGTCs5O4CxmLSnLeVXKdtpSxDINzPWxMW5s"
            alt="Avatar"
          />
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
          <p>Senior Software Engineer</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/yujisatojr"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/yujisato/"
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

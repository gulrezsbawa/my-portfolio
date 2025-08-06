import "../assets/styles/Footer.scss";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";

function Footer() {
  return (
    <footer>
      <div>
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
      <p>
        A portfolio designed & built by
        <a
          href="https://github.com/yujisatojr/react-portfolio-template"
          target="_blank"
          rel="noreferrer"
          style={{ paddingLeft: "0.25rem" }}
        >
          Gulrez Bawa
        </a>
      </p>
    </footer>
  );
}

export default Footer;

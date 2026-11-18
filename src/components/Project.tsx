import "../assets/styles/Project.scss";

import React from "react";
import alphaVestImage from "../assets/images/AplhaVest.png";
import taskboardImage from "../assets/images/Taskboard.png";

const projects = [
  {
    title: "Gulrez Bawa Portfolio",
    url: "https://gulrezbawa.com/",
    description:
      "My personal portfolio showcasing frontend architecture, senior engineering experience, technical leadership, and selected work.",
    label: "Portfolio",
  },
  {
    title: "AlphaVest",
    url: "https://invest.gulrezbawa.com/",
    description:
      "An investment dashboard with simulated market data, portfolio views, research tools, watchlists, and financial calculators.",
    label: "Investment dashboard",
    image: alphaVestImage,
  },
  {
    title: "Taskboard",
    url: "https://taskboard.gulrezbawa.com/",
    description:
      "A focused task management app for organizing work, priorities, due dates, project labels, and completed tasks.",
    label: "Task management app",
    image: taskboardImage,
  },
];

function Project() {
  return (
    <div className="projects-container" id="projects">
      <h1>Featured Work</h1>
      <p className="projects-intro">
        Live projects and digital products by Gulrez Bawa.
      </p>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project" key={project.url}>
            <div className="project-card">
              {project.image && (
                <a
                  className="project-image-link"
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="project-image"
                    src={project.image}
                    alt={`${project.title} project preview`}
                  />
                </a>
              )}
              <span className="project-label">{project.label}</span>
              <h2>
                <a href={project.url} target="_blank" rel="noreferrer">
                  {project.title}
                </a>
              </h2>
              <p>{project.description}</p>
              <a
                className="project-link"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                Visit site <span aria-hidden="true">↗</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Project;

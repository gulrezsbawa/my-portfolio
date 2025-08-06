import "@fortawesome/free-regular-svg-icons";
import "../assets/styles/Expertise.scss";

import {
  faDocker,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

import Chip from "@mui/material/Chip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Styled Components",
  "Material UI",
  "Bootstrap",
  "Storybook",
  "Chart.js",
  "Node.js",
  "GraphQL",
  "REST APIs",
  "Go",
  "gRPC",
  "Microsoft SQL Server",
  "PostgreSQL",
  "MySQL",
  "CosmosDB",
  "Postman",
];

const labelsSecond = [
  "Git",
  "GitHub",
  "GitHub Actions",
  "Azure",
  "Azure Service Bus",
  "Bicep (IaC)",
  "Docker",
  "AWS",
  "Linux",
  "Infrastructure as Code (IaC)",
  "Monorepo Architecture",
];

const labelsThird = [
  "DHTMLX Scheduler",
  "Luxon",
  "Google Calendar API",
  "Outlook API",
  "Calendar Integrations",
  "Time Zone Handling",
  "Cross-Timezone Scheduling",
  "Date/Time APIs",
  "Localization",
  "Internationalization (i18n)",
  "React",
  "TypeScript",
  "API Integration",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Building Scalable Web Applications</h3>
            <p>
              I have built scalable web applications from the ground up,
              delivering high-performance, user-friendly, and mobile-friendly
              solutions that drive results. I have a strong proficiency in the
              SDLC process, delivering both frontend and backend solutions with
              a focus on performance, usability, and maintainability.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Automating Delivery & Cloud Operations</h3>
            <p>
              I design and implement cloud-native infrastructure and automated
              delivery pipelines that enable faster, more reliable releases.
              Leveraging tools like Azure, Docker, Bicep (IaC), and Azure
              Service Bus, I streamline deployments, ensure environment
              consistency, and improve scalability while reducing manual
              overhead.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Global-Ready Applications & Timezone Management</h3>
            <p>
              Designing applications that handle complex timezone logic and
              international scheduling with precision, ensuring consistent
              functionality for users worldwide.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;

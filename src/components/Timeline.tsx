import "@fortawesome/free-regular-svg-icons";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid white" }}
            date="Aug 2025 - Present"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Software Developer @ Synechron
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Calgary, Canada · Client: Morgan Stanley Wealth Management Canada
            </h4>
            <ul>
              <li>
                Own frontend architecture for financial-market applications,
                shaping React and TypeScript standards for complex analytics and
                data-intensive workflows.
              </li>
              <li>
                Design modular, reusable components and improve responsiveness
                with Apollo Client caching, code splitting, lazy loading, and
                rendering optimization.
              </li>
              <li>
                Apply MCP servers, AI agents, custom instructions, and reusable
                skills to support consistent implementation practices.
              </li>
              <li>
                Drive shift-left quality with agent-generated Cucumber BDD
                tests, Jira/Xray linkage and upload, test audits, coverage
                reviews, and reporting.
              </li>
              <li>
                Partner with Product, Backend, QA, DevOps, and Security on
                accessibility, technical decisions, delivery controls, and code
                reviews.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Sep 2023 - Aug 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer @ LodgeLink
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Calgary, Alberta
            </h4>
            <ul>
              <li>
                Led modular frontend architecture for a large-scale,
                event-driven ERP platform, owning product modules from
                requirements through rollout and production optimization.
              </li>
              <li>
                Built reusable UI patterns and a shared design system,
                contributing to approximately 40% faster feature delivery.
              </li>
              <li>
                Standardized data fetching and caching, contributing to
                approximately 30% improvement in operational efficiency.
              </li>
              <li>
                Coordinated package governance, dependency upgrades, and
                vulnerability remediation with Backend and Product partners.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2021 - Sep 2023"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Frontend Engineer @ Jifflenow
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bengaluru, India
            </h4>
            <ul>
              <li>
                Designed and owned scalable frontend modules for high-traffic
                B2B scheduling products; supported migration toward monorepo and
                modular architecture.
              </li>
              <li>
                Improved rendering with virtualization and reusable UI patterns
                while promoting accessibility and consistent review practices.
              </li>
              <li>
                Partnered with Product and Backend to align API contracts,
                implementation choices, and end-user workflows.
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Feb 2016 - May 2021"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Senior Software Engineer @ Siemens
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bengaluru, India
            </h4>
            <ul>
              <li>
                Delivered enterprise Finance, Audit, Training, reporting, and
                asset-management applications, including secure role-based
                dashboards and API-integrated workflows.
              </li>
              <li>
                Modernized legacy interfaces with React, improving application
                performance by approximately 50%.
              </li>
              <li>
                Collaborated on backend API contracts and data models; received
                multiple Instant Puraskar Awards for innovation and delivery.
              </li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;

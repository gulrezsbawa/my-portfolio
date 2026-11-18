import "@fortawesome/free-regular-svg-icons";
import "../assets/styles/Expertise.scss";

import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faLayerGroup, faRobot } from "@fortawesome/free-solid-svg-icons";

import Chip from "@mui/material/Chip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "Next.js",
  "Tailwind CSS",
  "React Hook Form",
  "Zod",
  "GraphQL / Apollo Client",
  "React Query",
  "HTML / CSS",
];

const labelsSecond = [
  "Modular Frontend Architecture",
  "Design Systems",
  "Figma",
  "Campfire Design",
  "Accessibility (WCAG / ARIA)",
  "Caching",
  "Code Splitting",
  "Lazy Loading",
  "Rendering Performance",
  "API Integration",
  "GraphQL / REST",
];

const labelsThird = [
  "MCP Servers",
  "AI Agents",
  "Custom Agent Instructions",
  "Reusable Agent Skills",
  "Cucumber BDD",
  "Jira / Xray",
  "Playwright",
  "Shift-Left Testing",
  "Git / GitHub",
  "Docker",
  "Azure",
  "CI/CD",
  "PostgreSQL (working knowledge)",
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
              I deliver complex, data-intensive SaaS and financial-services
              workflows with React and TypeScript. I focus on predictable
              component patterns, clear API integration, accessibility, and
              maintainable frontends that can evolve with product needs.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faLayerGroup} size="3x" />
            <h3>Frontend Architecture & Design Systems</h3>
            <p>
              I build modular frontend architectures and reusable design systems
              that make complex products easier to maintain and evolve. My work
              emphasizes accessible interfaces, clear API contracts, efficient
              data fetching, and responsive rendering.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faRobot} size="3x" />
            <h3>AI-Assisted Engineering & Shift-Left Quality</h3>
            <p>
              I use MCP-enabled agents and reusable engineering guidance to
              support consistent implementation. I bring quality checks earlier
              with generated BDD scenarios, Jira/Xray traceability, test audits,
              and reporting.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
        <section
          className="leadership-section"
          aria-labelledby="leadership-heading"
        >
          <p className="leadership-eyebrow">ENGINEERING LEADERSHIP</p>
          <h2 id="leadership-heading">Staff-level scope, measurable impact</h2>
          <p className="leadership-intro">
            I lead beyond individual feature delivery—owning frontend direction,
            raising shared engineering standards, and aligning Product, Backend,
            QA, DevOps, and Security around quality and sustainable delivery.
          </p>
          <div className="impact-metrics">
            <article className="impact-metric">
              <strong>~40%</strong>
              <span>
                faster feature delivery through reusable UI and standardization
              </span>
              <small>LodgeLink</small>
            </article>
            <article className="impact-metric">
              <strong>~30%</strong>
              <span>
                operational efficiency improvement through data-fetching
                standards
              </span>
              <small>LodgeLink</small>
            </article>
            <article className="impact-metric">
              <strong>~50%</strong>
              <span>performance improvement from React modernization</span>
              <small>Siemens</small>
            </article>
          </div>
          <div className="leadership-grid">
            <article className="leadership-card">
              <h3>Architecture ownership</h3>
              <p>
                Set frontend direction for financial-market products, shaping
                modular, reusable patterns and UI standards with long-term
                maintainability in mind.
              </p>
            </article>
            <article className="leadership-card">
              <h3>Developer leverage</h3>
              <p>
                Standardize shared components, design-system practices, data
                fetching, and performance techniques so teams can ship features
                more consistently.
              </p>
            </article>
            <article className="leadership-card">
              <h3>Quality strategy</h3>
              <p>
                Move quality earlier with agent-assisted Cucumber BDD
                generation, Jira/Xray traceability, test audits, coverage
                reviews, and reporting.
              </p>
            </article>
            <article className="leadership-card">
              <h3>Cross-functional influence</h3>
              <p>
                Partner across Product, Backend, QA, DevOps, and Security on
                technical decisions, accessibility, delivery controls, and
                code-review standards.
              </p>
            </article>
          </div>
        </section>
        <div className="education-summary">
          <h2>Education &amp; Certification</h2>
          <p>
            Master of Computer Applications (MCA), Thapar University · Bachelor
            of Computer Applications (BCA)
          </p>
          <p>Microsoft Azure Fundamentals (AZ-900), 2025</p>
        </div>
      </div>
    </div>
  );
}

export default Expertise;

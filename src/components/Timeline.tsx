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
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="Sep 2023 - Aug 2025"
            iconStyle={{ background: "#5000ca", color: "rgb(39, 40, 34)" }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Engineer @ Lodgelink
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Calgary, Alberta
            </h4>
            <p>
              Full Stack Web Development · Booking Management · Chargesheet
              Generation · Reconciliation Process
            </p>
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
            <p>
              Frontend Development · Interactive Scheduling Tools · Calendar &
              Timezone Management · Salesforce Integration · Outlook Plugin
              Integration
            </p>
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
            <p>
              Full Stack Development · Department-Specific Web Solutions ·
              Workflow Automation · Data Reporting & Audit Trail Management
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;

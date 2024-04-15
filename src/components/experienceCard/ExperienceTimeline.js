import React, { Component } from 'react';
import { ReactComponent as WorkIcon } from "./work.svg"

import { experience2 } from "../../portfolio.js";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
  
import './ExperienceCard.css';

class ExperienceTimeline extends Component {
  render() {
    let workIconStyles = { background: "#85b7d6" };
    const theme = this.props.theme;
    return (
      <div className='main' id="work_experience">
        <center><h1 className="title">Work Experience</h1></center>
        <VerticalTimeline>
          {experience2.map((element) => {
            let isWorkIcon = element.icon === "work";
            let showButton =
              element.buttonText !== undefined &&
              element.buttonText !== null &&
              element.buttonText !== "";
  
            return (
                
              <VerticalTimelineElement
                // key={element.key}
                date={element.date}
                dateClassName="date"
                iconStyle= {workIconStyles}
                icon= {<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">
                {element.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  @<a
                  href={element.website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.text, textDecoration: 'underline' }}
                >{element.company}<svg height="16" viewBox="0 0 16 16" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m5 2c.55228 0 1 .44772 1 1s-.44772 1-1 1h-1v8h8v-1c0-.5523.4477-1 1-1s1 .4477 1 1v1c0 1.1046-.8954 2-2 2h-8c-1.10457 0-2-.8954-2-2v-8c0-1.10457.89543-2 2-2zm10-1v4.99814453c0 .55229-.4477 1-1 1s-1-.44771-1-1v-1.58395453l-4.28429 4.28427c-.39052.39053-1.02369.39053-1.41421 0-.39053-.39052-.39053-1.02369 0-1.41421l4.2843-4.28425h-1.58960859c-.55228 0-1-.44772-1-1s.44772-1 1-1z" fill-rule="evenodd"/></svg>
                </a> <i style={{color: "#4f658d"}}>{element.location}</i>
                </h5>
                <h5 className="vertical-timeline-element-subtitle">
                
                </h5>
                <p id="description">{element.description}</p>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    );
  }
}

export default ExperienceTimeline;

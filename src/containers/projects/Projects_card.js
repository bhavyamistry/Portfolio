import React, { Component } from "react";
import "./Project_card.css";
import { Fade } from "react-reveal";
import { projects } from "../../portfolio";
import ProjectCard from "../../components/projectCard/ProjectCard";

class Project_card extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="main" id="projects">
        <div className="certs-header-div">
          <Fade bottom duration={2000} distance="20px">
            <h1 className="certs-header" style={{ color: theme.text }}>
              Projects
            </h1>
          </Fade>
        </div>
        <div className="certs-body-div">
          {projects.projects.map((project) => {
            return <ProjectCard projects={project} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Project_card;

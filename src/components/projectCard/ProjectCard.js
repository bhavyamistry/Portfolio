import React, { Component } from "react";
import "./ProjectCard.css";
import { Fade } from "react-reveal";

class ProjectCard extends Component {
  render() {
    const project = this.props.projects;
    const theme = this.props.theme;
    return (
      <Fade bottom duration={2000} distance="20px">
        <div className="cert-card">
          <div className="content">
            <a
              href={project.certificate_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="content-overlay"></div>
              <div
                className="cert-header"
                style={{ backgroundColor: project.color_code }}
              >
                <img
                  className="logo_img"
                  src={require(`../../assests/images/${project.logo_path}`)}
                  alt={project.alt_name}
                  style={{ height: '200px' }}
                />
              </div>
              <div className="content-details fadeIn-top">
                <h3 className="content-title" style={{ color: theme.body }}>
                  Details
                </h3>
              </div>
            </a>
          </div>
          <div className="cert-body">
            <h2 className="cert-body-title" style={{ color: theme.text }}>
              {project.title}
            </h2>
            <h5
              className="cert-body-subtitle"
              style={{ color: theme.secondaryText }}
            >
              {project.desc}
            </h5>
          </div>
        </div>
      </Fade>
    );
  }
}

export default ProjectCard;

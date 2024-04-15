import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                  onClick={() => {
                    const skillDiv = document.getElementById('skills');
                    if (skillDiv) {
                      setTimeout(() => {
                        skillDiv.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                      }, 100);
                    }
                  }}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                  onClick={() => {
                    const educationDiv = document.getElementById('educations');
                    if (educationDiv) {
                      setTimeout(() => {
                        educationDiv.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                      }, 100);
                    }
                  }}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                  onClick={() => {
                    const certsDiv = document.getElementById('certs');
                    if (certsDiv) {
                      setTimeout(() => {
                        certsDiv.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                      }, 100);
                    }
                  }}
                >
                  Achievements
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                  onClick={() => {
                    const workexpDiv = document.getElementById('work_experience');
                    if (workexpDiv) {
                      setTimeout(() => {
                        workexpDiv.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                      }, 100);
                    }
                  }}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                  onClick={() => {
                    const projectDiv = document.getElementById('projects');
                    if (projectDiv) {
                      setTimeout(() => {
                        projectDiv.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                      }, 100);
                    }
                  }}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="#"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) => onMouseEnter(event, theme.highlight)}
                  onMouseOut={(event) => onMouseOut(event)}
                  onClick={() => {
                    const publicationDiv = document.getElementById('publications');
                    if (publicationDiv) {
                      setTimeout(() => {
                        publicationDiv.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
                      }, 100);
                    }
                  }}
                >
                  Publications
                </NavLink>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;

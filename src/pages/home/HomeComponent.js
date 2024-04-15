import React, { Component } from "react";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";
import Educations from "../../containers/education/Educations";
import TopButton from "../../components/topButton/TopButton";
import Certifications from "../../containers/certifications/Certifications";
import Project_card from "../../containers/projects/Projects_card.js";
import PublicationCard from "../../components/publicationsCard/PublicationCard";
import { certifications, projects, publications, publicationsHeader } from "../../portfolio";
import ExperienceTimeline from "../../components/experienceCard/ExperienceTimeline.js";

class Home extends Component {
  render() {
    return (
      <div>
        <Header theme={this.props.theme} />
        <Greeting theme={this.props.theme} />
        <Skills theme={this.props.theme} />
        <Educations theme={this.props.theme} />
        {certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null}
        <ExperienceTimeline theme={this.props.theme} />
        {projects.projects.length > 0 ? (
            <Project_card theme={this.props.theme} />
          ) : null}
        {publications.data.length > 0 ? (
          <div className="main basic-projects" id="publications">
            <div className="publications-heading-div">
              <div className="publications-heading-text-div">
                <h1
                  className="publications-heading-text"
                  style={{ color: this.props.theme.text }}
                >
                  {publicationsHeader.title}
                </h1>
                <h2
                  style={{ color: this.props.theme.secondaryText }}
                >
                  {publicationsHeader["description"]}
                </h2>
              </div>
            </div>
          </div>
        ) : null}
        <div className="repo-cards-div-main" style={{marginTop: '0.2rem'}}>
          {publications.data.map((pub) => {
            return <PublicationCard pub={pub} theme={this.props.theme} />;
          })}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Home;

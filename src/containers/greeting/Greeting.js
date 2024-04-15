import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import Typewriter from "typewriter-effect"

export default function Greeting(props) {
  const theme = props.theme;
  const strings = [
    "I'm a Computer Science Graduate",
    "I'm an Aspiring Software Engineer",
    "I'm a Full Stack Developer",
    "I'm a Backend Engineer",
  ];
  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <center>  
                <h2 className="greeting-text" style={{ color: theme.text, fontSize: '2.8rem', marginTop: '1rem' }}>
                👋 Hello, I'm {greeting.title}!
                </h2>
              </center>
                <center><h2 className="greeting-nickname" style={{ color: theme.text}}>
                  <Typewriter
                    options={{
                      strings: strings,
                      autoStart: true,
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(1000)
                        .deleteAll()
                        .callFunction(() => {
                          strings.forEach((string, index) => {
                            typewriter.typeString(string).pauseFor(1000).deleteAll();
                            if (index !== strings.length - 1) {
                              typewriter.callFunction(() => {
                                typewriter.start(); // Start next iteration
                              });
                            }
                          });
                        });
                    }}
                    wrapperClassName="typewriter-wrapper"
                  />
                </h2>
                </center>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.greeting, fontSize: '2rem', marginTop: '50px', textAlign:'center'}}
              >
                Problem Solver, tech-Agnostic, quick learner, adaptable, and a dedicated team player. Skilled professional with diverse experience working in the USA and India, a patent Holder, AWS Certified, seeking Full-Time opportunities starting from June 2024.

              </p>
              <center><SocialMedia theme={theme} /></center>
              <div className="button-row">
                <button className="both_btn" onClick={() => window.location.href = 'https://github.com/bhavyamistry/Portfolio'}>⭐ Star Me On Github</button>
                <button className="both_btn" onClick={() => window.location.href = 'https://drive.google.com/file/d/1_yl71ZgEE6zB43VftX2aP0eBGYe6auw5/view?usp=share_link'}>See My Resume 📄</button>
              </div>
              {/* <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
            </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            <center>
            <img
							alt="sad sitting on table"
							src={require("../../assests/images/Profile2.gif")}
              width={"100%"}
						></img>
            </center>
            {/* <FeelingProud theme={theme} /> */}
          </div>
        </div>
      </div>
    </Fade>
  );
}

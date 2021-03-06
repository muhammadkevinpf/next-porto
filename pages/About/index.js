import React, { Component } from "react";
import { Container, Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { MdGetApp } from "react-icons/md";
import HTML5 from "@images/logo/html5.svg";
import CSS3 from "@images/logo/css-3.svg";
import Javascript from "@images/logo/javascript.svg";
import Jquery from "@images/logo/jquery.png";
import Bootstrap from "@images/logo/bootstrap.png";
import PHP from "@images/logo/php.svg";
import Codeigniter from "@images/logo/codeigniter.png";
import Reactjs from "@images/logo/logo192.png";
import Firebase from "@images/logo/firebase.svg";
import Express from "@images/logo/express.svg";
import ProfilePhoto from "@images/profile.png";
import CV from "../../assets/file/CV_MuhammadKevin.pdf";

import "./style.scss";

const skills = [
  {
    text: "HTML5",
    image: HTML5,
    rate: "Intermediate",
  },
  {
    text: "CSS3",
    image: CSS3,
    rate: "Intermediate",
  },
  {
    text: "Javascript",
    image: Javascript,
    rate: "Intermediate",
  },
  {
    text: "JQuery",
    image: Jquery,
    rate: "Intermediate",
  },
  {
    text: "Bootstrap",
    image: Bootstrap,
    rate: "Intermediate",
  },
  {
    text: "PHP",
    image: PHP,
    rate: "Intermediate",
  },
  {
    text: "Codeigniter",
    image: Codeigniter,
    rate: "Basic",
  },
  {
    text: "React.js",
    image: Reactjs,
    rate: "Basic",
  },
  {
    text: "Firebase",
    image: Firebase,
    rate: "Basic",
  },
  {
    text: "Express.js",
    image: Express,
    rate: "Basic",
  },
];

class About extends Component {
  render() {
    return (
      <div id="about">
        <Container>
          <Row className="about-section-row">
            <Col lg={4} md={6} className="about-explanation mb-5">
              <h3 className="text-center headline font-weight-bold">
                About Me
              </h3>
              <p id="about-paragraph">
                Hi, I'm Kevin. I'm a Web Developer based in Bandung. Really like
                Front-end development because I can see first hand what I'm
                working on, but beside that I enjoyed to do in back end too
                because the satisfaction of solving problems is what drives me
                to be a better programmer.
              </p>
              <div className="text-center">
                <a href={CV} target="_blank" download rel="noopener noreferrer">
                  <button type="button" className="btn-cv btn-block">
                    Resume &nbsp;
                    <MdGetApp />
                  </button>
                </a>
              </div>
            </Col>
            <Col lg={4} className="d-sm-none d-md-none d-lg-block div-profile">
              <div className="text-center">
                <img src={ProfilePhoto} className="img-profile" alt="profile" />
              </div>
            </Col>

            <Col lg={4} md={6} className="mb-3 about-skills">
              <h3 className="text-center about-headline font-weight-bold">
                Skills
              </h3>
              <Row className="text-center">
                {skills.map((skill) => (
                  <OverlayTrigger
                    key={skill.text}
                    placement="top"
                    overlay={<Tooltip id={skill.text}>{skill.rate}</Tooltip>}
                  >
                    <Col lg={3} md={3} sm={3} xs={4}>
                      <img
                        src={skill.image}
                        className="icon-skills"
                        alt={skill.text}
                      />
                      <br />
                      <small>{skill.text}</small>
                    </Col>
                  </OverlayTrigger>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;

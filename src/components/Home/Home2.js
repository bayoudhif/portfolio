import React from "react";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am Computers Systems Engineering Bachelor student  <span className="purple"> (IoT and embedded Systems). </span>
              <br />
              <br /> I am finishing up my degree at<i>
                <b className="purple"> University of Sousse, Higher Institute of Computer Science and Communication Technologies of Hammam Sousse,Tunisia. </b>
              </i> , where I have learned how to apply critical thinking and problem-solving strategies to today’s complex problems.

              <br />
              <br />
              I have a passion for innovation and a desire to use technology to solve real-world problems. I am always seeking out new opportunities to learn and grow, and am excited to work on projects that have a positive impact on society. &nbsp;

              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME <span className="purple">ON </span></h1>

            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/bayoudhif"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://tn.linkedin.com/in/bayoudhi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/bayoudhi.f/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

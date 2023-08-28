import React from "react";
import laptopImg from "../../Assets/about.png";
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
              <span className="purple"> KNOW WHO </span> I'M
            </h1>
            <p className="home-about-body">
            Hi Everyone, I am  <span className="purple">Firas Bayoudhi</span> from &nbsp; 
              <span className="purple">Tunisia, and Currently resident in Brussels.</span> <br />  <br />I am a junior <span className="purple">IoT Developer.</span>
            <br />
            <br />
            Apart from IoT, I am passionate about <span className="purple">Web Development</span>  and <span className="purple">Artificial Intelligence.</span>
            </p>
            <p style={{ color: "#5e87f5" }}>
            "Success is often achieved by those who don’t know that failure is inevitable."{" "}
          </p>
            <footer className="blockquote-footer">Coco Chanel, fashion designer</footer>

          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={laptopImg} className="img-fluid" alt="avatar" />
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

import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
<Card className="quote-card-view">
  <Card.Body>
    <p className="home-about-body">
      I am a Junior <span className="purple">Internet of Things (IoT)</span> Developer with a strong foundation in embedded systems and connected technologies.
      <br />
      <br />
      I hold a Bachelor's degree in <b className="purple">Computer Systems Engineering from the University of Sousse, Tunisia</b>, where I developed solid problem-solving skills and technical expertise to address complex technology challenges.
      <br />
      <br />
      Currently, I am completing my Master's in <span className="purple">Applied Sciences and Engineering: Applied Computer Science at Vrije Universiteit Brussel (VUB)</span>, specializing in Smart Cities. This advanced academic path reflects my commitment to innovative solutions in modern computing and urban technologies.
      <br />
      <br />
      I am passionate about leveraging technology to solve real-world problems, always seeking new learning opportunities, and working on projects that drive meaningful impact and innovation.
    </p>
  </Card.Body>
</Card>
  );
}

export default AboutCard;

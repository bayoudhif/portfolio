import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <p className="home-about-body">
              I am a Junior IoT  <span className="purple"> (Internet Of Things) </span> developer.
              <br />
              <br /> I earned my Bachelor's degree<i>
                <b className="purple"> in Computer Systems Engineering from the Higher Institute of Computer Sciences and Telecommunication Technologies (ISITCOM),  </b>
              </i> , where I honed my ability to apply critical thinking and problem-solving strategies to tackle the intricate challenges of today's technology landscape.
<br/>
<br/>

Currently, I am on the verge of completing my master's degree in <span className="purple">Applied Computer Sciences at Vrije Universiteit Brussel VUB</span> , reflecting my dedication to a comprehensive education in the field. This journey signifies my commitment to becoming a proficient professional in the realm of computer science.
              <br />
              <br />
              I have a passion for innovation and a desire to use technology to solve real-world problems. I am always seeking out new opportunities to learn and grow, and am excited to work on projects that have a positive impact on society. &nbsp;

              <br />
            </p>



      </Card.Body>
    </Card>
  );
}

export default AboutCard;

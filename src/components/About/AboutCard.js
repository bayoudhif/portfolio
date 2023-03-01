import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Firas Bayoudhi </span>
            from <span className="purple"> Sousse,Tunisia.</span>
            <br />I am a junior IoT Developer.
            <br />
            Apart from IoT, I am passionate about Web Development and Artificial Intelligence.
          </p>
          <p style={{ color: "#5e87f5" }}>
            "Success is often achieved by those who don’t know that failure is inevitable."{" "}
          </p>
          <footer className="blockquote-footer">Coco Chanel, fashion designer</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

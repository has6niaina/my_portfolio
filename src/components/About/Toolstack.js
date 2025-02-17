import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiAdobephotoshop,
  SiUbuntu,
  SiXampp,
  SiJsonwebtokens,
  SiDebian,
  SiMicrosoft
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiUbuntu />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJsonwebtokens />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDebian />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoft />
      </Col>
    </Row>
  );
}

export default Toolstack;

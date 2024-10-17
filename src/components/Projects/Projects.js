import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import comming from "../../Assets/Projects/encours.jpg";
import HOtelWP from "../../Assets/Projects/hotelWP.jpg";
import mid from "../../Assets/Projects/mid.png";
import blogy from "../../Assets/Projects/blogy.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My latest <strong className="purple">projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some projects I have recently worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
         {/*   <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mid}
              title="Firearm Census"
              description="Dynamic web application for the census of firearms in Madagascar 
              (Ministry of Interior and Decentralization)."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogy}
              isBlog={false}
              title="Mini Blog"
              description="This project is a mini-blog coded using ReactJS, designed to facilitate testing of requests and interactions with a simple JSON file."
              ghLink="https://github.com/has6niaina/mini-blog-ReactJS.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HOtelWP}
              isBlog={false}
              title="Hotel Booking Application on WordPress"
              description="This project is a hotel booking application designed on WordPress. The application offers a comprehensive and user-friendly solution to allow users to book hotel rooms online easily and efficiently."
              ghLink="https://github.com/has6niaina/Gestion-reservation-Hotel-Wordpress.git"
            />
          </Col>*/}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comming}
              isBlog={false}
              title="Will be deployed on GitHub soon"
            /**description="In progress"*/
              ghLink="https://github.com/has6niaina/Projet-en-local-encours.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comming}
              isBlog={false}
              title="Will be deployed on GitHub soon"
            /**description="In progress"*/
              ghLink="https://github.com/has6niaina/Projet-en-local-encours.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comming}
              isBlog={false}
              title="Will be deployed on GitHub soon"
            /**description="In progress"*/
              ghLink="https://github.com/has6niaina/Projet-en-local-encours.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

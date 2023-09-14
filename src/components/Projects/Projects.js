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
          Mes derniers <strong className="purple">projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici quelques projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mid}
              title="Recensement d'arme à feu"
              description="Application web dynamique de recensement d'arme à feu à Madagascar 
              (Ministere de l'Interieur et de la Décentralisation)."
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogy}
              isBlog={false}
              title="Petit Blog"
              description="Ce projet est un mini-blog codé en utilisant ReactJS, conçu pour faciliter les tests de requêtes et les interactions avec un simple fichier JSON."
              ghLink="https://github.com/has6niaina/mini-blog-ReactJS.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HOtelWP}
              isBlog={false}
              title="Application de Réservation d'Hôtel sur WordPress"
              description="Ce projet est une application de réservation d'hôtel conçue sur WordPress. L'application offre une solution complète et conviviale pour permettre aux utilisateurs de réserver des chambres d'hôtel en ligne de manière simple et efficace."
              ghLink="https://github.com/has6niaina/Gestion-reservation-Hotel-Wordpress.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={comming}
              isBlog={false}
              title="Encours de déployement dans github"
              description="Encours"
              ghLink="https://github.com/has6niaina/Projet-en-local-encours.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

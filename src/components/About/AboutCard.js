import React from "react";
import Card from "react-bootstrap/Card";
import { MdLocalActivity } from "react-icons/md";

function AboutCard() {
  /* const linkStyle = {
  color: "inherit",
  text-decoration: "none";
  };*/
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello World, Je suis
            <span className="purple"> Tojonirina Hasiniaina Elie ... , </span>
            d' origine <span className="purple"> Malagasy.</span>
            <br /> 3e année en Informatique de Gestion à l'université
            <span className="purple">
              <a href="https://www.isinfo.mg" className="no-style-link">
                {" "}
                IS-INFO{" "}
              </a>
            </span>
            Ampasamadinika .
            <br />
            J'ai eu l'opportunité de participer à quelques formations dans le
            monde numerique sur le Framework
            <span className="purple"> Laravel </span> et{" "}
            <span className="purple">
              {" "}
              l'initiation professionnalisante en IA{" "}
            </span>
            co-construite avec<span className="purple"> SmartOne </span> chez
            Orange Digital Center (Analyse, Qualification, Traitement d'Images,
            ...) <br />
            <br />
            En dehors de la programmation, certaines autres activités que
            j'adore faire:
          </p>
          <ul>
            <li className="about-activity">
              <MdLocalActivity style={{ marginBottom: "2px" }} />{" "}
              PhonoGraphie
            </li>
            <li className="about-activity">
              <MdLocalActivity /> Apprentissage de l'allemand
            </li>
            <li className="about-activity">
              <MdLocalActivity /> Voyage
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

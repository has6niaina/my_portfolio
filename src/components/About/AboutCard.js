import React from "react";
import Card from "react-bootstrap/Card";
import { MdLocalActivity } from "react-icons/md";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, World! My name is{" "}
            <span className="purple">Tojonirina Hasiniaina Elie</span>, and I am
            originally from <span className="purple">Madagascar</span>.
            <br />
            I hold a Bachelor's Degree in Computer Science, specializing in{" "}
            <span className="purple">Management Information Systems</span>, 
            from the{" "}
            <span className="purple">
              <a href="https://www.isinfo.mg" className="no-style-link">
                Institut Supérieur d'Informatique (IS-INFO)
              </a>
            </span>
            , where I graduated with distinction.
            <br />
            My academic journey and practical experiences have equipped me with 
            strong skills in programming, IT management, and data processing.
            <br />
            Additionally, I’ve participated in specialized training programs, including:
            <ul>
              <li>
                <span className="purple">Laravel Framework</span>: Developing web applications.
              </li>
              <li>
                An introduction to{" "}
                <span className="purple">Artificial Intelligence</span>: Focusing on analysis, 
                image processing, and AI principles at the{" "}
                <span className="purple">Orange Digital Center</span>.
              </li>
            </ul>
            <br />
            When I’m not coding, I enjoy indulging in a few other passions:
          </p>
          <ul>
            <li className="about-activity">
              <MdLocalActivity style={{ marginBottom: "2px" }} /> Photography
            </li>
            <li className="about-activity">
              <MdLocalActivity /> Cooking
            </li>
            <li className="about-activity">
              <MdLocalActivity /> Traveling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

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
            Hello World, I am
            <span className="purple"> Tojonirina Hasiniaina Elie ... , </span>
            originally from <span className="purple"> Madagascar.</span>
            <br /> 3rd year student in Management Information Systems at
            <span className="purple">
              <a href="https://www.isinfo.mg" className="no-style-link">
                {" "}
                IS-INFO{" "}
              </a>
            </span>
            Ampasamadinika.
            <br />
            I had the opportunity to participate in several training programs
            in the digital world, including the framework
            <span className="purple"> Laravel </span> and{" "}
            <span className="purple">
              {" "}
              a professional initiation in AI{" "}
            </span>
            co-constructed with<span className="purple"> SmartOne </span> at
            Orange Digital Center (Analysis, Qualification, Image Processing,
            etc.) <br />
            <br />
            Besides programming, some other activities that I love to do:
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

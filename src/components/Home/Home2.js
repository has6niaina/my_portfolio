import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              SAVOIR PLUS SUR <span className="purple"> MOI </span>
            </h1>
            <p className="home-about-body">
              Un jeune passioné par l'univers numerique et en particulier , le
              developpement web.
              <br /> Au cours de mon parcours, je me suis specialisé sur le
              developpement BackEnd
              <i>
                <b className="purple"> PHP </b>
              </i>
              avec le Framework
              <i>
                <b className="purple"> Symfony et Laravel </b>
              </i>
              et du
              <i>
                <b className="purple"> Python </b>
              </i>
              avec le Framework
              <i>
                <b className="purple"> Django </b> , et un peu de
                <i>
                  <b className="purple"> NodeJs. </b>
                </i>
              </i>
              <br />
              <br />
              Mes formations m'ont amené à utiliser d'autres technologies tel
              que , du
              <i>
                <b className="purple"> Javascript </b>
              </i>
              en utilisant la librairie
              <i>
                <b className="purple"> ReactJs </b>
              </i>
              ainsi des differents outils de developpement.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ-MOI ICI</h1>
            <p>
              Pour me<span className="purple"> contacter </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/has6niaina"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>{" "}
              <li className="social-icons">
                <a
                  href="https://facebook.com/tnr.has6niaina"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/has6niana?s=21"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/has6niaina"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/has6niaina"
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

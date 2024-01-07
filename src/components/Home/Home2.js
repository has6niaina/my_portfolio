import React, { useState, useRef } from "react";
import "../../style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,s
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import ContactMe from "../Contact/ContactMe";

function Home2() {
  const [showModal, setShowModal] = useState(false);

  const toggleShow = () => {
    setShowModal(true);
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <ToastContainer />
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
            <h1>
              TROUVEZ-MOI <span className="purple"> ICI </span>
            </h1>

            <Button className="p-3 mt-3" onClick={toggleShow} id="liveToastBtn">
              Contactez-moi
            </Button>
            <ContactMe  showModal={showModal} handleClose={() => setShowModal(false)} />
            <br />
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://facebook.com/tnr.hasiniaina"
                  target="_blank"
                  rel="noreferrer"
                  t
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/has6niaina?s=21"
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
                  href="https://www.instagram.com/tnr.hasiniaina"
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

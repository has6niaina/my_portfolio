import React, { useState } from "react";
import "../../style.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
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
              KNOW MORE ABOUT <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              A young enthusiast of the digital world, especially web
              development.
              <br /> Throughout my journey, I have specialized in BackEnd
              development with
              <i>
                <a className="purple links" href="https://www.php.net/" target="_blank"> PHP </a>
              </i>
              using frameworks like
              <i>
                <a className="purple links" href="https://symfony.com/" target="_blank"> Symfony </a>
              </i> and 
                <i> 
                  <a className="purple links" href="https://laravel.com/" target="_blank"> Laravel </a>
                </i > ,
              <i>  
                <a className="purple links" href="https://www.python.org/" target="_blank"> Python </a>
              </i>
              using the
              <i>
                <a className="purple links" href="https://www.djangoproject.com/" target="_blank"> Django </a>
                <b className="purple">  </b> framework, along with some
                experience in
                <i>
                  <a className="purple links" href="https://nodejs.org/" target="_blank"> NodeJs </a> .
                </i>
              </i>
              <br />
              <br />
              My training has led me to work with other technologies such as
              <i>
                <b className="purple"> Javascript </b>
              </i>
              using the
              <i> <a className="purple links" href="https://react.dev/" target="_blank"> ReactJs </a>
              </i>
              library, along with various development tools.
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
              FIND ME <span className="purple"> HERE </span>
            </h1>

            <Button className="p-3 mt-3" onClick={toggleShow} id="liveToastBtn">
              Contact Me
            </Button>
            <ContactMe
              showModal={showModal}
              handleClose={() => setShowModal(false)}
            />
            <br />
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://facebook.com/tnr.hasiniaina"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillFacebook />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://linkedin.com/in/tnrhasiniaina"
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


import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Developer",
          "Javascript - ReactJs",
          "PHP - Symfony",
          "BackEnd - FrontEnd Developer",
          "UI/UX",
          "Python",
          "Networking Enthusiast",
          "IT Helpdesk",
          "IT Maintenance",
          "Software - Hardware Troubleshooting",
          "System Administration",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

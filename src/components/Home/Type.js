import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Développeur Web",
          "Javascript - ReactJs",
          "PHP - Symfony",
          "Python - Django",
          "BackEnd - FrondEnd Développeur",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

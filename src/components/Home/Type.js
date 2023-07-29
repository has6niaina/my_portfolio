import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Developpeur Web",
          "Javascript - ReactJs",
          "PHP - Symfony",
          "PHP - Laravel",
          "BackEnd - FrondEnd Developpeur",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;

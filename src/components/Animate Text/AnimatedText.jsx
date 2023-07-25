import React, { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";

const AnimatedLetter = ({ letter, delay }) => {
  const [showLetter, setShowLetter] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => setShowLetter(true), delay);
    return () => clearTimeout(timeoutId);
  }, [delay]);

  const props = useSpring({
    opacity: showLetter ? 1 : 0,
    // transform: showLetter
    //   ? "scale(1) rotate(0deg)"
    //   : "scale(1.8) rotate(20deg)",
    filter: showLetter ? "blur(0px)" : "blur(9px)",
    color: showLetter ? "white" : "grey",
    fontSize: 80,
    config: {
      tension: 110,
      friction: 20,
    },
  });
  // new 1

  return <animated.span style={props}>{letter}</animated.span>;
};

export default function AnimatedText({ text, startDelay }) {
  const letters = text.split("");

  return (
    <>
      {letters.map((letter, index) => (
        <AnimatedLetter
          key={index}
          letter={letter}
          delay={startDelay + Math.random() * 1000}
        />
      ))}
    </>
  );
}

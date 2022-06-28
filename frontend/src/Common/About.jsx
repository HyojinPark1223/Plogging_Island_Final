import { React, useRef, useEffect } from "react";
import "./SCSS/About.scss";
import { BsChevronDoubleDown } from "react-icons/bs";
import { gsap } from "gsap";
import Tutorial1 from "./Tutorial1";
import Tutorial2 from "./Tutorial2";
import Tutorial3 from "./Tutorial3";
import Tutorial4 from "./Tutorial4";
import eco1 from "../Assets/eco1.jpg";

const About = () => {
  const scrollDwonRef = useRef();

  useEffect(() => {
    gsap.to(scrollDwonRef.current, {
      y: 30,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });
  });

  return (
    <div>
      <div className="mybanner">
        <img src={eco1} alt="banner" />
        <h3>About</h3>
        <div className="scrollDown" ref={scrollDwonRef}>
          <BsChevronDoubleDown size="3rem" color="#fff" />
        </div>
      </div>
      <Tutorial1 />
      <Tutorial2 />
      <Tutorial3 />
      <Tutorial4 />
    </div>
  );
};

export default About;

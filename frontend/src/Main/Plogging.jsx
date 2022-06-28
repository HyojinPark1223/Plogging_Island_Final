import { React, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import "./SCSS/Plogging.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import mainPhoto from "../Assets/mainIMG.gif";

const Plogging = () => {
  const ploggingText = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: "mobile",
    });
  }, []);

  useEffect(() => {
    gsap.to(ploggingText.current, {
      rotation: "+=360",
    });
  }, []);
  return (
    <Container>
      <section className="textHeader">
        <h1 data-aos="fade-up">
          메타버스 세상 속에서 펼쳐지는
          <span> 플로깅</span> 에코 챌린지
        </h1>
        <p data-aos="fade-up">
          플로깅 아일랜드에 방문해서 캠페인에 동참해주세요!
        </p>
      </section>
      <section className="photozone" data-aos="fade-up">
        <img src={mainPhoto} alt="mainphoto" />
      </section>
    </Container>
  );
};

export default Plogging;

/* eslint-disable react/style-prop-object */
import { React, useEffect } from "react";
import "./SCSS/Activity.scss";
import { Carousel } from "3d-react-carousal";
import AOS from "aos";
import { Button } from "react-bootstrap";
import Gif1 from "../Assets/IMG_1156.GIF";
import Gif2 from "../Assets/IMG_1167.gif";
import Gif3 from "../Assets/IMG_1168.gif";
import Gif4 from "../Assets/IMG_1166.GIF";
import Gif5 from "../Assets/IMG_1169.gif";

const Activity = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: "mobile",
    });
  }, []);
  const slides = [
    <img src={Gif1} alt="1" />,
    <img src={Gif2} alt="2" />,
    <img src={Gif3} alt="3" />,
    <img src={Gif4} alt="4" />,
    <img src={Gif5} alt="5" />,
  ];
  return (
    <div className="cardContainer">
      <h1 data-aos="fade-up">플러깅 아일랜드에서 즐길 수 있는</h1>
      <h2 data-aos="fade-up">
        다양한 <span> ECO Activity!</span>
      </h2>
      <Button href="/play" data-aos="fade-up" variant="success">
        시작하기
      </Button>
      <Button href="/about" data-aos="fade-up" variant="warning">
        튜토리얼
      </Button>
      <div className="craouselSection" data-aos="fade-up">
        <Carousel slides={slides} />
      </div>
    </div>
  );
};

export default Activity;

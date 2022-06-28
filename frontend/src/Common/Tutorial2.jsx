import { React, useEffect } from "react";
import "./SCSS/Tutorial.scss";
import AOS from "aos";
import TutorialImg2 from "../Assets/Tutorial2.JPG";

const Tutorial2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="Tutorial">
      <div className="Title" data-aos="fade-up">
        <h1>2. 교육 및 체험</h1>
      </div>
      <div className="detail" data-aos="fade-up">
        <h3>컨벤션 홀 화면입니다.</h3>
        <p>
          - 친환경 교육을 받고 재미있는 OX퀴즈를 통해 마일리지를 획득합니다.
        </p>
        <p>- 분리수거 게임을 통해서 올바른 분리수거 방법을 학습합니다.</p>
        <p> Tip. 곳곳에 숨겨진 보물이 있습니다.</p>
      </div>
      <div className="Content" data-aos="fade-up">
        <img src={TutorialImg2} alt="TutorialImg2" />
      </div>
    </div>
  );
};

export default Tutorial2;

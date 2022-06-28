import { React, useEffect } from "react";
import "./SCSS/Tutorial.scss";
import AOS from "aos";
import TutorialImg1 from "../Assets/Tutorialimg1.JPG";

const Tutorial1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="Tutorial">
      <div className="Title" data-aos="fade-up">
        <h1>1. 기본 조작방법</h1>
      </div>
      <div className="detail" data-aos="fade-up">
        <h3>시작화면입니다.</h3>
        <p>
          - 방향키로 이동할 수 있고, 스페이스바를 이용해 점프할 수 있습니다.
        </p>
        <p>- 왼쪽 아래에는 그 장소에서 할 수 있는 체크리스트가 보여집니다.</p>
        <p>- 오른쪽 아래에는 현재 장소의 미니맵이 보여집니다.</p>
      </div>
      <div className="Content" data-aos="fade-up">
        <img src={TutorialImg1} alt="TutorialImg1" />
      </div>
    </div>
  );
};

export default Tutorial1;

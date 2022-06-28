import { React, useEffect } from "react";
import "./SCSS/Tutorial.scss";
import AOS from "aos";
import TutorialImg5 from "../Assets/Tutorial5.JPG";

const Tutorial4 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="Tutorial">
      <div className="Title" data-aos="fade-up">
        <h1>4. 에코 캠페인</h1>
      </div>
      <div className="detail" data-aos="fade-up">
        <h3>에코러너 게임화면 입니다.</h3>
        <p>- 장애물을 피해 버려진 모든 쓰레기를 모아주세요.</p>
        <p>- 방향키와 스페이스를 이용하여 장애물을 피하세요.</p>
      </div>
      <div className="Content" data-aos="fade-up">
        <img src={TutorialImg5} alt="TutorialImg5" />
      </div>
    </div>
  );
};

export default Tutorial4;

import { React, useEffect } from "react";
import "./SCSS/Tutorial.scss";
import AOS from "aos";
import TutorialImg4 from "../Assets/Tutorial4.JPG";

const Tutorial3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="Tutorial">
      <div className="Title" data-aos="fade-up">
        <h1>3. 친환경 제품 샵</h1>
      </div>
      <div className="detail" data-aos="fade-up">
        <h3>컨벤션 홀 화면입니다.</h3>
        <p>
          - 에코 마일리지를 사용해 친환경 제품을 구매할 수 있습니다. (추후
          서비스 예정)
        </p>
        <p>- 친환경 캠페인을 하는 기업들의 정보를 확인할 수 있습니다.</p>
      </div>
      <div className="Content" data-aos="fade-up">
        <img src={TutorialImg4} alt="TutorialImg4" />
      </div>
    </div>
  );
};

export default Tutorial3;

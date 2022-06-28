import React from "react";
import "./SCSS/Spinner1.scss";
import { BsCircle, BsTriangle, BsSquare } from "react-icons/bs";

const intro = () => {
  return (
    <div>
      <div className="box-container">
        <div className="box">
          <div className="boxContent">
            <BsCircle size="5rem" color="green" />
            <BsTriangle size="5rem" color="green" />{" "}
            <BsSquare size="5rem" color="green" />
            <p>플로깅 아일랜드에서</p>
            <p>게임 한판 하시겠습니까?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default intro;

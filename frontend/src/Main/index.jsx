// main
import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa";
import Banner from "./Banner";
import Plogging from "./Plogging";
import Edu from "./Edu";
import Activity from "./Activity";
import Score from "./Score";

const Index = () => {
  const toTop = async () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="mainIndex">
        <Banner />
        <Plogging />
        <Edu />
        <Score />
        <Activity />
        <Button id="to-top" onClick={toTop}>
          <FaArrowUp size="1rem" />
        </Button>
      </div>
    </div>
  );
};

export default Index;

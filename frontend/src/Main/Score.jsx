import { React, useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import "./SCSS/Score.scss";
import AOS from "aos";
import ranking1 from "../Assets/1.PNG";
import ranking2 from "../Assets/2.PNG";
import ranking3 from "../Assets/3.PNG";
import { lookupAllMileage } from "../API/Mileage";

const Score = () => {
  const [firstId, setFirstId] = useState("");
  const [firstM, setFirstM] = useState("");
  const [secondId, setSecondId] = useState("");
  const [secondM, setSecondM] = useState("");
  const [thirdId, setThirdId] = useState("");
  const [thirdM, setThirdM] = useState("");

  useEffect(async () => {
    AOS.init({
      duration: 1000,
      disable: "mobile",
    });
    const allRanking = await lookupAllMileage();
    setFirstId(allRanking[0].id);
    setFirstM(allRanking[0].mileage);
    setSecondId(allRanking[1].id);
    setSecondM(allRanking[1].mileage);
    setThirdId(allRanking[2].id);
    setThirdM(allRanking[2].mileage);
  }, []);
  return (
    <Container className="scoreContainer">
      <h1 data-aos="fade-up">
        <span>ECO CHALLENGER</span>
        <br />
        최다 마일리지 명예의 전당
      </h1>
      <div className="ScoreOrder" data-aos="fade-up">
        <Card style={{ width: "13rem" }}>
          <Card.Img variant="top" src={ranking2} />
          <Card.Body>
            <Card.Title>
              {secondM}
              <span>M</span>
            </Card.Title>
            <Card.Text>{secondId}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={ranking1} />
          <Card.Body>
            <Card.Title>
              {firstM}
              <span>M</span>
            </Card.Title>
            <Card.Text>{firstId}</Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "13rem" }}>
          <Card.Img variant="top" src={ranking3} />
          <Card.Body>
            <Card.Title>
              {thirdM}
              <span>M</span>
            </Card.Title>
            <Card.Text>{thirdId}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Score;

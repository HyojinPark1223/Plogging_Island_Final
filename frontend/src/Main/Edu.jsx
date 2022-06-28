/* eslint-disable jsx-a11y/alt-text */
import { React, useEffect } from "react";
import "./SCSS/Edu.scss";
import { Container, Row, Col } from "react-bootstrap";
import AOS from "aos";
import skyviewimg from "../Assets/Outside.jpg";

const Edu = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: "mobile",
    });
  }, []);
  return (
    <Container>
      <Row className="Edu">
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <div className="textSection" data-aos="fade-right">
            <h1>
              <span>플로깅 </span>
              아일랜드
            </h1>
            <p>
              Plogging Island(플로깅 아일랜드)는 친환경 관련 교육, 체험, 게임을
              즐길 수 있는 메타버스 입니다. 다양한 에코 챌린지를 통해서
              마일리지를 획득해 친환경 제품을 구매하실 수 있습니다.
            </p>
          </div>
          <div className="textSection" data-aos="fade-right">
            <h1>SERVICE</h1>
            <p>- 교육 : 플라스틱, 분리수거, 일회용품, 해양동물에 대한 상식</p>
            <p>- 게임 : 에코 러너, 분리수거 게임, 친환경 OX 퀴즈</p>
            <p>- 체험 : 자원순환 공장 견학</p>
          </div>
        </Col>
        <Col className="d-flex flex-column justify-content-center align-items-center cardWrapper">
          <div className="card">
            <div className="cardFace front" data-aos="fade-left">
              <img src={skyviewimg} className="skyviewimg" />
            </div>
            <div className="cardFace back" data-aos="fade-left">
              <img src={skyviewimg} className="skyviewimg" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Edu;

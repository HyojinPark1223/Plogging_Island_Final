/* eslint-disable no-nested-ternary */
/* eslint-disable no-shadow */
// signup
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import { signupApi, IdCheckApi } from "../API/Signup";
import MyAlert from "../Common/MyAlert";

const Index = () => {
  const [id, setId] = useState("");
  const [password, setPw] = useState("");
  const [nickname, setNickname] = useState("");
  const [idCheck, setIdCheck] = useState("empty");

  const [alertIsOpen, setAlertOpen] = useState(false);
  const [alertComment, setAlertComment] = useState();

  /** 아이디 중복 체크 */
  const idCheckHandler = async () => {
    if (!id) {
      setIdCheck("empty");
      return;
    }

    const response = await IdCheckApi(id);

    if (response.status === 200) {
      // 응답 성공
      if (response.data.message === "success") {
        // id 중복없음
        setIdCheck("success");
      } else {
        setIdCheck("fail");
      }
    } else {
      console.log("응답 실패");
    }
  };

  /** 회원가입 버튼 핸들러 */
  const signupHandler = async e => {
    e.preventDefault();

    // 아이디, 회원가입 중복체크
    idCheckHandler();
    if (idCheck !== "success") {
      return;
    }

    const userInfo = {
      id,
      password,
      nickname,
    };

    const response = await signupApi(userInfo);

    if (response.status === 200) {
      if (response.data.message.toLowerCase() === "success") {
        console.log("success");
        setAlertComment("signupSuccess");
        setAlertOpen(true);
      } else {
        console.log("fail");
        setAlertComment("signupFail");
        setAlertOpen(true);
      }
    } else {
      console.log("not 200");
      setAlertComment("signupFail");
      setAlertOpen(true);
    }
  };

  return (
    <Container>
      <div className="signupForm">
        <h1>PLOGGING ISLAND</h1>
        <Form onSubmit={signupHandler}>
          <Form.Group className="mb-3 left">
            <Form.Control
              type="text"
              id="id"
              name="id"
              value={id}
              onChange={e => {
                setId(e.target.value);
              }}
              onBlur={() => {
                idCheckHandler();
              }}
              placeholder="아이디를 입력해주세요."
            />
            <div className="alert">
              {idCheck === "empty" ? (
                <div className="content empty" />
              ) : idCheck === "fail" ? (
                <div className="content fail">이미 사용중인 아이디입니다.</div>
              ) : (
                <div className="content success">멋진 아이디이군요! </div>
              )}
            </div>
          </Form.Group>
          <Form.Group className="mb-3 left">
            <Form.Control
              type="text"
              id="nickName"
              name="nickName"
              value={nickname}
              onChange={e => {
                setNickname(e.target.value);
              }}
              placeholder="닉네임을 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="mb-3 left mgtop">
            <Form.Control
              type="password"
              id="password"
              value={password}
              onChange={e => {
                setPw(e.target.value);
              }}
              placeholder="비밀번호를 입력해주세요."
            />
          </Form.Group>
          <Button variant="success" type="submit">
            회원가입
          </Button>
        </Form>
      </div>
      {/* 알림창 */}
      <MyAlert
        isOpen={alertIsOpen}
        alertOpen={setAlertOpen}
        type="auth"
        comment={alertComment}
        reload="/login"
      />
    </Container>
  );
};
export default Index;

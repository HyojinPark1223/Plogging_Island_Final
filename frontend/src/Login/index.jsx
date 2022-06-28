/* eslint-disable react/jsx-no-duplicate-props */
// login
import { React, useState } from "react";
import { Form, Button, Container, Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";
import LoginApi from "../API/Login";
import { LoginFail, LoginSuccess } from "../Redux/Action/Auth";
import MyAlert from "../Common/MyAlert";

const Index = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [successAlertIsOpen, setSuccessAlertIsOpen] = useState(false);
  const [failAlertIsOpen, setFailAlertOpen] = useState(false);
  const [alertComment, setAlertComment] = useState();

  /** 로그인 버튼 핸들러 */
  const loginHandler = async e => {
    e.preventDefault();
    const response = await LoginApi({ id, password });

    if (response.status === 200) {
      // 응답 성공
      if (response.data.message.toLowerCase() === "success") {
        // 로그인 성공
        dispatch(LoginSuccess(response));
        setAlertComment("loginSuccess");
        setSuccessAlertIsOpen(true);
      } else {
        dispatch(LoginFail());
        setAlertComment("loginFail");
        setFailAlertOpen(true);
      }
    } else {
      dispatch(LoginFail());
      setAlertComment("loginFail");
      setFailAlertOpen(true);
    }
  };
  return (
    <Container>
      <div className="loginForm">
        <h1>PLOGGING ISLAND</h1>
        <Form onSubmit={loginHandler}>
          <Form.Group className="mb-3 left">
            <Form.Control
              type="text"
              id="id"
              name="id"
              placeholder="ID"
              value={id}
              onChange={e => {
                setId(e.target.value);
              }}
              placeholder="아이디를 입력해주세요."
            />
          </Form.Group>
          <Form.Group className="mb-3 left">
            <Form.Control
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
              placeholder="비밀번호를 입력해주세요."
            />
          </Form.Group>
          <Button variant="success" type="submit">
            로그인
          </Button>
          <div className="authSelect">
            <Nav.Link href="/signup">
              <p>회원가입</p>
            </Nav.Link>
          </div>
        </Form>
      </div>
      {/* 알림창 */}
      <MyAlert
        isOpen={successAlertIsOpen}
        alertOpen={setSuccessAlertIsOpen}
        type="auth"
        comment={alertComment}
        reload="/"
      />
      <MyAlert
        isOpen={failAlertIsOpen}
        alertOpen={setFailAlertOpen}
        type="auth"
        comment={alertComment}
        reload="/login"
      />
    </Container>
  );
};
export default Index;

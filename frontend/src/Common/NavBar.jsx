import { React, useState, useEffect } from "react";
import "./SCSS/NavBar.scss";
import { useDispatch } from "react-redux";
import { Nav, Navbar, Container, Offcanvas, Button } from "react-bootstrap";
import { LogoutSuccess } from "../Redux/Action/Auth";
import isLoggedin from "../lib/isLoggedin";
import { lookupMileage } from "../API/Mileage";
import Userleave from "../API/Userleave";

const NavBar = () => {
  const dispatch = useDispatch();
  const [mileageInfo, setMileage] = useState(0);

  useEffect(async () => {
    const info = await lookupMileage();
    setMileage(info);
  }, []);

  const logoutHandler = async () => {
    dispatch(LogoutSuccess());
    localStorage.removeItem("user");
    window.location.replace("/");
  };

  const LeaveHandler = async () => {
    Userleave();
    localStorage.removeItem("user");
    logoutHandler();
  };

  return (
    <Navbar fixed="top" expand={false} variant="light">
      <Container fluid>
        <Navbar.Brand href="/">
          <div>
            <p className="logo1">PLOGGING</p>
            <p className="logo2">ISLAND</p>
          </div>
        </Navbar.Brand>
        <div className="d-flex">
          <Navbar.Text className="justify-content-end buttonArea">
            {!isLoggedin() ? (
              <Nav.Link href="/login">로그인</Nav.Link>
            ) : (
              <Nav.Link
                href="#deets"
                className="logout"
                onClick={() => logoutHandler()}
              >
                로그아웃
              </Nav.Link>
            )}
            {!isLoggedin() && <Nav.Link href="/signup">회원가입</Nav.Link>}
          </Navbar.Text>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              {!isLoggedin() ? (
                <Button variant="warning" className="startBtn" href="/login">
                  로그인
                </Button>
              ) : (
                <Button variant="warning" className="startBtn" href="/play">
                  게임 시작 하기
                </Button>
              )}
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-grow-1 pe-3 cavasbody">
                {isLoggedin() && (
                  <div className="mypage">
                    <h2>반갑습니다, {mileageInfo.userId}님!</h2>
                    <h4>나의 에코 마일리지 : {mileageInfo.mileage}</h4>
                    <Button
                      variant="secondary"
                      className="logoutBtn"
                      onClick={() => logoutHandler()}
                    >
                      로그아웃
                    </Button>
                  </div>
                )}
                <div className="canvasBtn">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                </div>
                {isLoggedin() && (
                  <div className="leaveBtn mt-auto">
                    <Nav.Link href="/" onClick={() => LeaveHandler()}>
                      회원탈퇴
                    </Nav.Link>
                  </div>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavBar;

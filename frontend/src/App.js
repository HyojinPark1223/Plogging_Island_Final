import "./App.scss";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Signup from "./Signup";
import Footer from "./Common/Footer";
import NavBar from "./Common/NavBar";
import Play from "./Play";
import About from "./Common/About";

function App() {
  return (
    <div>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/play" element={<Play />} />
            <Route path="/about" element={<About />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
      <div className="pageSwitch">
        <div className="status">STOP</div>
        <div className="message">전체화면으로 전환해주세요!</div>
        <div className="detail">
          권장 화면 사이즈 : HD(1280 x 720) 16:9 비율
        </div>
      </div>
    </div>
  );
}

export default App;

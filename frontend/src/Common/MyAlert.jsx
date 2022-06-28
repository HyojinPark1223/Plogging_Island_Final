/* eslint-disable */
import React, { useState } from 'react';
import Modal from 'react-modal';
import {Button} from "react-bootstrap";
import './SCSS/MyAlert.scss';

/*
1. isOpen: true - 모달창이 미리 열려있음, false - 모달창이 닫혀있음
2. onClick: 확인 눌렀을 때 이벤트
3. type : 페이지 종류
4. comment : 코멘트
5. reload : 확인 버튼 누르면 새로고침할 주소
*/
const MyAlert = ({isOpen, alertOpen, type, comment, reload}) => {
  
  const typeColor = {
    auth : "#77cf44",
    shop : "#3396f4",
    marketSell : "#ebd02f",
    marketBuy : "#3396f4",
    myCoupon : "#ebd02f",
    admin : "#3fce32",
  }

  const typeComment = {
    signupSuccess: "회원가입이 완료되었습니다.",
    signupFail: "회원가입에 실패했습니다.",
    loginSuccess: "로그인에 성공했습니다",
    loginFail: "ID/PW를 확인해주세요.",
    requestSuccess: "요청이 완료되었습니다.",
  }
  
  /* 모달 스타일 */
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width : '400px',
      height : '200px',
      backgroundColor: 'white',
      borderRadius: '10px',
      borderColor: typeColor[type],
      borderWidth: '4px',
    },
  };

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      {/* 내용 */}
      <div className="alertTitle"> {typeComment[comment]} </div>
      {/* 버튼 */}
      <Button 
        className="alertButton" 
        type="button" 
        onClick={()=>{alertOpen(false); window.location.replace(`${reload}`);}} 
        style={{backgroundColor:typeColor[type]}}>
        확인
      </Button>
    </Modal>
  );
}

export default MyAlert;
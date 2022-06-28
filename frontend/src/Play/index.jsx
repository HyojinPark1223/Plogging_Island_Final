/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable func-names */

import React, { useState, useEffect } from "react";
import "./SCSS/Play.scss";
import Unity, { UnityContext } from "react-unity-webgl";
import isLoggedin from "../lib/isLoggedin";
import NotFound from "../Common/NotFound";
import { lookupMileage, updateMileage } from "../API/Mileage";
import Spinner1 from "./Spinner1";
import Spinner2 from "./Spinner2";

const index = () => {
  const unityContext = new UnityContext({
    loaderUrl: "./unity/Build/webgl.loader.js",
    dataUrl: "./unity/Build/webgl.data",
    frameworkUrl: "./unity/Build/webgl.framework.js",
    codeUrl: "./unity/Build/webgl.wasm",
  });
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);
  const [progression, setProgression] = useState(0);

  useEffect(function () {
    window.scrollTo(0, 0);
    unityContext.on("progress", function (progression) {
      setProgression(progression);
    });

    unityContext.on("GameInfo", function (userName, score) {
      const userId = localStorage.getItem("user");
      let mileage = score;
      if (userName === userId) {
        const userInfo = {
          id: userName,
          mileage: score,
        };
        updateMileage(userInfo);
      } else {
        const rep = lookupMileage();
        mileage = rep.mileage;
      }
      setUserName(userName);
      setScore(mileage);
      unityContext.send("GameInfo", "setUserId", userId);
      unityContext.send("GameInfo", "setUserScore", mileage);
    });
  }, []);

  return (
    <div className="playContainer">
      {isLoggedin() ? (
        <div className="playSection">
          <Unity
            unityContext={unityContext}
            style={{
              height: "100%",
              width: "100%",
              border: "2px solid black",
              background: "grey",
            }}
          />
        </div>
      ) : (
        <NotFound />
      )}
      {progression === 1 ? (
        <div />
      ) : (
        <div className="spinner">
          <Spinner1 />
          <div className="loading">
            <h3>무궁화 꽃이 피었습니다..</h3>
            <p>잠시만 기다려 주세요 :) </p>
            <p>{Math.floor(progression * 100)} %</p>
          </div>
          <Spinner2 />
        </div>
      )}
    </div>
  );
};

export default index;

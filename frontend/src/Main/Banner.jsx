/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/media-has-caption */
import { React, useRef, useEffect } from "react";
import "./SCSS/Banner.scss";
import ReactPlayer from "react-player";
import { Button } from "react-bootstrap";
import { BsChevronDoubleDown } from "react-icons/bs";
import { gsap } from "gsap";
import isLoggedin from "../lib/isLoggedin";

const Banner = () => {
  const scrollDwonRef = useRef();

  useEffect(() => {
    gsap.to(scrollDwonRef.current, {
      y: 30,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });
  });

  return (
    <div>
      <section className="youtube">
        <div className="youtube__area">
          <div id="player">
            <ReactPlayer
              url="https://www.youtube-nocookie.com/embed/mZ7mroU28v4"
              width="100%"
              height="100%"
              playing
              muted
              loop
              config={{
                youtube: {
                  playerVars: {
                    showinfo: 1,
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="youtube__cover">
          <div>
            <h1>PLOGGING ISLAND</h1>
            <p>친환경 에코 챌린지를 플로깅 아일랜드에서 도전해보세요!</p>
            {isLoggedin() ? (
              <Button href="/play" variant="success">
                <span>시작하기</span>
              </Button>
            ) : (
              <Button href="/login" variant="success">
                <span>시작하기</span>
              </Button>
            )}
            <div className="scrollDown" ref={scrollDwonRef}>
              <BsChevronDoubleDown size="3rem" color="#fff" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;

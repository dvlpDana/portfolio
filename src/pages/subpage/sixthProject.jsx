import React, { useState } from "react";
import styles from "./project.module.css";

import { useNavigate } from "react-router-dom";

// components
import Horizontable from "../../components/horizontable";
import { Mobile, Pc } from "../../components/mediaQuery.jsx";
import ToggleButton from "../../components/toggleButton";

function SixthProject() {
  const [subSideNav, setSubSideNav] = useState(false);

  return (
    <section>
      <Pc>
        <Horizontable>
          <div className={`${styles.horizontableArea} ${styles.sixthProject}`}>
            <SubSideNav />
            <ProjectInfo />
            <ProjectVideo />
          </div>
        </Horizontable>
      </Pc>

      <Mobile>
        <section className={`${styles.secBg}`}>
          {subSideNav === true ? (
            <SubSideNav subSideNav={subSideNav} setSubSideNav={setSubSideNav} />
          ) : null}
          <ProjectInfo />
          <ProjectVideo />
          <div
            onClick={() => {
              setSubSideNav(!subSideNav);
            }}
          >
            <ToggleButton
              shadow="rgba(243, 222, 84, 0.5)"
              background="#f3de54"
            />
          </div>
        </section>
      </Mobile>
    </section>
  );
}

function SubSideNav(props) {
  const navigate = useNavigate();

  return (
    <>
      <div className={`${styles.subSideNav} ${styles.sixthProject}`}>
        <div
          className={`${styles.goToIndexBtn}`}
          onClick={() => {
            navigate("/main-index");
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/img/icons/home_white.png`}
            alt="back_button"
          />
          <span>메인으로 이동</span>
        </div>
        <nav className={`${styles.subSideMenu}`}>
          <span
            onClick={() => {
              navigate("/first-project");
            }}
          >
            K-MOOC 리뉴얼
          </span>
          <span
            onClick={() => {
              navigate("/second-project");
            }}
          >
            대구트립로드 리뉴얼
          </span>
          <span
            onClick={() => {
              navigate("/third-project");
            }}
          >
            살루테유모 리뉴얼
          </span>
          <span
            onClick={() => {
              navigate("/fourth-project");
            }}
          >
            청정원 리뉴얼
          </span>
          <span
            onClick={() => {
              navigate("/fifth-project");
            }}
          >
            오늘의라면 클론코딩
          </span>
        </nav>
        <div className={`${styles.circleBtnCon}`}>
          <div
            className={`${styles.circleBtn}`}
            onClick={() =>
              window.open(
                "https://dvlpdana.github.io/chrome-momentum_clone-coding/",
                "_blank"
              )
            }
          >
            <p className={`${styles.icon}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/icons/link_white.png`}
                alt="link_button"
              />
            </p>
            <span>site link</span>
          </div>
          <div
            className={`${styles.circleBtn}`}
            onClick={() =>
              window.open(
                "https://github.com/dvlpDana/chrome-momentum_clone-coding",
                "_blank"
              )
            }
          >
            <p className={`${styles.icon}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/icons/github_white.png`}
                alt="github_button"
              />
            </p>
            <span>source</span>
          </div>
        </div>
        <div
          className={`${styles.backBtn}`}
          onClick={() => {
            props.setSubSideNav(!props.subSideNav);
          }}
        >
          <span></span>
          <span></span>
        </div>
      </div>
    </>
  );
}

function ProjectInfo() {
  return (
    <>
      <div className={`${styles.projectInfoCon} ${styles.sixthProject}`}>
        <div className={`${styles.projectInfoTxt}`}>
          <h1 className={`${styles.infoTitle} ${styles.sixthProject}`}>
            Momentum 클론코딩
          </h1>
          <span className={`${styles.infoSubTitle}`}>
            "바닐라 JS 활용한 To Do List 기능구현"
          </span>
          <div className={`${styles.info}`}>
            크롬 Momentum 화면을 클론 코딩하여 시계, To Do List, 현재 날씨 등의
            기능을 구현하였습니다. 순수 자바스크립트를 활용하였고, 데이터를 로컬
            스토리지에 저장하여 새로고침하여도 정보가 사라지지 않도록
            하였습니다.
            <p>
              또한 배경 이미지의 상대경로 및 10가지의 명언을 배열에 담아
              새로고침할 때마다 랜덤으로 바뀌도록 하였습니다.
            </p>
          </div>
        </div>
        <div className={`${styles.projectInfoBox}`}>
          <h2 className={`${styles.boxTitle}`}>keyword</h2>
          <p className={`${styles.boxHashTagCon}`}>
            <span className={`${styles.boxHashTag} ${styles.sixthProject}`}>
              #Momentum
            </span>
            <span className={`${styles.boxHashTag} ${styles.sixthProject}`}>
              #바닐라 JS
            </span>
            <span className={`${styles.boxHashTag} ${styles.sixthProject}`}>
              #Component 기반
            </span>
          </p>
          <h2 className={`${styles.boxTitle}`}>main function</h2>
          <ol className={`${styles.functionListCon}`}>
            <li>12시간제(AM / PM) 시계 기능 구현</li>
            <li>배열 활용한 배경 이미지 및 명언 랜덤 출력 기능 구현</li>
            <li>
              로컬 스토리지에 데이터를 JSON 형태로 저장하여 사용자가 입력한
              정보를 저장 및 삭제하는 To Do List 기능 구현
            </li>
            <li>
              날씨 API 받아와 사용자의 현재 위치에 기반한 날씨 출력 기능 구현
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}

function ProjectVideo() {
  return (
    <>
      <div className={`${styles.videoCon} ${styles.sixthProject}`}>
        <video controls="controls" autoPlay muted>
          <source
            src={`${process.env.PUBLIC_URL}/img/movie/animation6.webm`}
            type="video/webm"
          />
        </video>
      </div>
    </>
  );
}

export default SixthProject;

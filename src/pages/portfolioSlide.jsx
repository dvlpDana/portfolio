import React, { useState } from "react";
import styles from "./css/portfolioSlide.module.css";

import { useNavigate } from "react-router-dom";
import { useSwiperSlide } from "swiper/react";

function PortfolioSlide() {

  const swiperSlide = useSwiperSlide();
  const navigate = useNavigate();
  const [active, setActive] = useState("0");

  return (
    <section className={`${styles.secBg}`}>
      <div className={swiperSlide.isActive ? `${styles.portfolioCardCon} ${styles.fadeIn}` : `${styles.portfolioCardCon}`}>
        <div
          className={
            active === "0"
              ? `${styles.portfolioCard} ${styles.active}`
              : `${styles.portfolioCard}`
          }
          onMouseEnter={() => {
            setActive("0");
          }}
          onClick={() => {
            setActive("0");
          }}
        >
          <div className={`${styles.label}`}>
            <div className={`${styles.icon}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/project_1_favicon.png`}
                alt="favicon"
              />
            </div>
            <div className={`${styles.info}`}>
              <strong>K-MOOC 리뉴얼 프로젝트</strong>
              <div className={`${styles.hashtags}`}>
                <span>#React</span>
                <span>#map-method & JSON 객체 배열</span>
              </div>
            </div>
          </div>
          <div className={`${styles.hoverArea}`}>
            <button
              className={`${styles.lineButton}`}
              onClick={() => {
                navigate("/first-project");
              }}
            >
              <span className={`${styles.lineButtonIcon}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/view_white.png`}
                  alt="view"
                />
              </span>
              <span><i>detail </i>view</span>
            </button>
            <button
              className={`${styles.lineButton}`}
              onClick={() =>
                window.open(
                  "https://dvlpdana.github.io/k-mooc_renewal/",
                  "_blank"
                )
              }
            >
              <span className={`${styles.lineButtonIcon}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/link_white.png`}
                  alt="link"
                />
              </span>
              <span><i>go web </i>site</span>
            </button>
          </div>
        </div>
        <div
          className={
            active === "1"
              ? `${styles.portfolioCard} ${styles.active}`
              : `${styles.portfolioCard}`
          }
          onMouseEnter={() => {
            setActive("1");
          }}
          onClick={() => {
            setActive("1");
          }}
        >
          <div className={`${styles.label}`}>
            <div className={`${styles.icon}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/project_2_favicon.png`}
                alt="favicon"
              />
            </div>
            <div className={`${styles.info}`}>
              <strong>대구트립로드 리뉴얼 프로젝트</strong>
              <div className={`${styles.hashtags}`}>
                <span>#반응형 퍼블리싱</span>
                <span>#Swiper 라이브러리 활용</span>
              </div>
            </div>
          </div>
          <div className={`${styles.hoverArea}`}>
            <button
              className={`${styles.lineButton}`}
              onClick={() => {
                navigate("/second-project");
              }}
            >
              <span className={`${styles.lineButtonIcon}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/view_white.png`}
                  alt="view"
                />
              </span>
              <span><i>detail </i>view</span>
            </button>
            <button
              className={`${styles.lineButton}`}
              onClick={() =>
                window.open(
                  "https://dvlpdana.github.io/DaeguTripRoad-renewal-project_2022/",
                  "_blank"
                )
              }
            >
              <span className={`${styles.lineButtonIcon}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/link_white.png`}
                  alt="link"
                />
              </span>
              <span><i>go web </i>site</span>
            </button>
          </div>
        </div>
        <div
          className={
            active === "2"
              ? `${styles.portfolioCard} ${styles.active}`
              : `${styles.portfolioCard}`
          }
          onMouseEnter={() => {
            setActive("2");
          }}
          onClick={() => {
            setActive("2");
          }}
        >
          <div className={`${styles.label}`}>
            <div className={`${styles.icon}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/project_3_favicon.png`}
                alt="favicon"
              />
            </div>
            <div className={`${styles.info}`}>
              <strong>살루테유모 리뉴얼 프로젝트</strong>
              <div className={`${styles.hashtags}`}>
                <span>#반응형 퍼블리싱</span>
                <span>#Jquery 활용 기능 구현</span>
              </div>
            </div>
          </div>
          <div className={`${styles.hoverArea}`}>
            <button
              className={`${styles.lineButton}`}
              onClick={() => {
                navigate("/third-project");
              }}
            >
              <span className={`${styles.lineButtonIcon}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/view_white.png`}
                  alt="view"
                />
              </span>
              <span><i>detail </i>view</span>
            </button>
            <button
              className={`${styles.lineButton}`}
              onClick={() =>
                window.open(
                  "https://dvlpdana.github.io/SaluteYoomo-renewal-project_2022/",
                  "_blank"
                )
              }
            >
              <span className={`${styles.lineButtonIcon}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/link_white.png`}
                  alt="link"
                />
              </span>
              <span><i>go web </i>site</span>
            </button>
          </div>
        </div>
        <div
          className={
            active === "3"
              ? `${styles.portfolioCard} ${styles.active}`
              : `${styles.portfolioCard}`
          }
          onMouseEnter={() => {
            setActive("3");
          }}
          onClick={() => {
            setActive("3");
          }}
        >
          <div className={`${styles.label}`}>
            <div className={`${styles.icon}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/project_4_favicon.png`}
                alt="favicon"
              />
            </div>
            <div className={`${styles.info}`}>
              <strong>청정원 리뉴얼 프로젝트</strong>
              <div className={`${styles.hashtags}`}>
                <span>#반응형 퍼블리싱</span>
                <span>#Visual Identity</span>
              </div>
            </div>
          </div>
          <div className={`${styles.hoverArea}`}>
            <button
              className={`${styles.lineButton}`}
              onClick={() => {
                navigate("/fourth-project");
              }}
            >
              <span className={`${styles.lineButtonIcon}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/view_white.png`}
                  alt="view"
                />
              </span>
              <span><i>detail </i>view</span>
            </button>
            <button
              className={`${styles.lineButton}`}
              onClick={() =>
                window.open(
                  " https://dvlpdana.github.io/Chungjeongwon-renewal-project_2022/",
                  "_blank"
                )
              }
            >
              <span className={`${styles.lineButtonIcon}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/link_white.png`}
                  alt="link"
                />
              </span>
              <span><i>go web </i>site</span>
            </button>
          </div>
        </div>
        <div
          className={
            active === "4"
              ? `${styles.portfolioCard} ${styles.active}`
              : `${styles.portfolioCard}`
          }
          onMouseEnter={() => {
            setActive("4");
          }}
          onClick={() => {
            setActive("4");
          }}
        >
          <div className={`${styles.label}`}>
            <div className={`${styles.icon}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/project_5_favicon.png`}
                alt="favicon"
              />
            </div>
            <div className={`${styles.info}`}>
              <strong>오늘의라면 리뉴얼 프로젝트</strong>
              <div className={`${styles.hashtags}`}>
                <span>#모바일 퍼블리싱</span>
                <span>#정기구독 프로세스</span>
              </div>
            </div>
          </div>
          <div className={`${styles.hoverArea}`}>
            <button
              className={`${styles.lineButton}`}
              onClick={() => {
                navigate("/fifth-project");
              }}
            >
              <span className={`${styles.lineButtonIcon}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/view_white.png`}
                  alt="view"
                />
              </span>
              <span><i>detail </i>view</span>
            </button>
            <button
              className={`${styles.lineButton}`}
              onClick={() =>
                window.open(
                  "https://dvlpdana.github.io/onel-ramyun-renewal-project-2022/",
                  "_blank"
                )
              }
            >
              <span className={`${styles.lineButtonIcon}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/link_white.png`}
                  alt="link"
                />
              </span>
              <span><i>go web </i>site</span>
            </button>
          </div>
        </div>
        <div
          className={
            active === "5"
              ? `${styles.portfolioCard} ${styles.active}`
              : `${styles.portfolioCard}`
          }
          onMouseEnter={() => {
            setActive("5");
          }}
          onClick={() => {
            setActive("5");
          }}
        >
          <div className={`${styles.label}`}>
            <div className={`${styles.icon}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/project_6_favicon.jpg`}
                alt="favicon"
              />
            </div>
            <div className={`${styles.info}`}>
              <strong>Momentum 클론 코딩</strong>
              <div className={`${styles.hashtags}`}>
                <span>#Vanila JS</span>
                <span>#Component 기반</span>
              </div>
            </div>
          </div>
          <div className={`${styles.hoverArea}`}>
            <button
              className={`${styles.lineButton}`}
              onClick={() => {
                navigate("/sixth-project");
              }}
            >
              <span className={`${styles.lineButtonIcon}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/view_white.png`}
                  alt="view"
                />
              </span>
              <span><i>detail </i>view</span>
            </button>
            <button
              className={`${styles.lineButton}`}
              onClick={() =>
                window.open(
                  "https://dvlpdana.github.io/chrome-momentum_clone-coding/",
                  "_blank"
                )
              }
            >
              <span className={`${styles.lineButtonIcon}`}>
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/link_white.png`}
                  alt="link"
                />
              </span>
              <span><i>go web </i>site</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioSlide;

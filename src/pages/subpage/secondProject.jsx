import React, {useState} from "react";
import styles from "./project.module.css";

import { useNavigate, Link } from "react-router-dom";

// components
import Horizontable from "../../components/horizontable";
import { Mobile, Pc } from "../../components/mediaQuery.jsx";
import ToggleButton from "../../components/toggleButton";

// library
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper";


function SecondProject() {
  const navigate = useNavigate();
  const [subSideNav, setSubSideNav] = useState(false);

  return (
    <section>
      <Pc>
        <Horizontable>
          <div className={`${styles.horizontableArea}`}>
            <SubSideNav />
            <ProjectInfo />
            <ProjectVideo />
            <ProjectDocuments />
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
          <ProjectDocuments />
          <div
            onClick={() => {
              setSubSideNav(!subSideNav);
            }}
          >
            <ToggleButton shadow="rgba(56, 113, 192, 0.16)" background="#3871c0" />
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
      <div className={`${styles.subSideNav} ${styles.secondProject}`}>
        <div
          className={`${styles.goToIndexBtn}`}
          onClick={() => {
            navigate("/index");
          }}
        >
          <img
            src={`${process.env.PUBLIC_URL}/img/icons/back_white.png`}
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
            오늘의라면 리뉴얼
          </span>
          <span
            onClick={() => {
              navigate("/sixth-project");
            }}
          >
            momentum 클론코딩
          </span>
        </nav>
        <div className={`${styles.circleBtnCon}`}>
          <div
            className={`${styles.circleBtn}`}
            onClick={() =>
              window.open(
                "https://dvlpdana.github.io/DaeguTripRoad-renewal-project_2022/",
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
                "https://github.com/dvlpDana/DaeguTripRoad-renewal-project_2022",
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
        <div className={`${styles.backBtn}`} onClick={()=>{props.setSubSideNav(!props.subSideNav);}}>
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
      <div className={`${styles.projectInfoCon}`}>
        <div className={`${styles.projectInfoTxt}`}>
          <h1 className={`${styles.infoTitle} ${styles.secondProject}`}>대구트립로드 리뉴얼</h1>
          <span className={`${styles.infoSubTitle}`}>
            "사용자 요구에 적합한 콘텐츠의 접근성 향상"
          </span>
          <div className={`${styles.info}`}>
              다른 사이트와는 차별화되는 대구트립로드 만의 매력적인 콘텐츠 중 사용자가
              자주 찾는 내용을 선별후, 이를 정리하여 홈페이지의 첫 화면에 배치하였습니다.
            <p>
              이를 통해 사용자는 기존의 사이트와 비교하여 필요한 정보를 바로 찾을 수 있어
              편의성이 향상될 것이고, 정보제공자인 대구 문화 관광에서는 대구의 주요 사업을
              압축적으로 사이트를 방문하는 사용자에게 전달할 수 있을 것입니다.
            </p>
          </div>
        </div>
        <div className={`${styles.projectInfoBox}`}>
          <h2 className={`${styles.boxTitle}`}>keyword</h2>
          <p className={`${styles.boxHashTagCon}`}>
            <span className={`${styles.boxHashTag} ${styles.secondProject}`}>
              #반응형 퍼블리싱
            </span>
            <span className={`${styles.boxHashTag} ${styles.secondProject}`}>
              #관공서
            </span>
            <span className={`${styles.boxHashTag} ${styles.secondProject}`}>
              #JQuery 활용 기능 구현
            </span>
          </p>
          <h2 className={`${styles.boxTitle}`}>main function</h2>
          <ol className={`${styles.functionListCon}`}>
            <li>OpenWeatherMap API를 사용하여 날씨 데이터를 받아와 대구의 현재 날씨 출력하는 기능 구현</li>
            <li>반응형 웹에 적합한 Swiper 슬라이드 기능 구현</li>
            <li>JS 내장 함수인 date 사용하여 현재 날짜, 요일, 시간 출력하는 기능 구현</li>
          </ol>
        </div>
      </div>
    </>
  );
}

function ProjectVideo() {
  return (
    <>
      <div className={`${styles.videoCon}`}>
        <video controls="controls" autoPlay muted>
          <source
            src={`${process.env.PUBLIC_URL}/img/movie/animation2.webm`}
            type="video/webm"
          />
        </video>
      </div>
    </>
  );
}

function ProjectDocuments() {
  return (
    <>
      <div className={`${styles.documentCon}`}>
        <Swiper
          effect={"cards"}
          grabCursor={true}
          centeredSlides={true}
          modules={[Autoplay, EffectCards]}
          rewind={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          className={`${styles.cardSwiper} cardSwiper`}
        >
          <SwiperSlide>
            <div className={`${styles.cardSwiperSlide}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/project_2_proposal.jpg`}
                alt="proposal_jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.cardSwiperSlide}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/project_2_wireframe.jpg`}
                alt="wireframe_jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.cardSwiperSlide}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/project_2_style-guide.jpg`}
                alt="style-guide_jpg"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={`${styles.btnDownLoaderCon}`}>
          <Link
            to={`${process.env.PUBLIC_URL}/download/proposal/project_2_proposal.pdf`}
            target="b_blank"
            download
            className={`${styles.btnDownLoader}`}
          >
            <i className={`${styles.downLoaderIcon}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/icons/proposal.png`}
                alt="proposal"
              />
              <strong>기획서</strong>
            </i>
            <span>대구트립로드_기획서.pdf</span>
          </Link>
          <Link
            to={`${process.env.PUBLIC_URL}/download/wireframe/project_2_wireframe.pdf`}
            target="b_blank"
            download
            className={`${styles.btnDownLoader}`}
          >
            <i className={`${styles.downLoaderIcon}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/icons/wireframe.png`}
                alt="wireframe"
              />
              <strong>와이어프레임</strong>
            </i>
            <span>대구트립로드_와이어프레임.pdf</span>
          </Link>
          <Link
            to={`${process.env.PUBLIC_URL}/download/styleguide/project_2_styleguide.jpg`}
            target="b_blank"
            download
            className={`${styles.btnDownLoader}`}
          >
            <i className={`${styles.downLoaderIcon}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/icons/styleguide.png`}
                alt="style-guide"
              />
              <strong>스타일가이드</strong>
            </i>
            <span>대구트립로드_스타일가이드.jpeg</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SecondProject;
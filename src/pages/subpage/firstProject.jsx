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

function FirstProject() {
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
            <ToggleButton shadow="rgba(59, 136, 217, 0.16)" background="#3b88d9" />
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
      <div className={`${styles.subSideNav} ${styles.firstProject}`}>
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
                "https://dvlpdana.github.io/k-mooc_renewal/",
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
                "https://github.com/dvlpDana/k-mooc_renewal",
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
          <h1 className={`${styles.infoTitle} ${styles.firstProject}`}>k-mooc 리뉴얼</h1>
          <span className={`${styles.infoSubTitle}`}>
            "유용성과 사용성을 모두 충족한 UI ・ UX 디자인 개선"
          </span>
          <div className={`${styles.info}`}>
            K_MOOC의 방대한 정보를 사용자들이 쉽게 찾을 수 있도록 콘텐츠에
            적합한 아이콘 및 이미지를 사용하여 직관성을 향상하였습니다. 또한
            user가 자주 찾는 정보이지만 쉽게 찾기 불편한 콘텐츠는 별도의 배너를
            제작하여 편의성을 증대하였습니다.
            <p>
              이를 통해 사용자들은 원하는 정보를 쉽게 찾게 될 것이고, 유용성과
              사용성을 모두 충족한 K_MOOC 사이트를 더 많은 사용자들이 이용하게
              될 것이라 기대합니다.
            </p>
          </div>
        </div>
        <div className={`${styles.projectInfoBox}`}>
          <h2 className={`${styles.boxTitle}`}>keyword</h2>
          <p className={`${styles.boxHashTagCon}`}>
            <span className={`${styles.boxHashTag} ${styles.firstProject}`}>
              #React
            </span>
            <span className={`${styles.boxHashTag} ${styles.firstProject}`}>
              #온라인 교육 플랫폼
            </span>
            <span className={`${styles.boxHashTag} ${styles.firstProject}`}>
              #컴포넌트 기반
            </span>
          </p>
          <h2 className={`${styles.boxTitle}`}>main function</h2>
          <ol className={`${styles.functionListCon}`}>
            <li>Router 라이브러리 활용한 렌더링 기능 구현</li>
            <li>props - state 사용한 이벤트 위임</li>
            <li>JSON 형식의 객체 배열 - map 메소드 활용한 데이터 가져오기</li>
            <li>회원가입 페이지 유효성 검사 기능</li>
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
            src={`${process.env.PUBLIC_URL}/img/movie/animation1.webm`}
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
                src={`${process.env.PUBLIC_URL}/img/project_1_proposal.jpg`}
                alt="proposal_jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.cardSwiperSlide}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/project_1_wireframe.jpg`}
                alt="wireframe_jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.cardSwiperSlide}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/project_1_style-guide.jpg`}
                alt="style-guide_jpg"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={`${styles.btnDownLoaderCon}`}>
          <Link
            to={`${process.env.PUBLIC_URL}/download/proposal/project_1_proposal.pdf`}
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
            <span>K-MOOC_기획서.pdf</span>
          </Link>
          <Link
            to={`${process.env.PUBLIC_URL}/download/wireframe/project_1_wireframe.pdf`}
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
            <span>K-MOOC_와이어프레임.pdf</span>
          </Link>
          <Link
            to={`${process.env.PUBLIC_URL}/download/styleguide/project_1_styleguide.jpg`}
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
            <span>K-MOOC_스타일가이드.jpeg</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default FirstProject;

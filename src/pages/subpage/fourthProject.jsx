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


function FourthProject() {
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
            <ToggleButton shadow="rgba(4, 199, 233, 0.2)" background="#04c7e9" />
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
      <div className={`${styles.subSideNav} ${styles.fourthProject}`}>
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
                "https://dvlpdana.github.io/Chungjeongwon-renewal-project_2022/",
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
                "https://github.com/dvlpDana/Chungjeongwon-renewal-project_2022",
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
          <h1 className={`${styles.infoTitle} ${styles.fourthProject}`}>청정원 리뉴얼</h1>
          <span className={`${styles.infoSubTitle}`}>
            "잠재적 고객 확보 위한 브랜드 이미지 각인 및 상품 정보의 명확한 전달"
          </span>
          <div className={`${styles.info}`}>
              사이트를 방문하는 사용자들의 기억에 남을 수 있도록 문구, 이미지, 컬러 등을
              브랜드의 성격에 맞게 통일감을 주어 Visual Identity를 강조하고자 하였습니다.
              또한 기존의 분산된 컨텐츠를 같은 성격끼리 분류하여 하나의 섹션에서 공통되게 제공하고자
              하였습니다.
            <p>
              이를 통해 사용자들에게 청정원의 브랜드가 지향하는 바와 브랜드 성격에 대해 명확히
              각인시킬 수 있을 것이라 기대합니다.
            </p>
          </div>
        </div>
        <div className={`${styles.projectInfoBox}`}>
          <h2 className={`${styles.boxTitle}`}>keyword</h2>
          <p className={`${styles.boxHashTagCon}`}>
            <span className={`${styles.boxHashTag} ${styles.fourthProject}`}>
              #반응형 퍼블리싱
            </span>
            <span className={`${styles.boxHashTag} ${styles.fourthProject}`}>
              #기업 홍보
            </span>
            <span className={`${styles.boxHashTag} ${styles.fourthProject}`}>
              #Visual Identity
            </span>
          </p>
          <h2 className={`${styles.boxTitle}`}>main function</h2>
          <ol className={`${styles.functionListCon}`}>
            <li>디바이스 종류에 따른 웹 페이지 크기가 자동적으로 재조정되는 반응형 웹 구현</li>
            <li>사용자 움직임에 따른 hover effect, slide down, toggle 기능 구현</li>
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
            src={`${process.env.PUBLIC_URL}/img/movie/animation4.webm`}
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
                src={`${process.env.PUBLIC_URL}/img/project_4_proposal.jpg`}
                alt="proposal_jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.cardSwiperSlide}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/project_4_wireframe.jpg`}
                alt="wireframe_jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.cardSwiperSlide}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/project_4_style-guide.jpg`}
                alt="style-guide_jpg"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={`${styles.btnDownLoaderCon}`}>
          <Link
            to={`${process.env.PUBLIC_URL}/download/proposal/project_4_proposal.pdf`}
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
            <span>청정원_기획서.pdf</span>
          </Link>
          <Link
            to={`${process.env.PUBLIC_URL}/download/wireframe/project_4_wireframe.pdf`}
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
            <span>청정원_와이어프레임.pdf</span>
          </Link>
          <Link
            to={`${process.env.PUBLIC_URL}/download/styleguide/project_4_styleguide.jpg`}
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
            <span>청정원_스타일가이드.jpeg</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default FourthProject;
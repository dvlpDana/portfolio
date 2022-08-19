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


function FifthProject() {
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
            <ToggleButton shadow="rgba(255, 122, 71, 0.2)" background="#ff7a47" />
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
      <div className={`${styles.subSideNav} ${styles.fifthProject}`}>
        <div
          className={`${styles.goToIndexBtn}`}
          onClick={() => {
            navigate("/index");
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
                "https://dvlpdana.github.io/onel-ramyun-renewal-project-2022/",
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
                "https://github.com/dvlpDana/onel-ramyun-renewal-project-2022",
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
          <h1 className={`${styles.infoTitle} ${styles.fifthProject}`}>오늘의 라면 리뉴얼</h1>
          <span className={`${styles.infoSubTitle}`}>
            "사용자 편의성 및 페르소나 고려한 정기구독 프로세스 단순화 및 모바일 ONLY 페이지 구현"
          </span>
          <div className={`${styles.info}`}>
              '라면 정기 구독'이라는 하나의 목적을 위해 구축된 웹 APP을 모바일 온리로 리뉴얼 하여
              목적에 충실하게 콘텐츠 및 UI ・ UX를 수정하였습니다.
            <p>
              사이트의 성격 및 홍보를 강조하는 콘텐츠의 내용은 함축적으로 줄이고, 사용자가 정기구독 프로세스에
              쉽게 접근할 수 있도록 메인 인덱스에 구독 관련 내용을 배치하였습니다.
            </p>
            <p>
              또한 정기구독 프로세스를 보다 직관적이고 단순하게 변경하여 
              사용자들이 편리하게 사용할 수 있도록 하였습니다.
            </p>
          </div>
        </div>
        <div className={`${styles.projectInfoBox}`}>
          <h2 className={`${styles.boxTitle}`}>keyword</h2>
          <p className={`${styles.boxHashTagCon}`}>
            <span className={`${styles.boxHashTag} ${styles.fifthProject}`}>
              #모바일 퍼블리싱
            </span>
            <span className={`${styles.boxHashTag} ${styles.fifthProject}`}>
              #정기구독
            </span>
            <span className={`${styles.boxHashTag} ${styles.fifthProject}`}>
              #HTML / CSS
            </span>
          </p>
          <h2 className={`${styles.boxTitle}`}>main function</h2>
          <ol className={`${styles.functionListCon}`}>
            <li>HTML / CSS 활용하여 애니메이션 효과 구현</li>
            <li>구독 프로세스 및 상품 결제 페이지 구현</li>
            <li>display 및 position 활용한 콘텐츠 정렬 및 배치</li>
          </ol>
        </div>
      </div>
    </>
  );
}

function ProjectVideo() {
  return (
    <>
      <div className={`${styles.videoCon} ${styles.fifthProject}`}>
        <video controls="controls" autoPlay muted>
          <source
            src={`${process.env.PUBLIC_URL}/img/movie/animation5.webm`}
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
                src={`${process.env.PUBLIC_URL}/img/project_5_proposal.jpg`}
                alt="proposal_jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.cardSwiperSlide}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/project_5_wireframe.jpg`}
                alt="wireframe_jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.cardSwiperSlide}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/project_5_style-guide.jpg`}
                alt="style-guide_jpg"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={`${styles.btnDownLoaderCon}`}>
          <Link
            to="/fifth-project/proposal"
            target="b_blank"
            className={`${styles.btnDownLoader}`}
          >
            <i className={`${styles.downLoaderIcon}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/icons/proposal.png`}
                alt="proposal"
              />
              <strong>기획서</strong>
            </i>
            <span>오늘의라면_기획서.pdf</span>
          </Link>
          <Link
            to="/fifth-project/wireframe"
            target="b_blank"
            className={`${styles.btnDownLoader}`}
          >
            <i className={`${styles.downLoaderIcon}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/icons/wireframe.png`}
                alt="wireframe"
              />
              <strong>와이어프레임</strong>
            </i>
            <span>오늘의라면_와이어프레임.pdf</span>
          </Link>
          <Link
            to="/fifth-project/styleguide"
            target="b_blank"
            className={`${styles.btnDownLoader}`}
          >
            <i className={`${styles.downLoaderIcon}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/icons/styleguide.png`}
                alt="style-guide"
              />
              <strong>스타일가이드</strong>
            </i>
            <span>오늘의라면_스타일가이드.pdf</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default FifthProject;
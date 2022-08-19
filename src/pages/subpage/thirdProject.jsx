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


function ThirdProject() {
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
            <ToggleButton shadow="rgba(51, 102, 51, 0.16)" background="#336633" />
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
      <div className={`${styles.subSideNav} ${styles.thirdProject}`}>
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
                "https://dvlpdana.github.io/SaluteYoomo-renewal-project_2022/",
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
                "https://github.com/dvlpDana/SaluteYoomo-renewal-project_2022",
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
          <h1 className={`${styles.infoTitle} ${styles.thirdProject}`}>살루테유모 리뉴얼</h1>
          <span className={`${styles.infoSubTitle}`}>
            "브랜드 아이덴티티 강조 및 상품에 대한 필수 정보 제공으로 매출 상승"
          </span>
          <div className={`${styles.info}`}>
              고급 올리브유 및 발사믹 식초를 수입 ・ 판매하는 살루테유모의 브랜드 아이덴티티를
              효과적으로 전달할 수 있도록 이미지에 부합하는 포인트 컬러를 선정하였습니다. 또한
              아이콘 및 버튼 등을 통일감 있게 사용하여 안정감을 주고자 하였습니다.
            <p>
              뿐만 아니라 사용자의 연령층을 고려하여 자주 찾는 정보는 별도의 배너로 제작하여
              쉽게 접근할 수 있도록 하였고, 해당 브랜드에 대한 간단한 소개를 메인 인덱스에 노출하여
              브랜드에 대한 홍보를 하고자 하였습니다.
            </p>
          </div>
        </div>
        <div className={`${styles.projectInfoBox}`}>
          <h2 className={`${styles.boxTitle}`}>keyword</h2>
          <p className={`${styles.boxHashTagCon}`}>
            <span className={`${styles.boxHashTag} ${styles.thirdProject}`}>
              #반응형 퍼블리싱
            </span>
            <span className={`${styles.boxHashTag} ${styles.thirdProject}`}>
              #쇼핑몰
            </span>
            <span className={`${styles.boxHashTag} ${styles.thirdProject}`}>
              #Interactive Web
            </span>
          </p>
          <h2 className={`${styles.boxTitle}`}>main function</h2>
          <ol className={`${styles.functionListCon}`}>
            <li>gsap 라이브러리 사용하여 사용자의 스크롤 움직임에 따른 effect 적용</li>
            <li>JQuery로 carousel_slide, pagenation 기능 구현</li>
            <li>JQuery로 탭 메뉴 및 '관심상품' 모달창 기능 구현</li>
            <li>HTML, CSS로 로그인창 구현</li>
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
            src={`${process.env.PUBLIC_URL}/img/movie/animation3.webm`}
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
                src={`${process.env.PUBLIC_URL}/img/project_3_proposal.jpg`}
                alt="proposal_jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.cardSwiperSlide}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/project_3_wireframe.jpg`}
                alt="wireframe_jpg"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={`${styles.cardSwiperSlide}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/project_3_style-guide.jpg`}
                alt="style-guide_jpg"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div className={`${styles.btnDownLoaderCon}`}>
          <Link
            to="/third-project/proposal"
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
            <span>살루테유모_기획서.pdf</span>
          </Link>
          <Link
            to="/third-project/wireframe"
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
            <span>살루테유모_와이어프레임.pdf</span>
          </Link>
          <Link
            to="/third-project/styleguide"
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
            <span>살루테유모_스타일가이드.pdf</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ThirdProject;
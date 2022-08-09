import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// css
import "./reset.css";
import "swiper/css";
import "swiper/css/pagination";
import "./App.css";

// library
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";

//components
import { Mobile, Pc } from "./components/MediaQuery.jsx";

// subpage
import FirstProject from "./pages/FirstProject.jsx";
import SecondProject from "./pages/SecondProject.jsx";
import ThirdProject from "./pages/ThirdProject.jsx";
import FourthProject from "./pages/FourthProject.jsx";
import FifthProject from "./pages/FifthProject.jsx";
import SixthProject from "./pages/SixthProject.jsx";
import { useState } from "react";

AOS.init();

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<MainIndex />} />
        <Route path="first-project" element={<FirstProject />} />
        <Route path="second-project" element={<SecondProject />} />
        <Route path="third-project" element={<ThirdProject />} />
        <Route path="fourth-project" element={<FourthProject />} />
        <Route path="fifth-project" element={<FifthProject />} />
        <Route path="sixth-project" element={<SixthProject />} />
      </Routes>
    </>
  );
}

function MainIndex() {
  return (
    <>
      <Pc>
        <Swiper
          direction={"horizontal"}
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          mousewheel={true}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <Introduce />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <QuestionMark />{" "}
          </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>
            Slide 5<Link to="first-project">첫번째 프로젝트 이동 링크</Link>
            <Link to="second-project">두번째 프로젝트 이동 링크</Link>
            <Link to="third-project">세번째 프로젝트 이동 링크</Link>
            <Link to="fourth-project">네번째 프로젝트 이동 링크</Link>
            <Link to="fifth-project">다섯번째 프로젝트 이동 링크</Link>
            <Link to="sixth-project">여섯번째 프로젝트 이동 링크</Link>
          </SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
      </Pc>
      <Mobile></Mobile>
    </>
  );
}

class Introduce extends React.Component {
  state = { x: 0, y: 0 };
  handleMouseMove = (event) => {
    this.setState({
      x: event.pageX,
      y: event.pageY
    });
  };
  render() {
    const { x, y } = this.state;

    return (
      <section className="introCon">
        <div className="introBox">
          <h1 className="titleCon" onMouseMove={this.handleMouseMove}>
            <span className="title">사용성을 개선을 위해</span>
            <strong
              className="title englishTitle"
            >
              cirtical thinking {x} {y}
            </strong>
            <span className="title">하는 개발자 심단비입니다.</span>
          </h1>
        </div>
      </section>
    );
  }
}

function QuestionMark() {
  return (
    <section className="secBg">
      <h2 className="explainTxt">
        <span>퍼즐 맞추듯</span>
        <span>
          <strong>세밀</strong>하게
        </span>
        <span>개발합니다</span>
      </h2>
      <div className="questionMark">
        <img src={`${process.env.PUBLIC_URL}/img/svg/puzzle_whole.svg`} />
      </div>
    </section>
  );
}

export default App;

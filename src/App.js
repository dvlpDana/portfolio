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

//components
import { Mobile, Pc } from "./components/MediaQuery.jsx";

// subpage
import FirstProject from "./pages/FirstProject.jsx";
import SecondProject from "./pages/SecondProject.jsx";
import ThirdProject from "./pages/ThirdProject.jsx";
import FourthProject from "./pages/FourthProject.jsx";
import FifthProject from "./pages/FifthProject.jsx";
import SixthProject from "./pages/SixthProject.jsx";

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
            clickable : true,
          }}
          mousewheel={true}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide> <Introduce /> </SwiperSlide>
          <SwiperSlide> <QuestionMark /> </SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>
            Slide 5
            <Link to="first-project">첫번째 프로젝트 이동 링크</Link>
            <Link to="second-project">두번째 프로젝트 이동 링크</Link>
            <Link to="third-project">세번째 프로젝트 이동 링크</Link>
            <Link to="fourth-project">네번째 프로젝트 이동 링크</Link>
            <Link to="fifth-project">다섯번째 프로젝트 이동 링크</Link>
            <Link to="sixth-project">여섯번째 프로젝트 이동 링크</Link>
          </SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
        </Swiper>
      </Pc>
      <Mobile>        
      </Mobile>
    </>
  );
}

function Introduce() {
  return(
    <>
      <div className="introCon">
        <div className="introBox">
          <p className="titleCon">
            <span className="title">사용성을 개선을 위해</span>
            <strong className="title englishTitle">cirtical thinking</strong>
            <span className="title"> 하는 개발자 심단비입니다.</span>
          </p>
        </div>
      </div>
    </>
  );
}

function QuestionMark() {
  return(
    <>
      <div>
        
      </div>
    </>
  )
}

export default App;

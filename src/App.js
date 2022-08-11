import React from "react";
import { Routes, Route, Link } from "react-router-dom";

// css
import "./reset.css";
import "swiper/css";
import "swiper/css/pagination";
import "./App.css";

// library
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

// components
import { Mobile, Pc } from "./components/mediaQuery.jsx";

// slidepage
import Introduce from "./pages/introduce.jsx";
import NavSlide from "./pages/navSlide.jsx";
import ProfileSlide from "./pages/profileSlide.jsx";
import SkillSlide from "./pages/skillSlide.jsx";
import PortfolioSlide from "./pages/portfolioSlide.jsx";
import ContactSlide from "./pages/contactSlide.jsx";

// subpage
import FirstProject from "./pages/subpage/firstProject.jsx";
import SecondProject from "./pages/subpage/secondProject.jsx";
import ThirdProject from "./pages/subpage/thirdProject.jsx";
import FourthProject from "./pages/subpage/fourthProject.jsx";
import FifthProject from "./pages/subpage/fifthProject.jsx";
import SixthProject from "./pages/subpage/sixthProject.jsx";

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
            <Introduce />
          </SwiperSlide>

          <SwiperSlide>
            <NavSlide />
          </SwiperSlide>

          <SwiperSlide>
            <ProfileSlide />
          </SwiperSlide>

          <SwiperSlide>
            <SkillSlide />
          </SwiperSlide>

          <SwiperSlide>
            <PortfolioSlide />
          </SwiperSlide>

          <SwiperSlide>
            <ContactSlide />
          </SwiperSlide>
        </Swiper>
      </Pc>

      <Mobile>
        <Swiper
          direction={"vertical"}
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          mousewheel={true}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >

          <SwiperSlide>
            <Introduce />
          </SwiperSlide>

          <SwiperSlide>
            <NavSlide />
          </SwiperSlide>

          <SwiperSlide>
            <ProfileSlide />
          </SwiperSlide>

          <SwiperSlide>
            <SkillSlide />
          </SwiperSlide>

          <SwiperSlide>
            <PortfolioSlide />
          </SwiperSlide>

          <SwiperSlide>
            <ContactSlide />
          </SwiperSlide>
        </Swiper>
      </Mobile>
    </>
  );
}

export default App;

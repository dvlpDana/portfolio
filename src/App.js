import React, { useState } from "react";
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
import ToggleButton from "./components/toggleButton";
import SideNav from "./components/sideNav";

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

// pdf
import FirstProjectProposal from "./pages/pdfpage/firstProjectProposal";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Introduce />} />
        <Route path="index" element={<Index />} />
        <Route path="first-project" element={<FirstProject />} />
        <Route path="second-project" element={<SecondProject />} />
        <Route path="third-project" element={<ThirdProject />} />
        <Route path="fourth-project" element={<FourthProject />} />
        <Route path="fifth-project" element={<FifthProject />} />
        <Route path="sixth-project" element={<SixthProject />} />
        <Route path="first-project/proposal" element={<FirstProjectProposal/>} />
      </Routes>
    </>
  );
}

function Index() {
  const [sideNav, setSideNav] = useState(false);

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

          <div slot="container-end"
            onClick={() => {
              setSideNav(!sideNav);
            }}
          >
            <ToggleButton shadow="rgba(0, 0, 0, 0.2)" background="#9B9B9B" />
          </div>

          {sideNav === true ? (
            <SideNav sideNav={sideNav} setSideNav={setSideNav} />
          ) : null}
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

          <div slot="container-end"
            onClick={() => {
              setSideNav(!sideNav);
            }}
          >
            <ToggleButton shadow="rgba(0, 0, 0, 0.2)" background="#9B9B9B" />
          </div>

          {sideNav === true ? (
            <SideNav sideNav={sideNav} setSideNav={setSideNav} />
          ) : null}

        </Swiper>
      </Mobile>
    </>
  );
}

export default App;

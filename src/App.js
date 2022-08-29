import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

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
import {
  FirstProjectViewer,
  FirstProject
} from "./pages/subpage/firstProject.jsx";
import {
  SecondProjectViewer,
  SecondProject
} from "./pages/subpage/secondProject.jsx";
import {
  ThirdProjectViewer,
  ThirdProject
} from "./pages/subpage/thirdProject.jsx";
import {
  FourthProjectViewer,
  FourthProject
} from "./pages/subpage/fourthProject.jsx";
import {
  FifthProjectViewer,
  FifthProject
} from "./pages/subpage/fifthProject.jsx";
import SixthProject from "./pages/subpage/sixthProject.jsx";

// pdf
import {
  FirstProjectProposal,
  FirstProjectWireframe,
  FirstProjectStyleguide
} from "./pages/pdfpage/firstProjectPdf";
import {
  SecondProjectProposal,
  SecondProjectWireframe,
  SecondProjectStyleguide
} from "./pages/pdfpage/secondProjectPdf";
import {
  ThirdProjectProposal,
  ThirdProjectWireframe,
  ThirdProjectStyleguide
} from "./pages/pdfpage/thirdProjectPdf";
import {
  FourthProjectProposal,
  FourthProjectWireframe,
  FourthProjectStyleguide
} from "./pages/pdfpage/fourthProjectPdf";
import {
  FifthProjectProposal,
  FifthProjectWireframe,
  FifthProjectStyleguide
} from "./pages/pdfpage/fifthProjectPdf";

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Introduce />} />
        <Route path="main-index" element={<MainIndex />} />

        <Route path="first-project/*" element={<FirstProjectViewer />}>
          <Route index element={<FirstProject />} />
          <Route path="proposal" element={<FirstProjectProposal />} />
          <Route path="wireframe" element={<FirstProjectWireframe />} />
          <Route path="styleguide" element={<FirstProjectStyleguide />} />
        </Route>

        <Route path="second-project/*" element={<SecondProjectViewer />}>
          <Route index element={<SecondProject />} />
          <Route path="proposal" element={<SecondProjectProposal />} />
          <Route path="wireframe" element={<SecondProjectWireframe />} />
          <Route path="styleguide" element={<SecondProjectStyleguide />} />
        </Route>

        <Route path="third-project/*" element={<ThirdProjectViewer />}>
          <Route index element={<ThirdProject />} />
          <Route path="proposal" element={<ThirdProjectProposal />} />
          <Route path="wireframe" element={<ThirdProjectWireframe />} />
          <Route path="styleguide" element={<ThirdProjectStyleguide />} />
        </Route>

        <Route path="fourth-project/*" element={<FourthProjectViewer />}>
          <Route index element={<FourthProject />} />
          <Route path="proposal" element={<FourthProjectProposal />} />
          <Route path="wireframe" element={<FourthProjectWireframe />} />
          <Route path="styleguide" element={<FourthProjectStyleguide />} />
        </Route>

        <Route path="fifth-project/*" element={<FifthProjectViewer />}>
          <Route index element={<FifthProject />} />
          <Route path="proposal" element={<FifthProjectProposal />} />
          <Route path="wireframe" element={<FifthProjectWireframe />} />
          <Route path="styleguide" element={<FifthProjectStyleguide />} />
        </Route>

        <Route path="sixth-project" element={<SixthProject />} />
      </Routes>
    </>
  );
}

function MainIndex() {
  const [sideNav, setSideNav] = useState(false);

  return (
    <>
      <Pc>
        <Swiper
          direction={"horizontal"}
          spaceBetween={30}
          modules={[Mousewheel, Pagination]}
          mousewheel={true}
          pagination={{
            clickable: true
          }}
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

          <div
            slot="container-end"
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

          <div
            slot="container-end"
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

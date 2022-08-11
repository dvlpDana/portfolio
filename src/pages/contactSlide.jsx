import React, { useEffect, useState } from "react";
import styles from "./css/contactSlide.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

import ToggleButton from "../components/toggleButton";
import SideNav from "../components/sideNav";
import { ContactMe } from "../components/contactMe";

function ContactSlide() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out"
    });
    AOS.refresh();
  }, []);

  const [sideNav, setSideNav] = useState(false);

  // className={`${styles.}`}

  return (
    <section className={`${styles.secBg}`}>
      <h2 className={`${styles.contactTitle}`}>
        스스로 찾아 배고 깊이 있게 생각해서 개발하는
        <br />
        <strong>퍼블리셔 / 개발자</strong>를 찾고 계신가요?
      </h2>
      <div className={`${styles.contactCon}`}>
        <div className={`${styles.contactTxt}`}>
          <p>
            개발자는 평생 공부를 하며 끊임없이 배워야 하는 직업이라고 생각합니다. <br />
            궁금한 것을 알기 위해 스스로 찾아 배우고 <br /> 
            개발 과정에서 '어떻게(HOW)' 뿐만 아니라 <br/> 
            '왜(WHY)', '무엇을(WHAT)', '누가(WHO)', '언제(WHEN)'까지 <br/>
            생각하여 사용자를 위한 최선의 코드를 짜는 개발자로 나아가고자 합니다.
          </p>
          <span>저의 여정에 관심이 있다면 <strong>다음의 연락처로</strong> 연락주세요</span>
          <div className={`${styles.contactLinkCon}`}>
            <div className={`${styles.contactLinkBtn}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/icons/kakao.png`}
                alt="kakao"
              />
              <span>colleksql</span>
            </div>
            <div className={`${styles.contactLinkBtn}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/icons/slack.png`}
                alt="slack"
              />
              <span>colleksql3@gmail.com</span>
            </div>
          </div>
        </div>
        <div className={`${styles.contactMe}`}>
          <ContactMe />
        </div>
      </div>

      <div
        onClick={() => {
          setSideNav(!sideNav);
        }}
      >
        <ToggleButton shadow="rgba(254, 225, 173, 0.5)" background="#ffc75f" />
      </div>
      {sideNav === true ? (
        <SideNav sideNav={sideNav} setSideNav={setSideNav} />
      ) : null}
    </section>
  );
}

export default ContactSlide;

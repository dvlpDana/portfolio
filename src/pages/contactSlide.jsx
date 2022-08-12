import React, { useEffect, useState } from "react";
import styles from "./css/contactSlide.module.css";

import { ContactMe } from "../components/contactMe";
import { useSwiperSlide } from "swiper/react";

function ContactSlide() {

   const swiperSlide = useSwiperSlide();

  return (
    <section className={`${styles.secBg}`}>
      <div className={`${styles.contactSlideCon}`}>
        <h2 className={swiperSlide.isActive ? `${styles.contactTitle} ${styles.fadeIn}` : `${styles.contactTitle}`}>
          스스로 찾아 배우고 깊이 있게 생각해서 개발하는
          <br />
          <strong>퍼블리셔 / 개발자</strong>를 찾고 계신가요?
        </h2>
        <div className={`${styles.contactCon}`}>
          <div className={swiperSlide.isActive ? `${styles.contactTxt}  ${styles.fadeLeft}`: `${styles.contactTxt}`}>
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
          <div className={swiperSlide.isActive ? `${styles.contactMe} ${styles.fadeRight}` : `${styles.contactMe}`}>
            <ContactMe />
          </div>
        </div>
      </div>

    </section>
  );
}

export default ContactSlide;

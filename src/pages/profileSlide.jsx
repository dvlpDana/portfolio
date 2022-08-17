import React from 'react';
import styles from './css/profileSlide.module.css';
import {useSwiperSlide} from 'swiper/react';
import { useState } from 'react';

function ProfileSlide() {

  const swiperSlide = useSwiperSlide();

  const[visible, setVisible] = useState("blog");

  return(
    <section className={`${styles.secBg}`}>
      <div className={swiperSlide.isActive ? `${styles.profileTxtCon } ${styles.active}` : `${styles.profileTxtCon} `}>
        <h2 className={`${styles.profileTitle}`}>
          <strong>심단비</strong>
          <span>"사용자를 위한 기능이 무엇인지 깊이 생각하고 설계하는 DEVELOPER"</span>
        </h2>
        <ol className={`${styles.profileCharacter}`}>
          <li>호기심이 많아 스스로 배우며, 새롭게 알게된 것을 다양하게 적용합니다.</li>
          <li>공부하며 알게 된 지식을 공유하여 나 혼자만이 아닌 함께 성장하는 삶을 지향합니다.</li>
          <li>문제가 생기면 원인을 파악하고, 관련 사례를 검색하여 끈기있게 해결합니다.</li>
          <li>다른 사람들이 읽기 편한 문서 작성하기를 선호합니다.</li>
          <li>유지 및 보수에 용이하도록 꼼꼼하게 설계하고 코딩합니다.</li>
        </ol>
        <h3>experience</h3>
        <p className={`${styles.profileExperience}`}>
          <span><strong>2022.03.21 - 2022.09.16</strong> 그린컴퓨터아트학원 [스마트웹&콘텐츠] 프론트엔드(Vanila JS, Node, React)</span>
          <span><strong>2022.05.18</strong> 정보처리기사 합격(필기)</span>
        </p>
      </div>
      <div className={swiperSlide.isActive ? `${styles.profileImgCon} ${styles.active}` : `${styles.profileImgCon}`}>
        <div className={`${styles.profileImg}`}>
          <img className={visible === "blog" ? `${styles.visible}` : `${styles.notVisible}`} src={`${process.env.PUBLIC_URL}/img/blog_screenShot.jpg`} alt="blog_screenShot"/>
          <img className={visible === "notion" ? `${styles.visible}` : `${styles.notVisible}`} src={`${process.env.PUBLIC_URL}/img/notion_screenShot.jpg`} alt="notion_screenShot"/>
        </div>
        <div className={`${styles.profileBtnCon}`}>
          <button className={`${styles.profileBtn} ${styles.purple}`} onMouseEnter={()=>{setVisible("blog")}} onClick={() => window.open('https://kinderteacherdvlp.tistory.com/', '_blank')}>blog link</button>
          <button className={`${styles.profileBtn} ${styles.violet}`} onMouseEnter={()=>{setVisible("notion")}} onClick={() => window.open('https://puzzle-cod-4e9.notion.site/_-a44e0b50b12548f4a4a24dfeeae0bc59', '_blank')}>notion link</button>
        </div>
      </div>
    </section>
  )
}

export default ProfileSlide;

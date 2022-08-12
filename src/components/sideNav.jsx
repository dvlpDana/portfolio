import React from "react";
import { useState } from "react";
import styles from './css/sideNav.module.css';
import { Link } from "react-router-dom";
import {useSwiper} from 'swiper/react';

function SideNav(props) {

  const swiper = useSwiper();

  return (
    <>
      <div className={`${styles.sideNavCon}`}>
        <ul className={`${styles.sideNav}`}>
          <li onClick={() => swiper.slideTo(1)}>profile</li>
          <li onClick={() => swiper.slideTo(2)}>skill</li>
          <li onClick={() => swiper.slideTo(3)}>portfolio</li>
          <li onClick={() => swiper.slideTo(4)}>contact</li>
        </ul>
        <div className={`${styles.linkBtnCon}`} >
          <div className={`${styles.linkBtn}`} onClick={() => window.open("https://github.com/dvlpDana", "_blank")}>
            <p><img src={`${process.env.PUBLIC_URL}/img/icons/github.png`} alt="github_link" /></p>
            <span>github</span>
          </div>
          <div className={`${styles.linkBtn}`} onClick={() => window.open("https://puzzle-cod-4e9.notion.site/_-a44e0b50b12548f4a4a24dfeeae0bc59", "_blank")}>
            <p><img src={`${process.env.PUBLIC_URL}/img/icons/notion.png`} alt="notion_link" /></p>
            <span>notion</span>
          </div>
          <div className={`${styles.linkBtn}`} onClick={() => window.open("https://dana-contact.slack.com/", "_blank")}>
            <p><img src={`${process.env.PUBLIC_URL}/img/icons/slack.png`} alt="slack_link" /></p>
            <span>slack</span>
          </div>
        </div>
        <div className={`${styles.linkEmail}`}>
          <p>EMAIL : colleksql3@gmail.com</p>
        </div>
        <div className={`${styles.backBtn}`} onClick={()=>{props.setSideNav(!props.sideNav);}}>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`${styles.darkArea}`}></div>
    </>
  )
}

export default SideNav;
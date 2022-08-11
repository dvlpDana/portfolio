import React from "react";
import { useState } from "react";
import styles from './css/sideNav.module.css';
import { Link } from "react-router-dom";

function SideNav(props) {
  // className={`${styles.}`}

  return (
    <>
      <div className={`${styles.sideNavCon}`}>
        <ul className={`${styles.sideNav}`}>
          <li>profile</li>
          <li>skill</li>
          <li>portfolio</li>
          <li>contact</li>
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
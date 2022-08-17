import React from "react";
import styles from "./css/sideNav.module.css";

import { useSwiper } from "swiper/react";

import CopyEmail from "./copyEmail";

import {CopyToClipboard} from 'react-copy-to-clipboard';

function SideNav(props) {
  const swiper = useSwiper();

  return (
    <>
      <div className={`${styles.sideNavCon}`}>
        <ul className={`${styles.sideNav}`}>
          <li
            onClick={() => {
              swiper.slideTo(1);
              props.setSideNav(!props.sideNav);
            }}
          >
            profile
          </li>
          <li
            onClick={() => {
              swiper.slideTo(2);
              props.setSideNav(!props.sideNav);
            }}
          >
            skill
          </li>
          <li
            onClick={() => {
              swiper.slideTo(3);
              props.setSideNav(!props.sideNav);
            }}
          >
            portfolio
          </li>
          <li
            onClick={() => {
              swiper.slideTo(4);
              props.setSideNav(!props.sideNav);
            }}
          >
            contact
          </li>
        </ul>
        <div className={`${styles.linkBtnCon}`}>
          <div
            className={`${styles.linkBtn}`}
            onClick={() => window.open("https://github.com/dvlpDana", "_blank")}
          >
            <p className={`${styles.linkBtnIcon}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/icons/github.png`}
                alt="github_link"
              />
            </p>
            <span>github</span>
          </div>
          <div
            className={`${styles.linkBtn}`}
            onClick={() =>
              window.open(
                "https://puzzle-cod-4e9.notion.site/_-a44e0b50b12548f4a4a24dfeeae0bc59",
                "_blank"
              )
            }
          >
            <p className={`${styles.linkBtnIcon}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/icons/notion.png`}
                alt="notion_link"
              />
            </p>
            <span>notion</span>
          </div>
          <div
            className={`${styles.linkBtn}`}
            onClick={() =>
              window.open("https://dana-contact.slack.com/", "_blank")
            }
          >
            <p className={`${styles.linkBtnIcon}`}>
              <img
                src={`${process.env.PUBLIC_URL}/img/icons/slack.png`}
                alt="slack_link"
              />
            </p>
            <span>slack</span>
          </div>
        </div>
        <CopyEmail />
        <div
          className={`${styles.backBtn}`}
          onClick={() => {
            props.setSideNav(!props.sideNav);
          }}
        >
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={`${styles.darkArea}`}></div>
    </>
  );
}

export default SideNav;

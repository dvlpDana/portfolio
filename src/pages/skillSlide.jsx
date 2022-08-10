import React, { useEffect, useState } from "react";
import styles from "./css/skillSlide.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

import ToggleButton from "../components/toggleButton";
import SideNav from "../components/sideNav";

function SkillSlide() {
  // className={`${styles.}`}

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out"
    });
    AOS.refresh();
  }, []);

  const [sideNav, setSideNav] = useState(false);

  return (
    <section className={`${styles.secBg}`}>
      <ol className={`${styles.skillListCon}`}>
        <li className={`${styles.skillList}`} data-aos="fade-right">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/icons/html.png`}
              alt="html_icon"
            />
          </div>
          <p>
            웹 표준을 준수하고 시멘틱 태그를 사용하여 가독성 높은 문서를
            작성합니다
          </p>
        </li>
        <li className={`${styles.skillList}`} data-aos="fade-right">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/icons/JS.png`}
              alt="html_icon"
            />
          </div>
          <p>
            웹 표준을 준수하고 시멘틱 태그를 사용하여 가독성 높은 문서를
            작성합니다
          </p>
        </li>
        <li className={`${styles.skillList}`} data-aos="fade-right">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/icons/css.png`}
              alt="html_icon"
            />
          </div>
          <p>
            웹 표준을 준수하고 시멘틱 태그를 사용하여 가독성 높은 문서를
            작성합니다
          </p>
        </li>
        <li className={`${styles.skillList}`} data-aos="fade-right">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/icons/react.png`}
              alt="html_icon"
            />
          </div>
          <p>
            웹 표준을 준수하고 시멘틱 태그를 사용하여 가독성 높은 문서를
            작성합니다
          </p>
        </li>
        <li className={`${styles.skillList}`} data-aos="fade-left">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/icons/Jquery.png`}
              alt="html_icon"
            />
          </div>
          <p>
            웹 표준을 준수하고 시멘틱 태그를 사용하여 가독성 높은 문서를
            작성합니다
          </p>
        </li>
        <li className={`${styles.skillList}`} data-aos="fade-left">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/icons/illustrator.png`}
              alt="html_icon"
            />
          </div>
          <p>
            웹 표준을 준수하고 시멘틱 태그를 사용하여 가독성 높은 문서를
            작성합니다
          </p>
        </li>
        <li className={`${styles.skillList}`} data-aos="fade-left">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/icons/photoshop.png`}
              alt="html_icon"
            />
          </div>
          <p>
            웹 표준을 준수하고 시멘틱 태그를 사용하여 가독성 높은 문서를
            작성합니다
          </p>
        </li>
        <li className={`${styles.skillList}`} data-aos="fade-left">
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/icons/git.png`}
              alt="html_icon"
            />
          </div>
          <p>
            웹 표준을 준수하고 시멘틱 태그를 사용하여 가독성 높은 문서를
            작성합니다
          </p>
        </li>
      </ol>
      <div onClick={() => {
          setSideNav(!sideNav);
        }}>
        <ToggleButton
          shadow="rgba(214, 93, 177, 0.16)"
          background="#d65db1"
        />
      </div>
       {sideNav === true ? (<SideNav sideNav={sideNav} setSideNav={setSideNav} />) : null}
    </section>
  );
}

export default SkillSlide;

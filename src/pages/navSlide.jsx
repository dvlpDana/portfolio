import React from 'react';
import styles from './css/navSlide.module.css';
import {useSwiper} from 'swiper/react';

function NavSlide() {

  const swiper = useSwiper();

  return (
    <section className={`${styles.secBg}`}>
      <h2 className={`${styles.explainTxt}`}>
        <span>퍼즐 맞추듯</span>
        <span>
          <strong>세밀</strong>하게
        </span>
        <span>개발합니다</span>
      </h2>
      <div className={`${styles.questionMark}`}>
        <img
          className={`${styles.puzzleSlice} ${styles.first}`}
          src={`${process.env.PUBLIC_URL}/img/svg/puzzle_01.svg`}
          alt="puzzle"
        />
        <img
          className={`${styles.puzzleSlice} ${styles.second}`}
          src={`${process.env.PUBLIC_URL}/img/svg/puzzle_02.svg`}
          alt="puzzle"
        />
        <img
          className={`${styles.puzzleSlice} ${styles.third}`}
          src={`${process.env.PUBLIC_URL}/img/svg/puzzle_03.svg`}
          alt="puzzle"
        />
        <img
          className={`${styles.puzzleSlice} ${styles.fourth}`}
          src={`${process.env.PUBLIC_URL}/img/svg/puzzle_04.svg`}
          alt="puzzle"
        />
        <img
          className={`${styles.puzzleSlice} ${styles.fifth}`}
          src={`${process.env.PUBLIC_URL}/img/svg/puzzle_05.svg`}
          alt="puzzle"
        />
        <img
          className={`${styles.puzzleSlice} ${styles.sixth}`}
          src={`${process.env.PUBLIC_URL}/img/svg/puzzle_06.svg`}
          alt="puzzle"
        />
        <img
          className={`${styles.puzzleSlice} ${styles.seventh}`}
          src={`${process.env.PUBLIC_URL}/img/svg/puzzle_07.svg`}
          alt="puzzle"
        />
        <img
          className={`${styles.puzzleSlice} ${styles.eighth}`}
          src={`${process.env.PUBLIC_URL}/img/svg/puzzle_08.svg`}
          alt="puzzle"
        />
      </div>
      <div className={`${styles.puzzleNav}`}>
        <div onClick={() => swiper.slideTo(1)}><img src={`${process.env.PUBLIC_URL}/img/svg/menu_01.svg`} alt="menu"/></div>
        <div onClick={() => swiper.slideTo(2)}><img src={`${process.env.PUBLIC_URL}/img/svg/menu_02.svg`} alt="menu"/></div>
        <div onClick={() => swiper.slideTo(3)}><img src={`${process.env.PUBLIC_URL}/img/svg/menu_03.svg`} alt="menu"/></div>
        <div onClick={() => swiper.slideTo(4)}><img src={`${process.env.PUBLIC_URL}/img/svg/menu_04.svg`} alt="menu"/></div>
      </div>
      <div className={`${styles.abstractBg}`}>
      <img
          src={`${process.env.PUBLIC_URL}/img/background/abstract_1.svg`}
          alt="abstract"
        />
      <img
          src={`${process.env.PUBLIC_URL}/img/background/abstract_5.svg`}
          alt="abstract"
        />
      <img
          src={`${process.env.PUBLIC_URL}/img/background/abstract_7.svg`}
          alt="abstract"
        />
      <img
          src={`${process.env.PUBLIC_URL}/img/background/abstract_9.svg`}
          alt="abstract"
        />
      </div>
    </section>
  );
}

export default NavSlide;
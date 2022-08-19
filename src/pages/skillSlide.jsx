import styles from "./css/skillSlide.module.css";
import { useSwiperSlide } from "swiper/react";

function SkillSlide() {

  const swiperSlide = useSwiperSlide();

  return (
    <section className={`${styles.secBg}`}>
      <ol className={`${styles.skillListCon}`}>
        <li className={swiperSlide.isActive ? `${styles.skillList} ${styles.active}` :  `${styles.skillList}`}>
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
        <li className={swiperSlide.isActive ? `${styles.skillList} ${styles.active}` :  `${styles.skillList}`}>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/icons/JS.png`}
              alt="html_icon"
            />
          </div>
          <p>
            Vanila JS를 사용하여 불필요한 코드를 배제하고 필요한 기능을
            구현합니다
          </p>
        </li>
        <li className={swiperSlide.isActive ? `${styles.skillList} ${styles.active}` :  `${styles.skillList}`}>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/icons/css.png`}
              alt="html_icon"
            />
          </div>
          <p>
            다양한 스타일을 적용하고 미디어쿼리를 사용하여 반응형 웹을
            제작합니다
          </p>
        </li>
        <li className={swiperSlide.isActive ? `${styles.skillList} ${styles.active}` :  `${styles.skillList}`}>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/icons/react.png`}
              alt="html_icon"
            />
          </div>
          <p>
            React Library를 활용하여 컴포넌트 기반의 웹사이트를 효율적으로
            개발합니다
          </p>
        </li>
        <li className={swiperSlide.isActive ? `${styles.skillList} ${styles.active}` :  `${styles.skillList}`}>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/icons/Jquery.png`}
              alt="html_icon"
            />
          </div>
          <p>
            기본 명령어를 이해하고 시간 대비 효율적으로 Interactive Effect를
            구현합니다
          </p>
        </li>
        <li className={swiperSlide.isActive ? `${styles.skillList} ${styles.active}` :  `${styles.skillList}`}>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/icons/illustrator.png`}
              alt="html_icon"
            />
          </div>
          <p>간단한 로고 및 아이콘을 제작할 수 있습니다</p>
        </li>
        <li className={swiperSlide.isActive ? `${styles.skillList} ${styles.active}` :  `${styles.skillList}`}>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/icons/photoshop.png`}
              alt="html_icon"
            />
          </div>
          <p>웹 개발에 적절하게 이미지를 편집하고 수정할 수 있습니다</p>
        </li>
        <li className={swiperSlide.isActive ? `${styles.skillList} ${styles.active}` :  `${styles.skillList}`}>
          <div>
            <img
              src={`${process.env.PUBLIC_URL}/img/icons/git.png`}
              alt="html_icon"
            />
          </div>
          <p>
            git 명령어를 기반으로 github repository에 저장하여 소스 형상 관리를
            할 수 있습니다
          </p>
        </li>
      </ol>
    </section>
  );
}

export default SkillSlide;

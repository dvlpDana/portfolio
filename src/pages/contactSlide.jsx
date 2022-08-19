import React, { useRef, useState } from "react";
import styles from "./css/contactSlide.module.css";

import emailjs from "@emailjs/browser";
import { useSwiperSlide } from "swiper/react";

function ContactSlide() {
  const swiperSlide = useSwiperSlide();

  // e-mail validation check
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qdo2opg",
        "template_cqw78qq",
        form.current,
        "esQPuyyAvqcchgZ7X"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setMailContent({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

    setContactMeModal(!contactMeModal);
  };

  const [mailContent, setMailContent] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const { name, email, phone, message } = mailContent;

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setMailContent({ ...mailContent, [name]: value });
  };

  const [checkBoxActive, setCheckBoxActive] = useState(false);
  const [checked, reChecked] = useState("");  

  const isCheckBoxClicked = () => {
    setCheckBoxActive(!checkBoxActive);
  };

  const isValidEmail = email.includes("@") && email.includes(".");

  const isValidInput =
    name.length >= 1 && email.length >= 1 && phone.length >= 1;

  const getIsActive = isValidEmail && isValidInput && checkBoxActive === true;

  const handleButtonValid = () => {
    if (!isValidEmail || !isValidInput || !checkBoxActive) {
      alert("빈 칸을 기입한 뒤, 전송해주세요.");
    } else{
      HTMLFormElement.reset()
    }
  };

  //contactMeModal

  const [contactMeModal, setContactMeModal] = useState(false);

  return (
    <section className={`${styles.secBg}`}>
      <div className={`${styles.contactSlideCon}`}>
        <h2
          className={
            swiperSlide.isActive
              ? `${styles.contactTitle} ${styles.fadeIn}`
              : `${styles.contactTitle}`
          }
        >
          스스로 찾아 배우고 깊이 있게 생각해서 개발하는
          <br />
          <strong>퍼블리셔 / 개발자</strong>를 찾고 계신가요?
        </h2>
        <div className={`${styles.contactCon}`}>
          <div
            className={
              swiperSlide.isActive
                ? `${styles.contactTxt}  ${styles.fadeLeft}`
                : `${styles.contactTxt}`
            }
          >
            <p>
              개발자는 평생 공부를 하며 끊임없이 배워야 하는 직업이라고
              생각합니다. <br />
              궁금한 것을 알기 위해 스스로 찾아 배우고 <br />
              개발 과정에서 '어떻게(HOW)' 뿐만 아니라 <br />
              '왜(WHY)', '무엇을(WHAT)', '누가(WHO)', '언제(WHEN)'까지 <br />
              생각하여 사용자를 위한 최선의 코드를 짜는 개발자로 나아가고자
              합니다.
            </p>
            <span>
              저의 여정에 관심이 있다면 <strong>다음의 연락처로</strong>{" "}
              연락주세요
            </span>
            <div className={`${styles.contactLinkCon}`}>
              <div
                className={`${styles.contactLinkBtn}`}
                onClick={() =>
                  window.open("https://open.kakao.com/o/swu4Adwe/", "_blank")
                }
              >
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/kakao.png`}
                  alt="kakao"
                />
                <span>colleksql</span>
              </div>
              <div
                className={`${styles.contactLinkBtn}`}
                onClick={() =>
                  window.open("https://dana-contact.slack.com/", "_blank")
                }
              >
                <img
                  src={`${process.env.PUBLIC_URL}/img/icons/slack.png`}
                  alt="slack"
                />
                <span>colleksql3@gmail.com</span>
              </div>
            </div>
          </div>
          <div
            className={
              swiperSlide.isActive
                ? `${styles.contactMe} ${styles.fadeRight}`
                : `${styles.contactMe}`
            }
          >
            <div className={`${styles.emailForm}`}>
              <h3>send to e-mail</h3>
              <form ref={form} onSubmit={sendEmail}>
                <div className={`${styles.name}`}>
                  <label>이름</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="이름을 입력해주세요"
                    autoComplete="off"
                    value={name}
                    onChange={onChangeInput}
                  />
                </div>
                <div className={`${styles.email}`}>
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="메일 주소를 입력해주세요"
                    autoComplete="off"
                    value={email}
                    onChange={onChangeInput}
                  />
                </div>
                <div className={`${styles.phone}`}>
                  <label>연락처</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="연락처를 입력해주세요"
                    autoComplete="off"
                    value={phone}
                    onChange={onChangeInput}
                  />
                </div>
                <div className={`${styles.message}`}>
                  <label>보낼 내용</label>
                  <textarea
                    name="message"
                    placeholder="내용을 입력해주세요"
                    value={message}
                    onChange={onChangeInput}
                  />
                </div>
                <div className={`${styles.agree}`}>
                  <input type="checkbox" onChange={isCheckBoxClicked} />
                  <label>
                    제공한 정보는 연락의 목적으로만 사용되며, 목적 이외의
                    용도로는 사용되지 않습니다. 메일 전송에 동의합니다.
                  </label>
                </div>
                <div className={`${styles.submit}`}>
                  <input
                    disabled={
                      isValidEmail && isValidInput && checkBoxActive
                        ? false
                        : true
                    }
                    type="submit"
                    value="Send"
                    onClick={handleButtonValid}
                    className={
                      getIsActive
                        ? `${styles.submitBtnAction} ${styles.submitBtn}`
                        : `${styles.submitBtnInaction} ${styles.submitBtn}`
                    }
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        {contactMeModal === true ? (
          <ContactMeModal
            contactMeModal={contactMeModal}
            setContactMeModal={setContactMeModal}
          />
        ) : null}
      </div>
    </section>
  );
}

function ContactMeModal(props) {
  return (
    <>
      <div className={`${styles.contactMeModalBg}`}></div>
      <div className={`${styles.contactMeModal}`}>
        <p>
          <span>메일을 성공적으로 보냈습니다.</span>
          <span>빠른 시일내로 답장드리겠습니다.</span>
          <span>감사합니다:&#41;</span>
        </p>
        <button
          className={`${styles.closeBtn}`}
          onClick={() => {
            props.setContactMeModal(!props.contactMeModal);
          }}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </>
  );
}

export default ContactSlide;

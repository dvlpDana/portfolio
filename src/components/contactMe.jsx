import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

import styles from "./css/contactMe.module.css";

export const ContactMe = () => {
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
    }
  };

  const [contactMeModal, setContactMeModal] = useState(false);

  return (
    <section className={`${styles.secBg}`}>
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
              제공한 정보는 연락의 목적으로만 사용되며, 목적 이외의 용도로는
              사용되지 않습니다. 메일 전송에 동의합니다.
            </label>
          </div>
          <div className={`${styles.submit}`}>
            <input
              disabled={
                isValidEmail && isValidInput && checkBoxActive ? false : true
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
      {contactMeModal === true ? (
        <ContactMeModal contactMeModal={contactMeModal} setContactMeModal={setContactMeModal} />
      ) : null}
    </section>
  );
};

function ContactMeModal(props) {
  return (
    <>
      <div className={`${styles.contactMeModal}`}>
        <p>
          <span>메일을 성공적으로 보냈습니다.</span>
          <span>빠른 시일내로 답장드리겠습니다.</span>
          <span>감사합니다:&#41;</span>
        </p>
        <button className={`${styles.closeBtn}`} onClick={()=>{props.setContactMeModal(!props.contactMeModal)}}>
          <span></span>
          <span></span>
        </button>
      </div>
    </>
  );
}

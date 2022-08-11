import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import styles from "./css/contactMe.module.css";

export const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qdo2opg', 'template_cqw78qq', form.current, 'esQPuyyAvqcchgZ7X')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    // className={`${styles.}`}

  return (
    <div className={`${styles.emailForm}`}>
      <h3>send to e-mail</h3>
      <form ref={form} onSubmit={sendEmail}>
        <div className={`${styles.name}`}>
          <label>이름</label>
          <input type="text" name="name" placeholder="이름을 입력해주세요" />
        </div>
        <div className={`${styles.email}`}>
          <label>Email</label>
          <input type="email" name="email" placeholder="메일 주소를 입력해주세요" />
        </div>
        <div className={`${styles.phone}`}>
          <label>연락처</label>
          <input type="number" name="phone" placeholder="연락처를 입력해주세요" />
        </div>
        <div className={`${styles.message}`}>
          <label>보낼 내용</label>
          <textarea name="message" placeholder="내용을 입력해주세요"/>
        </div>
        <div className={`${styles.submitBtn}`}>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

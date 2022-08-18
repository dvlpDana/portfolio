import React from "react";
import styled from "styled-components";

import { CopyToClipboard } from "react-copy-to-clipboard";

const StyledLinkEmail = styled.div`
  margin-top: 3rem;
  width: 350px;
  height: 50px;
  color: white;
  font-family: "pretendard-medium";
  -webkit-perspective: 230px;
  perspective: 230px;
  text-align: center;
  position: relative;
  span {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    line-height: 50px;
    vertical-align: middle;
    border-radius: 1rem;
    background: rgb(247, 150, 192);
    background: radial-gradient(
      circle,
      rgba(247, 150, 192, 1) 0%,
      rgba(118, 174, 241, 1) 100%
    );
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    -webkit-transition: 0.3s;
    transition: 0.3s;
    cursor: pointer;
  }
  span:nth-of-type(1) {
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    -webkit-transform: rotateX(90deg);
    -moz-transform: rotateX(90deg);
    transform: rotateX(90deg);
    -webkit-transform-origin: 50% 50% -20px;
    -moz-transform-origin: 50% 50% -20px;
    transform-origin: 50% 50% -20px;
    opacity: 0;
  }
  span:nth-of-type(2) {
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);
    -webkit-transform-origin: 50% 50% -20px;
    -moz-transform-origin: 50% 50% -20px;
    transform-origin: 50% 50% -20px;
  }
  &:hover {
    span:nth-of-type(1) {
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
        7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      -webkit-transform: rotateX(0deg);
      -moz-transform: rotateX(0deg);
      transform: rotateX(0deg);
      opacity: 1;
    }
    span:nth-of-type(2) {
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
        7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      color: transparent;
      -webkit-transform: rotateX(-90deg);
      -moz-transform: rotateX(-90deg);
      transform: rotateX(-90deg);
    }
  }
  @media screen and (max-width: 780px) {
    width: 250px;
    height: 50px;
  }
  @media screen and (max-width: 400px) {
    width: 200px;
    height : 40px;
    span {
      line-height : 40px
    }
  }
`;

function CopyEmail() {
  return (
    <>
      <CopyToClipboard text="colleksql3@gmail.com">
        <StyledLinkEmail>
          <span>클릭하여 이메일을 복사하세요:)</span>
          <span>EMAIL : colleksql3@gmail.com</span>
        </StyledLinkEmail>
      </CopyToClipboard>
    </>
  );
}

export default CopyEmail;

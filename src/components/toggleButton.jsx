import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: fixed;
  right: 1.5rem;
  top: 1.5rem;
  width: 50px;
  height: 50px;
  padding : 10px 0;
  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content : space-evenly;
  border-radius: 50%;
  cursor: pointer;
  z-index : 100;
  background-color: white;
  border-style: none;
  transition: 0.3s;
  box-shadow: 0 0 10px ${(props) => props.shadow};
  &:hover {
    background-color: ${(props) => props.background};
    span {
      background-color : white;
    }
  }
  span {
    width: 26px;
    height: 3px;
    border-radius: 1.5px;
    transition: 0.3s;
    background-color: ${(props) => props.background};
  }
  @media only screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
    padding : 5px 0;
    span {
      width: 20px;
      height: 2px;
    }
  }
`;

function ToggleButton({ shadow, background }) {
  return (
    <StyledButton shadow={shadow} background={background}>
      <span></span>
      <span></span>
      <span></span>
    </StyledButton>
  );
}

export default ToggleButton;

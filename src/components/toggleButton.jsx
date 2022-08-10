import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  position: fixed;
  right: 1rem;
  top: 1rem;
  width: 60px;
  height: 60px;
  padding : 10px 0;
  display : flex;
  flex-direction: column;
  align-items: center;
  justify-content : space-evenly;
  border-radius: 50%;
  cursor: pointer;
  background-color: transparent;
  border-style: none;
  transition: 0.3s;
  box-shadow: 0 0 10px ${(props) => props.shadow};
  & : hover {
    background-color: ${(props) => props.background};
  }
  span {
    width: 30px;
    height: 3px;
    border-radius: 1.5px;
    transition: 0.3s;
    background-color: ${(props) => props.background};
    & : hover {
      background-color: white;
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

import React from "react";
import styled from "styled-components";

export default function TopBar() {
  return (
    <TopWrapper>
      <h2>We offer free UK shipping on all orders above £20</h2>
    </TopWrapper>
  );
}

const TopWrapper = styled.div`
  width: 100%;
  height: 2rem;
  background-color: lightblue;
  text-align: center;
  position: fixed;
  z-index: 200;
  animation: nav-load 300ms ease-in 100ms;

  @keyframes nav-load {
    0% {
      transform: translateY(-100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  & h2 {
    font-family: ${(props) => props.theme.font.main};
  }
`;

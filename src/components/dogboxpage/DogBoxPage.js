import React from "react";
import styled from "styled-components";

export default function DogBoxPage() {
  return (
    <DogBoxPageWrapper>
      <h1>Dog box page</h1>
    </DogBoxPageWrapper>
  );
}

const DogBoxPageWrapper = styled.div`
  padding: 2rem;
  margin: none;
  animation-name: pageLoad;
  animation-duration: 750ms;
  animation-timing-function: ease-in;
  animation-delay: 0ms;
  animation-fill-mode: forwards;

  @keyframes pageLoad {
    0% {
      opacity: 0;
      transform: rotateX(-10deg);
    }

    100% {
      opacity: 1;
      transform: rotateX(0deg);
    }
  }
  & h1 {
    text-align: center;
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.sizing.large};
  }
`;

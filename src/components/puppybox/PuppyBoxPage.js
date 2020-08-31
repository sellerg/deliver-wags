import React from "react";
import styled from "styled-components";

import puppyboxblue from "../../assets/puppy-boxes/puppyboxblue.png";
import puppyboxpink from "../../assets/puppy-boxes/puppyboxpink.png";

export default function PuppyBoxPage() {
  return (
    <PuppyBoxPageWrapper>
      <h1>Puppy Boxes</h1>
      <p>
        Fun, unique and colourful boxes that will keep the new addition to your
        family happy and engaged for days to come!
      </p>
      <ProductWrapper>
        <ImageWrapper>
          <h1>Puppy Box (blue)</h1>
          <h1>£29</h1>
          <Img src={puppyboxblue} alt="birthday-box1" />
          <ButtonWrapper>
            <button>Add to basket</button>
          </ButtonWrapper>
        </ImageWrapper>
        <ImageWrapper>
          <h1>Puppy Box (pink)</h1>
          <h1>£29</h1>
          <Img src={puppyboxpink} alt="birthday-box2" />
          <ButtonWrapper>
            <button>Add to basket</button>
          </ButtonWrapper>
        </ImageWrapper>
      </ProductWrapper>
    </PuppyBoxPageWrapper>
  );
}

const PuppyBoxPageWrapper = styled.div`
  padding: 2rem 0;
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
  & p {
    padding: 2rem;
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.sizing.medium};
    text-align: center;
  }

  & h1 {
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.sizing.large};
    text-align: center;
    padding: none;
    margin: none;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  & button {
    padding: 0.5rem;
    width: 15rem;
    border: none;
    background-color: lightblue;
    font-size: ${(props) => props.theme.sizing.medium};
    margin: 2rem;
    font-family: ${(props) => props.theme.font.main};
    &:hover {
      cursor: pointer;
      filter: brightness(80%);
    }
  }
`;

const Img = styled.img`
  width: auto;
  max-width: 20rem;
`;

const ImageWrapper = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

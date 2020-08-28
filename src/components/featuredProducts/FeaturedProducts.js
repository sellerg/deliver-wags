import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import dogbox1 from "../../assets/Dog-Box.jpg";
import dogbox2 from "../../assets/Dog-Box2.jpg";
import pupbox from "../../assets/Puppy-Box.jpg";

export default function FeaturedProducts(props) {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <FeaturedProductsWrapper>
      <h1>Get a themed box every month</h1>
      <ImageWrapper ref={ref} inView={inView}>
        <div>
          <img src={dogbox1} alt="dogbox" />
          <p>Dog Box 1</p>
        </div>
        <div>
          <img src={dogbox2} alt="dogbox2" />
          <p>Dog Box 2</p>
        </div>
        <div>
          <img src={pupbox} alt="pupbox" />
          <p>Puppy Box</p>
        </div>
      </ImageWrapper>
      <ButtonWrapper>
        <button>Check out more of our themes</button>
      </ButtonWrapper>
    </FeaturedProductsWrapper>
  );
}

const FeaturedProductsWrapper = styled.div`
  text-align: center;
  padding: 2rem;
  & h1 {
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.sizing.large};
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 2rem;

  & img {
    width: auto;
    max-width: 20rem;
    transform: ${(props) =>
      props.inView ? "translateX(0)" : "translateX(-100%)"};
    opacity: ${(props) => (props.inView ? "1" : "0")};
    transition: transform 0.3s ease-out;
  }

  & p {
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.sizing.large};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  & button {
    margin-top: 2rem;
    padding: 0.5rem;
    font-size: ${(props) => props.theme.sizing.medium};
    font-family: ${(props) => props.theme.font.main};
    background: lightblue;
    border: none;
  }
`;

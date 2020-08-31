import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import background from "../../assets/barkbox.jpg";

export default function Banner() {
  return (
    <BannerWrapper>
      <HeadingWrapper>
        <h1>
          Hand picked, homemade and personalised doggie joy Delivered straight
          to your door!
        </h1>
        <p>
          Themed boxes, birthday boxes, birthday cakes, homemade treats, treat
          jars and more.
        </p>
        <ButtonWrapper>
          <Link to="/subscription-box">
            <button>Get Started</button>
          </Link>
        </ButtonWrapper>
      </HeadingWrapper>
      <ImageWrapper>
        <img src={background} ailt="barkbox" />
      </ImageWrapper>
    </BannerWrapper>
  );
}

const BannerWrapper = styled.div`
  z-index: 0;
  background-color: #f1f9fc;
  height: 60vh;
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  @media ${(props) => props.theme.breakpoints.mobile} {
    flex-direction: column;
    height: auto;
    text-align: center;
  }
`;

const HeadingWrapper = styled.div`
  width: 60%;
  padding: 2rem;
  color: black;
  font-family: ${(props) => props.theme.font.main};
  & h1 {
    font-size: ${(props) => props.theme.sizing.large};
    padding-bottom: 1rem;
  }
  & p {
    font-size: ${(props) => props.theme.sizing.medium};
    padding-bottom: 2rem;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & button {
    padding: 0.5rem;
    font-size: ${(props) => props.theme.sizing.medium};
    background-color: rgba(241, 249, 252, 0.3);
    font-family: ${(props) => props.theme.font.main};
    color: black;
    border: 2px solid black;
    &:hover {
      cursor: pointer;
      filter: brightness(50%);
    }
  }
`;

const ImageWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  & img {
    max-width: 50vw;
    @media ${(props) => props.theme.breakpoints.mobile} {
      max-width: 90vw;
    }
  }
`;

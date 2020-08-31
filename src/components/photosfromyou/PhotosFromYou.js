import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import photosfromyou from "../../assets/photos-taken-by-you.PNG";

export default function PhotosFromYou() {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0,
  });

  return (
    <PhotosFromYouWrapper>
      <h1>Photos from you</h1>
      <p>
        Share your most creative photos of your box, treats or toys with us
        every month <b>@chesters_treats</b>
      </p>
      <ImageWrapper ref={ref} inView={inView}>
        <img src={photosfromyou} alt="photosfromyou" />
      </ImageWrapper>
    </PhotosFromYouWrapper>
  );
}

const PhotosFromYouWrapper = styled.div`
  padding: 3rem;
  margin-top: 0;
  background-image: linear-gradient(to bottom, lightblue, white);
  transform: translateY(-4px);
  & h1 {
    text-align: center;
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.sizing.xxLarge};
    margin-bottom: 2rem;
  }

  & p {
    text-align: center;
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.sizing.medium};
    margin-bottom: 2rem;
  }

  & img {
    width: 70vw;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  transform: ${(props) => (props.inView ? "scale(1)" : "scale(0.9)")};
  opacity: ${(props) => (props.inView ? "1" : "0")};
  transition: transform 500ms ease-out;
`;

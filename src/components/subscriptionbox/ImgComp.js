import React from "react";
import styled from "styled-components";

export default function ImgComp({ src }) {
  return <Img src={src} alt="slide-img"></Img>;
}

const Img = styled.img`
  width: 100%;
  height: auto;
`;

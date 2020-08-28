import React, { useState } from "react";
import styled from "styled-components";

import ImgComp from "./ImgComp";
import i1 from "../../assets/subscriptionbox/sliderimage1.jpeg";
import i2 from "../../assets/subscriptionbox/sliderimage2.jpg";
import i3 from "../../assets/subscriptionbox/sliderimage3.jpg";
import i4 from "../../assets/subscriptionbox/sliderimage4.jpg";
import i5 from "../../assets/subscriptionbox/sliderimage5.jpg";

export default function Slider() {
  let sliderArr = [
    <ImgComp src={i3} />,
    <ImgComp src={i2} />,
    <ImgComp src={i1} />,
    <ImgComp src={i4} />,
    <ImgComp src={i5} />,
  ];
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
  };
  const goRight = () => {
    x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <SliderWrapper>
      {sliderArr.map((image, idx) => {
        return (
          <Slide key={idx} x={x}>
            {image}
          </Slide>
        );
      })}
      <GoLeft onClick={goLeft}>
        <i class="fas fa-chevron-left"></i>
      </GoLeft>
      <GoRight onClick={goRight}>
        <i class="fas fa-chevron-right"></i>
      </GoRight>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  position: relative;
  width: 90%;
  height: 35vw;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  overflow: hidden;
  @media ${(props) => props.theme.breakpoints.mobile} {
    height: 70vw;
    width: 100%;
  }
`;

const Slide = styled.div`
  min-width: 100%;
  height: 80%;
  transform: translateX(${(props) => props.x}%);
  transition: 0.5s;
  overflow: hidden;
`;

const GoLeft = styled.button`
  position: absolute;
  top: 50%;
  height: 80%;
  left: 0px;
  transform: translateY(-50%);
  width: 10%;
  background: none;
  border: none;
  outline: none;
  & i {
    font-size: 2vw;
  }
  &:focus {
    outline: none;
  }
  transition: 0.5s;

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
    color: whitesmoke;
  }
`;

const GoRight = styled.button`
  position: absolute;
  top: 50%;
  height: 80%;
  left: 90%;
  transform: translateY(-50%);
  width: 10%;
  background: none;
  border: none;
  & i {
    font-size: 2vw;
  }
  &:focus {
    outline: none;
  }
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.3);
    color: whitesmoke;
  }
`;

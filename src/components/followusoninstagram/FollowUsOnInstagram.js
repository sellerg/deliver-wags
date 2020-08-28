import React from "react";
import styled from "styled-components";
import { FaInstagramSquare } from "react-icons/fa";
import { useInView } from "react-intersection-observer";

export default function FollowUsOnInstagram() {
  const [ref, inView, entry] = useInView({ threshold: 0 });

  return (
    <FollorUsOnInstagramWrapper>
      <h1>Follow us on Instagram</h1>
      <ButtonWrapper ref={ref} inView={inView}>
        <button>
          <div>Follow Us </div>
          <IconWrapper>
            <FaInstagramSquare />
          </IconWrapper>
        </button>
      </ButtonWrapper>
    </FollorUsOnInstagramWrapper>
  );
}

const FollorUsOnInstagramWrapper = styled.div`
  padding: 3rem;

  & h1 {
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.sizing.xxLarge};
    margin-bottom: 2rem;
    text-align: center;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;

  & button {
    padding: 1rem;
    font-size: ${(props) => props.theme.sizing.medium};
    font-family: ${(props) => props.theme.font.main};
    background-color: lightblue;
    color: ${(props) => props.theme.font.text};
    border: none;
    display: flex;
    align-items: center;

    transform: ${(props) =>
      props.inView ? "translateX(0)" : "translateX(-100%)"};
    opacity: ${(props) => (props.inView ? "1" : "0")};
    transition: transform 300ms ease-out;

    &:hover {
      filter: brightness(70%);
      cursor: pointer;
    }
  }

  & i {
    width: 2rem;
    height: 2rem;
    color: black;
  }
`;

const IconWrapper = styled.div`
  padding-left: 1rem;
  padding-top: 0.4rem;
`;

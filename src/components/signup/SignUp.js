import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

export default function SignUp() {
  const [ref, inView] = useInView({ threshold: 0 });
  return (
    <SignUpWrapper ref={ref} inView={inView}>
      <h1>
        Sign up for <b>exclusive</b> news and discounts
      </h1>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <button>Sign Up</button>
      </form>
    </SignUpWrapper>
  );
}

const SignUpWrapper = styled.div`
  background-color: lightgrey;
  width: 100%;

  & h1 {
    text-align: center;
    padding: 2rem;
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.sizing.xxLarge};
  }

  & form {
    padding: 2rem;
    display: flex;
    flex-direction: column;
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 1fr 2fr 1fr;
    transform: ${(props) => (props.inView ? "scale(1)" : "scale(0.9)")};
    opacity: ${(props) => (props.inView ? "1" : "0")};
    transition: transform 300ms ease-out;

    @media ${(props) => props.theme.breakpoints.mobile} {
      grid-template-columns: 1fr 10fr 1fr;
    }
  }

  & input {
    font-size: ${(props) => props.theme.sizing.medium};
    padding: 1rem;
    font-family: ${(props) => props.theme.font.main};
    margin: 2rem;
    grid-column: 2 / 3;
  }

  & button {
    font-size: ${(props) => props.theme.sizing.medium};
    padding: 1rem;
    font-family: ${(props) => props.theme.font.main};
    margin: 2rem;
    border: none;
    background-color: lightblue;
    grid-column: 2 / 3;

    &:hover {
      filter: brightness(70%);
      cursor: pointer;
    }
  }
`;

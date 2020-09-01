import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../../assets/deliverwagslogo5.png";

export default function NavBar(props) {
  return (
    <NavWrapper>
      <Hamburger onClick={props.handleHamburgerClick}>
        <div></div>
        <div></div>
        <div></div>
      </Hamburger>
      <Logo to="/">
        <img src={logo} alt="logo" />
        {/* <h1>Deliver Wags</h1> */}
      </Logo>
      <Spacer />
      <NavLinks>
        <ul>
          <li>
            <A to="/dog-boxes">
              Dog Boxes<i class="fas fa-chevron-down"></i>
            </A>
            <ul>
              <li>
                <A1 to="/subscription-box">Subscription Box</A1>
              </li>
              <li>
                <A1 to="/puppy-box">Puppy Box</A1>
              </li>
              <li>
                <A1 to="/gift-box">Gift and Birthday Boxes</A1>
              </li>
              <li>
                <A1 to="/our-themes">Our Themes</A1>
              </li>
            </ul>
          </li>
          <li>
            <A to="/treats">Treats and cakes</A>
          </li>
          <li>
            <Anc
              href="https://thechesterdiaries.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Treat Jars
            </Anc>
          </li>
          <li>
            <A to="/cart">Cart (0)</A>
          </li>
        </ul>
      </NavLinks>
    </NavWrapper>
  );
}

const NavWrapper = styled.header`
  width: 100%;
  height: 5rem;
  padding: 2rem;
  display: flex;
  align-items: center;
  background-color: rgba(250, 250, 250, 0.8);
  box-shadow: 0 10px 10px -15px black;
  z-index: 2;
  position: --webkit-sticky;
  position: sticky;

  & h1 {
    font-family: ${(props) => props.theme.font.main};
  }
`;

const Logo = styled(Link)`
  display: flex;
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};

  &:hover {
    cursor: pointer;
  }

  & img {
    width: 15rem;
    margin-right: 1rem;
    margin-top: 1rem;
  }

  & h1 {
    font-size: ${(props) => props.theme.sizing.xLarge};
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const NavLinks = styled.div`
  & ul {
    display: flex;
    text-decoration: none;
    list-style-type: none;
    padding-top: 1rem;

    & li {
      animation-name: nav-link-load;
      animation-duration: 500ms;
      animation-timing-function: ease-in;
      animation-delay: 200ms;
      animation-fill-mode: forwards;
      transform: scale(0);

      @keyframes nav-link-load {
        0% {
          transform: scale(0);
        }
        90% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
        }
      }
    }

    & ul {
      position: absolute;
      flex-direction: column;
      top: 2rem;
      background-color: white;
      display: none;

      & li {
        margin-left: 0;
        padding: 1rem;
        width: 10rem;
        background-color: lightblue;
        transform: scale(1);
        animation: none;
        &:hover {
          filter: brightness(70%);
        }
      }
    }
  }

  & li {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    position: relative;
  }

  & ul li:hover > ul {
    display: block;
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    display: none;
  }
`;

const Anc = styled.a`
  text-decoration: none;
  list-style-type: none;
  font-family: ${(props) => props.theme.font.main};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.sizing.medium};
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.text};
  }
`;

const A = styled(Link)`
  text-decoration: none;
  list-style-type: none;
  font-family: ${(props) => props.theme.font.main};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.sizing.medium};
  display: block;
  width: 100%;
  height: 100%;
  & i {
    margin-left: 0.5rem;
    color: grey;
    font-size: ${(props) => props.theme.sizing.small};
    vertical-align: center;
  }
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.text};
  }
`;

const A1 = styled(Link)`
  text-decoration: none;
  list-style-type: none;
  font-family: ${(props) => props.theme.font.main};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.sizing.medium};
  display: block;
`;

const Hamburger = styled.button`
  display: none;
  @media ${(props) => props.theme.breakpoints.mobile} {
    background-color: transparent;
    height: 3rem;
    width: 2rem;
    border: none;
    margin: none;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-right: 2rem;

    &:hover,
    &:focus {
      cursor: pointer;
      outline: none;
    }

    & div {
      background-color: black;
      width: 100%;
      height: 3px;
    }
  }
`;

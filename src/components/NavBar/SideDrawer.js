import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import logo from "../../assets/deliverwagslogo3.png";

export default function SideDrawer(props) {
  return (
    <SideDrawerContainer showSideBar={props.sideDrawOpen}>
      <Logo to="/" onClick={props.handleDropShadowClick}>
        <img src={logo} alt="logo" />
        {/* <h1>Chester's Treats</h1> */}
      </Logo>
      <UlContainer>
        <ul>
          <li>
            <A to="/dog-boxes" onClick={props.handleDropShadowClick}>
              Dog Boxes
            </A>
            <ul>
              <Li>
                <A to="/subscription-box" onClick={props.handleDropShadowClick}>
                  Subscription Box
                </A>
              </Li>
              <Li>
                <A to="/puppy-box" onClick={props.handleDropShadowClick}>
                  Puppy Box
                </A>
              </Li>
              <Li>
                <A to="/gift-box" onClick={props.handleDropShadowClick}>
                  Gift and Birthday Boxes
                </A>
              </Li>
              <Li>
                <A to="/our-themes" onClick={props.handleDropShadowClick}>
                  Our Themes
                </A>
              </Li>
            </ul>
          </li>
          <li>
            <A to="/treats" onClick={props.handleDropShadowClick}>
              Treats
            </A>
          </li>
          <li>
            <a
              href="https://thechesterdiaries.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Blog
            </a>
          </li>
          <li>
            <A to="/cart" onClick={props.handleDropShadowClick}>
              Cart (0)
            </A>
          </li>
        </ul>
      </UlContainer>
    </SideDrawerContainer>
  );
}

const SideDrawerContainer = styled.div`
  height: 100vh;
  width: 20rem;
  max-width: 70vw;
  background-color: white;
  z-index: 100;
  position: absolute;
  position: fixed;
  top: 0;
  left: 0;
  padding: 1rem;
  transform: ${(props) =>
    props.showSideBar ? "translateX(0)" : "translateX(-100%)"};
  transition: transform 0.3s ease-out;

  & li {
    list-style-type: none;
    padding: 0.5rem;
  }

  & a {
    text-decoration: none;
    list-style-type: none;
    font-family: ${(props) => props.theme.font.main};
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.sizing.medium};
    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.colors.text};
    }
  }
`;

const A = styled(Link)`
  text-decoration: none;
  list-style-type: none;
  font-family: ${(props) => props.theme.font.main};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.sizing.medium};
  &:hover {
    border-bottom: 1px solid ${(props) => props.theme.colors.text};
  }
`;

const Logo = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  &:hover,
  &:focus {
    cursor: pointer;
    text-decoration: none;
  }

  & img {
    width: 15rem;
    margin-right: 1rem;
  }

  & h1 {
    font-size: ${(props) => props.theme.sizing.xLarge};
    font-family: ${(props) => props.theme.font.main};
  }
`;

const UlContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  & ul li ul {
    background-color: rgba(245, 245, 245);
    width: 100%;
    transform: translateX(10px);
    margin-top: 1rem;
  }
`;

const Li = styled.li`
  border-bottom: 1px dashed lightgrey;
`;

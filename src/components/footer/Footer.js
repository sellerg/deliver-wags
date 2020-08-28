import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";

export default function Footer() {
  const [ref, inView] = useInView({ threshold: 0 });
  return (
    <FooterWrapper>
      <SocialIconWrapper ref={ref} inView={inView}>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="instagram" />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="facebook" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="twitter" />
        </a>
      </SocialIconWrapper>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: lightgrey;
`;

const SocialIconWrapper = styled.div`
  display: flex;

  & a {
    text-decoration: none;
    list-style-type: none;
    margin: 2rem;
    transform: ${(props) =>
      props.inView ? "translateY(0)" : "translateY(100%)"};
    opacity: ${(props) => (props.inView ? "1" : "0")};
    transition: transform 300ms ease-out 100ms;
  }

  & img {
    height: 2rem;
    &:hover {
      cursor: pointer;
      filter: brightness(0%);
      transform: translateY(-4px);
      transition: transform 0.3s ease-in-out;
    }
  }
`;

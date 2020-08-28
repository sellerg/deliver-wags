import React from "react";
import styled from "styled-components";

export default function OurThemesPage() {
  return (
    <OurThemesPageWrapper>
      <h1>Our Themes Page</h1>
    </OurThemesPageWrapper>
  );
}

const OurThemesPageWrapper = styled.div`
  padding: 2rem;
  margin: none;
  & h1 {
    text-align: center;
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.sizing.large};
  }
`;

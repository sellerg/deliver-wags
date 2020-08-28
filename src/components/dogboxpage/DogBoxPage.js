import React from "react";
import styled from "styled-components";

export default function DogBoxPage() {
  return (
    <DogBoxPageWrapper>
      <h1>Dog box page</h1>
    </DogBoxPageWrapper>
  );
}

const DogBoxPageWrapper = styled.div`
  padding: 2rem;
  margin: none;
  & h1 {
    text-align: center;
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.sizing.large};
  }
`;

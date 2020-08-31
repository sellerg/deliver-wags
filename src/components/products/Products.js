import React from "react";
import styled from "styled-components";

export default function Products() {
  return (
    <ProductsWrapper>
      <BoxWrapper>
        <h1>Subscription Boxes</h1>
      </BoxWrapper>
      <BoxWrapper>
        <h1>Puppy Boxes</h1>
      </BoxWrapper>
      <BoxWrapper>
        <h1>Birthday Boxes</h1>
      </BoxWrapper>
      <BoxWrapper>
        <h1>Birthday Cakes</h1>
      </BoxWrapper>
      <BoxWrapper>
        <h1>Homemade Treats</h1>
      </BoxWrapper>
      <BoxWrapper>
        <h1>Treat Jars</h1>
      </BoxWrapper>
    </ProductsWrapper>
  );
}

const ProductsWrapper = styled.div`
  border: 0;
  margin: 0;
  padding: 1rem 0;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;
  & div:nth-child(1) {
    background-color: lightpink;
  }
  & div:nth-child(2) {
    background-color: lightblue;
  }
  & div:nth-child(3) {
    background-color: lightgreen;
  }
  & div:nth-child(4) {
    background-color: lightyellow;
  }
  & div:nth-child(5) {
    background-color: lightcyan;
  }
  & div:nth-child(6) {
    background-color: lightcoral;
  }
  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
  & h1 {
    font-size: ${(props) => props.theme.sizing.medium};
    font-family: ${(props) => props.theme.font.main};
  }
`;

const BoxWrapper = styled.div`
  min-height: 25vw;
  padding: 1rem;
  @media ${(props) => props.theme.breakpoints.mobile} {
    min-height: 40vw;
  }
  width: 100%;
  height: 100%;
  border: 1rem solid white;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  & h1 {
    font-size: ${(props) => props.theme.sizing.medium};
    font-family: ${(props) => props.theme.font.main};
  }
`;

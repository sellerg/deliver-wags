import React from "react";
import styled from "styled-components";

export default function CartPage() {
  return (
    <CartPageWrapper>
      <h1>Cart Page</h1>
    </CartPageWrapper>
  );
}

const CartPageWrapper = styled.div`
  padding: 2rem;
  margin: none;
  & h1 {
    text-align: center;
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.sizing.large};
  }
`;

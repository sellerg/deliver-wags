import React from "react";
import styled from "styled-components";

export default function DropShadow(props) {
  return <DropShadowContainer onClick={props.handleDropShadowClick} />;
}

const DropShadowContainer = styled.div`
  height: 110vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 250;
  position: absolute;
  position: fixed;
  top: 0;
  left: 0;
`;

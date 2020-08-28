import React from "react";
import styled from "styled-components";

export default function Company() {
  return (
    <CompanyWrapper>
      <div>
        <p>&copy; Chester's treats</p>
      </div>
    </CompanyWrapper>
  );
}

const CompanyWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  background: lightgrey;
  font-family: ${(props) => props.theme.font.main};
  font-size: ${(props) => props.theme.sizing.medium};
`;

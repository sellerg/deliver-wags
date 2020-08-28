import React from "react";
import styled from "styled-components";

import treat1 from "../../assets/treats/treat1.jpg";
import treat2 from "../../assets/treats/treat1.jpg";
import treat3 from "../../assets/treats/treat1.jpg";
import treat4 from "../../assets/treats/treat1.jpg";
import treat5 from "../../assets/treats/treat1.jpg";
import treat6 from "../../assets/treats/treat1.jpg";

export default function TreatsPage() {
  return (
    <TreatsPageWrapper>
      <h1>Treats Page</h1>
      <p>
        Dog Birthdays are big days in the calendar, after the affection they
        give you all year it’s time to give some back! Our dog birthday boxes
        are personalised gifts and packed full of dog treats. All dog birthday
        hampers come with a hand written card and dog birthday cake but the
        essential and luxury boxes let you choose between dog beer, doggie
        popcorn and even the ultimate present, Crispaw dog champagne!
      </p>
      <ProductWrapper>
        <ImageWrapper>
          <h1>treat 1</h1>
          <h1>£29</h1>
          <Img src={treat1} alt="treat1" />
          <ButtonWrapper>
            <button>Add to basket</button>
          </ButtonWrapper>
        </ImageWrapper>
        <ImageWrapper>
          <h1>treat 2</h1>
          <h1>£29</h1>
          <Img src={treat2} alt="treat2" />
          <ButtonWrapper>
            <button>Add to basket</button>
          </ButtonWrapper>
        </ImageWrapper>
        <ImageWrapper>
          <h1>treat 3</h1>
          <h1>£29</h1>
          <Img src={treat3} alt="treat3" />
          <ButtonWrapper>
            <button>Add to basket</button>
          </ButtonWrapper>
        </ImageWrapper>
        <ImageWrapper>
          <h1>treat 4</h1>
          <h1>£29</h1>
          <Img src={treat4} alt="treat4" />
          <ButtonWrapper>
            <button>Add to basket</button>
          </ButtonWrapper>
        </ImageWrapper>
        <ImageWrapper>
          <h1>treat 5</h1>
          <h1>£29</h1>
          <Img src={treat5} alt="treat5" />
          <ButtonWrapper>
            <button>Add to basket</button>
          </ButtonWrapper>
        </ImageWrapper>
        <ImageWrapper>
          <h1>treat 6</h1>
          <h1>£29</h1>
          <Img src={treat6} alt="treat6" />
          <ButtonWrapper>
            <button>Add to basket</button>
          </ButtonWrapper>
        </ImageWrapper>
      </ProductWrapper>
    </TreatsPageWrapper>
  );
}

const TreatsPageWrapper = styled.div`
  padding: 2rem 0;
  margin: none;
  & p {
    padding: 2rem;
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.sizing.medium};
    text-align: center;
  }

  & h1 {
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.sizing.large};
    text-align: center;
    padding: none;
    margin: none;
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  & button {
    padding: 0.5rem;
    width: 15rem;
    border: none;
    background-color: lightblue;
    font-size: ${(props) => props.theme.sizing.medium};
    margin: 2rem;
    font-family: ${(props) => props.theme.font.main};
    &:hover {
      cursor: pointer;
      filter: brightness(80%);
    }
  }
`;

const Img = styled.img`
  width: auto;
  max-width: 20rem;
`;

const ImageWrapper = styled.div`
  margin: 2rem;
  display: flex;
  flex-direction: column;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

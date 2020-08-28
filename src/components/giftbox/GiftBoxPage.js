import React from "react";
import styled from "styled-components";

import birthdaybox1 from "../../assets/birthday-boxes/birthdaybox1.jpg";
import birthdaybox2 from "../../assets/birthday-boxes/birthdaybox2.jpg";
import birthdaybox3 from "../../assets/birthday-boxes/birthdaybox3.jpg";
import birthdaybox4 from "../../assets/birthday-boxes/birthdaybox4.jpg";
import birthdaybox5 from "../../assets/birthday-boxes/birthdaybox5.jpg";
import birthdaybox6 from "../../assets/birthday-boxes/birthdaybox6.jpg";

export default function GiftBoxPage() {
  return (
    <GiftBoxPageWrapper>
      <h1>Gift and Birthday Boxes</h1>
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
          <h1>Bithday Box 1</h1>
          <h1>£29</h1>
          <Img src={birthdaybox1} alt="birthday-box1" />
          <ButtonWrapper>
            <button>Add to basket</button>
          </ButtonWrapper>
        </ImageWrapper>
        <ImageWrapper>
          <h1>Bithday Box 2</h1>
          <h1>£29</h1>
          <Img src={birthdaybox2} alt="birthday-box2" />
          <ButtonWrapper>
            <button>Add to basket</button>
          </ButtonWrapper>
        </ImageWrapper>
        <ImageWrapper>
          <h1>Bithday Box 3</h1>
          <h1>£29</h1>
          <Img src={birthdaybox3} alt="birthday-box3" />
          <ButtonWrapper>
            <button>Add to basket</button>
          </ButtonWrapper>
        </ImageWrapper>
        <ImageWrapper>
          <h1>Bithday Box 4</h1>
          <h1>£29</h1>
          <Img src={birthdaybox4} alt="birthday-box4" />
          <ButtonWrapper>
            <button>Add to basket</button>
          </ButtonWrapper>
        </ImageWrapper>
        <ImageWrapper>
          <h1>Bithday Box 5</h1>
          <h1>£29</h1>
          <Img src={birthdaybox5} alt="birthday-box5" />
          <ButtonWrapper>
            <button>Add to basket</button>
          </ButtonWrapper>
        </ImageWrapper>
        <ImageWrapper>
          <h1>Bithday Box 6</h1>
          <h1>£29</h1>
          <Img src={birthdaybox6} alt="birthday-box6" />
          <ButtonWrapper>
            <button>Add to basket</button>
          </ButtonWrapper>
        </ImageWrapper>
      </ProductWrapper>
    </GiftBoxPageWrapper>
  );
}

const GiftBoxPageWrapper = styled.div`
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

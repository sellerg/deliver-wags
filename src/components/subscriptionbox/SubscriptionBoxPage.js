import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Slider from "./Slider";
import paymentImages from "../../assets/subscriptionbox/Trust_Symbols_Crop.png";

export default function SubscriptionBoxPage() {
  return (
    <SubscriptionBoxPageWrapper>
      <Column1>
        <h1>Deliver Wags subscription box</h1>
        <p>
          It fails to amaze me how quickly dogs can get bored with toys! So why
          not get a themed box every month to keep your wonderful pet stimulated
          and exited! Wether your dog is a strong chewer or has dietery needs,
          your deliver wags subscription box can be tailored and personalised to
          keep those tails wagging all month long!
        </p>
        <h2>Sign up for a themed box every month</h2>
        <Line />
        <Form>
          <p>Your dog's name</p>
          <input type="text" />
          <p>Your dog's birth day</p>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
            <option>13</option>
            <option>14</option>
            <option>15</option>
            <option>16</option>
            <option>17</option>
            <option>18</option>
            <option>19</option>
            <option>20</option>
            <option>21</option>
            <option>22</option>
            <option>23</option>
            <option>24</option>
            <option>25</option>
            <option>26</option>
            <option>27</option>
            <option>28</option>
            <option>29</option>
            <option>30</option>
            <option>31</option>
          </select>
          <select>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
          <p>Boy or Girl</p>
          <BoyGirlWrapper>
            <label>
              <input type="radio" name="gender" value="boy" />
              Boy
            </label>

            <label>
              <input type="radio" name="gender" value="girl" />
              Girl
            </label>
          </BoyGirlWrapper>
          <label for="month">Deliver every</label>
          <select name="month">
            <option>1 month</option>
            <option>2 months</option>
            <option>3 months</option>
          </select>
          <SmallMediumLargeWrapper>
            <legend>Your dog's size</legend>
            <input type="radio" name="size" id="small" value="small" />
            <label for="small">Small</label>
            <input type="radio" name="size" id="medium" value="medium" />
            <label for="medium">Medium</label>
            <input type="radio" name="size" id="large" value="large" />
            <label for="large">Large</label>
          </SmallMediumLargeWrapper>
        </Form>
        <img src={paymentImages} alt="payment" />
        <p>
          You know what it's like when you get a knock at the door and your dog
          runs wildly towards it barking and jumping excitedly. Can you imagine
          the disappointment after seeing all those packages come into the home
          and none of them are for you? You will probably have experienced that
          feeling once or twice yourself, but it's time to change that.
          Subscribe to Happy Pups and have a Mini Christmas with your favourite
          furry person every month! And did you know by treating your pup to a
          Happy Pups box you also help unfortunate dogs around the world get
          food, care, shelter, toys and treats? Well, now, you know! Our boxes
          are packed with 4 items or more, and could include: Dog grooming
          products, e.g. Shampoo, combs, sprays, towels; the list is endless Dog
          accessories e.g. Trendy leads and Harnesses. All Natural and very
          yummy Bags of Dog Treats to Make Training a Breeze. Natural Long
          Lasting Dog Chew to Keep Your Dogs Teeth Healthy and Strong New and
          Fun Themes to Explore Together Every Month Go on a journey of
          exploration with your pup and discover new and unusual toys and treats
          for your best friend. *** Important Subscription Information: This is
          a recurring order subscription box, and it is charged on the day of
          purchase. If you order before the 15th you will receive your first box
          that same month and will be re-billed on the 15th of every month on
          the frequency you have selected until you cancel. If you order after
          the 15th, then you will receive your box the month after and then it
          will follow in the frequency you have selected. E.g. First order is
          placed on the 17th Jan and payment is taken immediately // First box
          is shipped on the 26th Feb // 2nd payment is made on the 15th Mar //
          You then go into the regular schedule of payment on the 15th of every
          month and your box getting shipped on the 26th of every month. We send
          the boxes out on or around the 26th of every month. You can cancel or
          modify your subscription anytime.***
        </p>
      </Column1>
      <Column2>
        <Slider />
        <ButtonWrapper>
          <Link to="/our-themes">
            <button>Check out all of our themes!</button>
          </Link>
        </ButtonWrapper>
      </Column2>
    </SubscriptionBoxPageWrapper>
  );
}

const SubscriptionBoxPageWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`;

const Column1 = styled.div`
  padding: 2rem;
  margin: none;
  text-align: center;
  & p {
    padding: 1rem;
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.sizing.medium};
  }
  & h1 {
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.sizing.large};
  }

  & h2 {
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.sizing.xLarge};
  }

  & img {
    width: 80%;
  }

  & label {
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.sizing.medium};
  }

  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-row: 2 / 3;
  }
`;

const Line = styled.div`
  height: 3rem;
  width: 80%;
  border-bottom: 1px solid lightgrey;
  margin: auto;
`;

const Column2 = styled.div`
  @media ${(props) => props.theme.breakpoints.mobile} {
    grid-row: 1 / 2;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  & button {
    padding: 0.5rem;
    font-size: ${(props) => props.theme.sizing.medium};
    background-color: rgba(241, 249, 252, 0.3);
    font-family: ${(props) => props.theme.font.main};
    color: black;
    border: 2px solid black;
    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
`;

const Form = styled.form`
  & p {
    padding-bottom: 0.5rem;
  }
  & input[type="text"] {
    font-size: ${(props) => props.theme.sizing.medium};
    font-family: ${(props) => props.theme.font.main};
  }

  & select {
    font-size: ${(props) => props.theme.sizing.medium};
    font-family: ${(props) => props.theme.font.main};
    margin: 1rem;
    padding: 0.5rem;
  }
`;

const BoyGirlWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & label {
    font-family: ${(props) => props.theme.font.main};
    font-size: ${(props) => props.theme.sizing.medium};
    font-weight: 700;
  }
  & input {
    margin: 1rem;
  }
`;

const SmallMediumLargeWrapper = styled.div`
  margin-bottom: 2rem;
  & legend {
    font-size: ${(props) => props.theme.sizing.medium};
    font-family: ${(props) => props.theme.font.main};
    margin-bottom: 2rem;
  }

  & input[type="radio"] {
    display: none;
  }

  & label {
    margin: 1rem;
    padding: 0.5rem;
    border: 2px solid lightgrey;
    cursor: pointer;
  }

  input[type="radio"]:checked + label {
    border: 2px solid black;
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

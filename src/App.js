import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components";

import TopBar from "./components/TopBar/TopBar";
import NavBar from "./components/NavBar/NavBar";
import theme from "./themes/theme";
import Banner from "./components/banner/Banner";
import FeaturedProducts from "./components/featuredProducts/FeaturedProducts";
import SideDrawer from "./components/NavBar/SideDrawer";
import DropShadow from "./components/NavBar/DropShadow";
import PhotosFromYou from "./components/photosfromyou/PhotosFromYou";
import FollowUsOnInstagram from "./components/followusoninstagram/FollowUsOnInstagram";
import SignUp from "./components/signup/SignUp";
import Footer from "./components/footer/Footer";
import Company from "./components/company/Company";
import DogBoxPage from "./components/dogboxpage/DogBoxPage";
import TreatsPage from "./components/treatspage/TreatsPage";
import CartPage from "./components/cartpage/CartPage";
import SubscriptionBoxPage from "./components/subscriptionbox/SubscriptionBoxPage";
import PuppyBoxPage from "./components/puppybox/PuppyBoxPage";
import GiftBoxPage from "./components/giftbox/GiftBoxPage";
import OurThemesPage from "./components/ourthemes/OurThemesPage";
import Products from "./components/products/Products";

function App() {
  const [sideDrawOpen, setSideDrawOpen] = useState(false);
  const [dropShadowOpen, setDropShadowOpen] = useState(false);

  const handleHamburgerClick = () => {
    setSideDrawOpen(true);
  };

  const handleDropShadowClick = () => {
    setSideDrawOpen(false);
  };

  let dropshadow;
  if (sideDrawOpen) {
    dropshadow = <DropShadow handleDropShadowClick={handleDropShadowClick} />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container>
          {dropshadow}
          <TopBar />
          <NavBar handleHamburgerClick={handleHamburgerClick} />
          <SideDrawer
            sideDrawOpen={sideDrawOpen}
            handleDropShadowClick={handleDropShadowClick}
          />
          <Route
            path="/"
            exact
            render={(props) => (
              <div>
                <Banner />
                {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path
                    fill="#00BFFF"
                    fill-opacity="1"
                    d="M0,192L80,160C160,128,320,64,480,64C640,64,800,128,960,165.3C1120,203,1280,213,1360,218.7L1440,224L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
                  ></path>
                </svg> */}
                <FeaturedProducts />
                <svg
                  style={{
                    border: "0",
                    margin: "0",
                    transform: "translateY(5px)",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#D3D3D3"
                    fill-opacity="1"
                    d="M0,32L1440,192L1440,320L0,320Z"
                  ></path>
                </svg>
                <Products />
                <svg
                  style={{
                    background: "lightgray",
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                >
                  <path
                    fill="#ADD8E6"
                    fill-opacity="1"
                    d="M0,192L80,160C160,128,320,64,480,64C640,64,800,128,960,165.3C1120,203,1280,213,1360,218.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                  ></path>
                </svg>
                <PhotosFromYou />
                <FollowUsOnInstagram />
              </div>
            )}
          />
          <Route path="/dog-boxes" component={DogBoxPage} />
          <Route path="/treats" component={TreatsPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/subscription-box" component={SubscriptionBoxPage} />
          <Route path="/puppy-box" component={PuppyBoxPage} />
          <Route path="/gift-box" component={GiftBoxPage} />
          <Route path="/our-themes" component={OurThemesPage} />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#d3d3d3"
              fill-opacity="1"
              d="M0,64L80,85.3C160,107,320,149,480,160C640,171,800,149,960,128C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
          <SignUp />
          <Footer />
          <Company />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  display: grid;
  height: 100%;
`;

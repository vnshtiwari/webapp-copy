import React, { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarInnerContainer,
  NavbarExtendedContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
  SearchBarContainer,
  Banner,
  BlankDiv,
  PrudentialLogo,
  ToggleContainer,
  TogglePersonalContainer,
  ToggleEterpriseContainer,
  LoginButton,
  NavBarRedContainer,
  NavBarRedInnerContainer,
} from "../styles/Navbar.styles";
import MessageLogo from "../assets/message.png";
import SearchImg from "../assets/search.png";
import LogoImg from "../assets/prudential-logo.jpeg";

//import BannerImg from "../assets/banner.png";

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      {/* <Banner src={BannerImg}></Banner> */}
      <NavbarInnerContainer>
        <LeftContainer>
          <PrudentialLogo src={LogoImg}></PrudentialLogo>
        </LeftContainer>
        <RightContainer>
          <ToggleContainer></ToggleContainer>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Logo src={SearchImg}></Logo>
            <Logo src={MessageLogo}></Logo>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar(!extendNavbar);
              }}
            >
              {" "}
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </div>
          <ToggleContainer>
            <TogglePersonalContainer>Personal</TogglePersonalContainer>
            <ToggleEterpriseContainer>Enterprise</ToggleEterpriseContainer>
          </ToggleContainer>
          <LoginButton>Login</LoginButton>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended
            onClick={() => {
              setExtendNavbar(!extendNavbar);
            }}
            to="/home"
          >
            {" "}
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/products">Products</NavbarLinkExtended>
          <NavbarLinkExtended to="/aboutUs">About Us</NavbarLinkExtended>
          <NavbarLinkExtended to="/claims">Claims</NavbarLinkExtended>
          <NavbarLinkExtended to="/joinWaitList">
            Join the Waitlist
          </NavbarLinkExtended>

          <NavbarLinkExtended to="/about">
            Support Prudential
          </NavbarLinkExtended>
          <BlankDiv />
          <NavbarLinkExtended to="/contact">Search</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">Sign Up</NavbarLinkExtended>
          <NavbarLinkExtended to="/about">Login</NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
      <NavBarRedContainer>
        <NavBarRedInnerContainer>
          <NavbarLink to="/home"> We Do</NavbarLink>
          <NavbarLink to="/products">Products</NavbarLink>
          <NavbarLink to="/aboutUs">About Us</NavbarLink>
          <NavbarLink to="/Claims">Claims</NavbarLink>
          <NavbarLink to="/joinWaitList">Join the Waitlist</NavbarLink>
        </NavBarRedInnerContainer>
      </NavBarRedContainer>
    </NavbarContainer>
  );
}
export default Navbar;

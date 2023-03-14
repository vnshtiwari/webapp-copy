import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? '100vh' : '130px')};
  background-color: white;
  display: flex;
  flex-direction: column;
  @media (min-width: 700px) {
    height: 130px;
  }
`

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  //padding-left: 5%;
`

export const RightContainer = styled.div`
  // flex: 80%;
  display: flex;
  justify-content: center;
  // padding-right: 50px;
  align-items: center;
  //justify-content: center;
`

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`

export const NavbarLinkContainer = styled.div`
  display: flex;
`

export const NavbarLink = styled(Link)`
  color: white;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 15px;
  @media (max-width: 700px) {
    display: none;
  }
`

export const NavbarLinkExtended = styled(Link)`
  color: gray;
  font-size: large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`

export const Logo = styled.img`
  margin: 10px;
  max-width: 20px;
  height: auto;
  // @media (max-width: 700px) {
  //   display: none;
  // }
`

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: black;
  font-size: 35px;
  cursor: pointer;
  @media (min-width: 700px) {
    display: none;
  }
`

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    display: none;
  }
`

export const SearchBarContainer = styled.input`
  width: 200px;
  height: 20px;
  background: none;
  border-color: red;
  @media (max-width: 700px) {
    display: none;
  }
`
export const Banner = styled.img`
  margin: 10px;
  max-width: 100%;
  height: 50px;
`

export const BlankDiv = styled.div`
  margin: 10px;
  max-width: 100%;
  height: 100px;
`

export const PrudentialLogo = styled.img`
  margin: 130px;
  max-width: 200px;
  height: auto;
  @media (max-width: 700px) {
    margin: 0px;
    width: 120px;
  }
`

export const ToggleContainer = styled.div`
  width: 300px
  height: 35px;
  display: flex;
  background: white;
  margin: 15px;
   @media (max-width: 700px) {
    display: none;
  }
`
export const TogglePersonalContainer = styled.button`
  width: 100px;
  height: 30px;
  display: flex;
  background: white;
  font-size: 15px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  justify-content: center;
  align-items: center;
  border-style: solid;
  @media (max-width: 700px) {
    display: none;
  }
`
export const ToggleEterpriseContainer = styled.button`
  width: 100px;
  height: 30px;
  display: flex;
  background: lightGray;
  font-size: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  justify-content: center;
  align-items: center;
  border-style: solid;
  @media (max-width: 700px) {
    display: none;
  }
`

export const LoginButton = styled.button`
  margin: 10px;
  width: 80px;
  height: 30px;
  display: flex;
  background: white;
  font-size: 15px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  border-style: solid;
  @media (max-width: 700px) {
    display: none;
  }
`

export const NavBarRedContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1;

  @media (max-width: 700px) {
    display: none;
  }
`
export const NavBarRedInnerContainer = styled.div`
  display: flex;
  background-color: #ed1b2e;
  min-width: 700px;
  width: auto !important;
  height: 60px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`

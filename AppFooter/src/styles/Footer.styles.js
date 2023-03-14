import styled from "styled-components";

export const FooterContainer = styled.nav`
  padding: 80px 60px;
  justify-content: center;
  margin-top: 10vh;
  align-items: center;
  background-color:#1f1f1f;
  margin-left: 100px;
  margin-right: 100px;
  @media (max-width: 100%) {
    padding: 70px 30px;
  }
  @media (max-width: 700px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100%;
  margin: 0 auto;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #b4b4b4;
  margin-bottom: 20px;
  font-size: 15px;
  text-decoration: none;
  &:hover {
    color: #ff9c00;
    transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  color: white;
  margin-bottom: 40px;
`;
export const WrapperTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  flex-direction: column;
`;
export const Logo = styled.img`
  max-width: 80px;
  height: 80px;
`;
export const Heading = styled.p`
  font-size: 14px;
  color: blue;
`;
export const EmailWrapper = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
`;
export const EmailContainer = styled.input`
  width: 200px;
  height: 30px;
  background: none;
  border-color: blue;
  margin: 20px;
`;
export const SubscribeButton = styled.button`
  width: 100px;
  height: 35px;
  background: lightBlue;
  border-color: blue;
`;
export const WrapperBottomText = styled.div`
@media (max-width: 700px) {
 width: 60%

}
`;

export const WrapperBottom = styled.div`
  background-color: black;
  margin-left: 100px;
  margin-right: 100px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  flex-direction:row;
  display: flex;
  padding: 20px;
  @media (max-width: 700px) {
    margin-left: 10px;
    margin-right: 10px;

  }
`;
export const SocialMediaButton = styled.img`
  height: 40px;
  width: 40px;
  padding: 10px;
  @media (max-width: 700px) {
    padding: 5px;
  }
`;
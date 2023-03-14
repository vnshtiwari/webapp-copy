import styled from "styled-components";

export const BannerContainer = styled.nav`
width:"100%";
height: 300px;
justify-content: center;
align-items: center;
display: flex;
`;
export const InnerContainer = styled.nav`
width:800px;
height: 200px;
text-align: center;
`;
export const Title = styled.p`
  font-size: 40px;
  color: #000;
  font-weight: bold;
  width:80%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;
export const SubTitle = styled.p`
  font-size: 20px;
  color: #000;
  width:60%;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;
export const PriceButton = styled.button`
background-color: red;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
font-size: 16px;
margin-Top: 40px
`;
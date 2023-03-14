import React from "react";
import {
    BannerContainer,
    InnerContainer,
    Title,
    SubTitle,
    PriceButton
} from "../styles/Banner.styles"
function Banner({text, subText}) {
    return (
          <BannerContainer>
            <InnerContainer>
            <Title>{text}</Title>
            <SubTitle>{subText}</SubTitle>
            <PriceButton>CHECK OUR PRICE</PriceButton>
            </InnerContainer>
            
          </BannerContainer>
     )
}

export default Banner;
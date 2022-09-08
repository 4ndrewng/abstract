import React from "react";

import Container from "../Container";
import Button from "../Button";
import HeroBrands from "../HeroBrands";
import * as Styled from "./styled";
import { ReactComponent as CurveArrow } from "../../assets/icons/curveArrow.svg";

import { themeColor } from "../../utils/constants";

const BannerHero = () => {
  return (
    <>
      <Styled.BannerWrapper themeColor={themeColor.black}>
        <Styled.BannerTextWrapper>
          <Container>
            <div className="col">
              <div className="col-7 col-12-md">
                <Styled.BannerHeroMain>
                  <Styled.BannerHeroText>
                    <span className="libre-font">True version control</span> for
                    Sketch files
                  </Styled.BannerHeroText>
                  <Styled.BannerAnnotation>
                    <div className="curve-arrow">
                      <CurveArrow />
                    </div>
                    <div className="handwriting-font annotation-text">
                      Free yourself from files and folders
                    </div>
                  </Styled.BannerAnnotation>
                  <Styled.ButtonWrapper>
                    <div>
                      <Button href="#" label="Start Trial" />
                    </div>
                    <div>
                      <Button href="#" label="Download" type="reverse" />
                    </div>
                  </Styled.ButtonWrapper>
                </Styled.BannerHeroMain>
                <Styled.StyledText>
                  1 in 3 Fortune 500 companies use Sketch + Abstract
                </Styled.StyledText>
                <HeroBrands />
              </div>
            </div>
          </Container>
        </Styled.BannerTextWrapper>
        <Styled.HeroImage>
          <div className="banner-hero">
            <img src="/images/banner-hero.png" alt="Banner Hero" />
          </div>
        </Styled.HeroImage>
        <Styled.BannerRadius themeColor={themeColor.black} />
      </Styled.BannerWrapper>
    </>
  );
};

export default BannerHero;

import React from "react";
import styled from "styled-components";

import Container from "../Container";
import Button from "../Button";

import { themeColor } from "../../utils/constants";

type BannerWrapperType = {
  themeColor: string;
};

const BannerHero = () => {
  return (
    <>
      <BannerWrapper themeColor={themeColor.black}>
        <Container>
          <div className="col">
            <div className="col-7">
              <BannerHeroText>
                <span className="libre-font">True version control</span> for
                Sketch files
              </BannerHeroText>
              <ButtonWrapper>
                <div>
                  <Button href="#" label="Start Trial" />
                </div>
                <div>
                  <Button href="#" label="Download" type="reverse" />
                </div>
              </ButtonWrapper>
              <StyledText>
                1 in 3 Fortune 500 companies use Sketch + Abstract
              </StyledText>
            </div>
          </div>
        </Container>
        <BannerRadius themeColor={themeColor.black} />
      </BannerWrapper>
    </>
  );
};

export default BannerHero;

const BannerWrapper = styled.div`
  position: relative;
  padding-top: 160px;
  padding-bottom: 120px;
  background-color: ${(props: BannerWrapperType) => props.themeColor};
  color: #fff;
`;

const BannerRadius = styled.div`
  position: absolute;
  top: 100%;
  background-color: ${(props: BannerWrapperType) => props.themeColor};
  left: 0%;
  right: 0%;
  height: 5rem;
  z-index: 1;
  margin-top: -1px;
  border-bottom-left-radius: 5rem;
  border-bottom-right-radius: 5rem;
`;

const BannerHeroText = styled.h1`
  position: relative;
  font-size: 7.5rem;
  line-height: 0.94;
  font-weight: 400;
  letter-spacing: -0.05em;
  margin-top: 0;
  margin-bottom: 2.5rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: 0 -8px;
  padding-bottom: 120px;

  div {
    padding: 0 8px;
  }
`;

const StyledText = styled.div`
  font-size: 1.25rem;
  line-height: 1.4;
  letter-spacing: -0.01em;
`;

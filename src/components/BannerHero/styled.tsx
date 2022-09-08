import styled from "styled-components";

import { mediaUp, mediaDown } from "../../utils/mixins";

type BannerWrapperType = {
  themeColor: string;
};

export const BannerWrapper = styled.div`
  position: relative;
  padding-top: 160px;
  padding-bottom: 120px;
  background-color: ${(props: BannerWrapperType) => props.themeColor};
  color: #fff;

  @media ${mediaDown("sm")} {
    padding-bottom: 0;
  }
`;

export const BannerTextWrapper = styled.div`
  @media ${mediaDown("md")} {
    margin-bottom: 80px;
  }
`;

export const BannerRadius = styled.div`
  position: absolute;
  top: 100%;
  background-color: ${(props: BannerWrapperType) => props.themeColor};
  left: 0%;
  right: 0%;
  height: 5rem;
  z-index: -1;
  margin-top: -1px;
  border-bottom-left-radius: 5rem;
  border-bottom-right-radius: 5rem;

  @media ${mediaDown("sm")} {
    height: 2.5rem;
  }
`;

export const BannerHeroMain = styled.div`
  position: relative;
  margin-bottom: 120px;

  @media ${mediaDown("md")} {
    margin-bottom: 4rem;
  }
`;

export const BannerHeroText = styled.h1`
  font-size: 7.5rem;
  line-height: 0.94;
  font-weight: 400;
  margin-top: 0;
  letter-spacing: -0.05rem;
  margin-bottom: 2.5rem;

  @media ${mediaDown("md")} {
    font-size: 5rem;
    text-align: center;
  }
`;

export const BannerAnnotation = styled.div`
  position: absolute;
  bottom: -3%;
  right: 0;
  width: 200px;
  font-size: 1.25rem;
  line-height: 1.4;
  display: flex;
  flex-direction: column;
  align-items: center;

  .curve-arrow {
    width: 30%;
  }

  .annotation-text {
    text-align: center;
  }

  @media ${mediaDown("md")} {
    display: none;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin: 0 -8px;

  div {
    padding: 0 8px;
  }

  @media ${mediaDown("md")} {
    justify-content: center;
  }
`;

export const StyledText = styled.div`
  font-size: 1.25rem;
  line-height: 1.4;
  letter-spacing: -0.01em;
  margin-bottom: 40px;

  @media ${mediaDown("md")} {
    text-align: center;
  }
`;

export const HeroImage = styled.div`
  position: absolute;
  left: 65%;
  top: 0%;
  right: 0%;
  bottom: -5rem;
  z-index: 1;
  overflow: hidden;
  border-bottom-right-radius: 5rem;

  .banner-hero {
    position: absolute;
    left: 0%;
    top: 20%;
    right: auto;
    bottom: auto;

    @media ${mediaUp("md")} {
      width: 200%;
      min-width: 54rem;
    }

    @media ${mediaUp("xl")} {
      width: 130%;
    }

    @media ${mediaDown("md")} {
      position: relative;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 0 40px;
    }

    @media ${mediaDown("sm")} {
      padding: 0 0;
      top: 2.5rem;
    }

    img {
      max-width: 100%;
      object-fit: contain;
    }
  }

  @media ${mediaDown("md")} {
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: unset;
  }
`;

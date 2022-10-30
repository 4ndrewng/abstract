import styled from "styled-components";

import { mediaBetween, mediaDown } from "../../utils/mixins";
import { TeamStoryPropsType } from "./TeamStory";

export const Wrapper = styled.a`
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${(props: any) => (props.isCard ? "column" : "row")};
  box-shadow: 0 0 0 0 #000, 0 0 0 1px #000;
  transform: translate(0px, 0px);
  transition: ${(props: any) =>
    props.isCard
      ? "all 400ms cubic-bezier(.645, .045, .355, 1)"
      : "transform 100ms ease, box-shadow 100ms ease,-webkit-transform 100ms ease"};
  height: ${(props: any) => (props.isCard ? "100%" : "auto")};

  &:hover {
    transform: translate(-6px, -6px);
    box-shadow: 6px 6px 0 0 #000, 0 0 0 1px #000;
  }
`;

export const IconWrapper = styled.div`
  width: 100%;
  padding: ${(props: any) => (props.isCard ? "0" : "60px")};
  height: ${(props: any) => (props.isCard ? "auto" : "12rem")};
  background-color: ${({ iconBg }: TeamStoryPropsType) =>
    iconBg ? iconBg : "#fff"};
  box-shadow: inset 0 0 0 1px #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: ${(props: any) => (props.isCard ? "cover" : "contain")};
  }

  @media ${mediaBetween("sm", "lg")} {
    height: ${(props: any) => (props.isCard ? "auto" : "8.5rem")};
    padding: ${(props: any) => (props.isCard ? "0" : "2.5rem 1rem")};
    width: ${(props: any) =>
      props.isCard ? "100%" : " calc((2 * 100%) / 12)"};
  }
`;

export const InfoWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;

  @media ${mediaDown("lg")} {
    flex: auto;
  }
`;

export const InfoItem = styled.div`
  padding: 24px;
  width: 50%;
  box-shadow: inset 0 0 0 1px #000;

  &.heading {
    @media ${mediaDown("lg")} {
      display: flex;
      align-items: center;

      h3 {
        margin: 0;
      }
    }

    @media ${mediaBetween("sm", "lg")} {
      width: ${(props: any) =>
        props.isCard ? "100%" : "calc((3 * 100%) / 12)"};
    }
  }

  &.desc {
    @media ${mediaDown("lg")} {
      display: flex;
      align-items: center;

      p {
        margin: 0;
      }
    }

    @media ${mediaBetween("sm", "lg")} {
      width: ${(props: any) =>
        props.isCard ? "100%" : "calc((5 * 100%) / 12)"};
      display: flex;
      align-items: center;
    }
  }

  h3 {
    margin: 0;
    margin-top: ${(props: any) => (props.isCard ? "0" : "0.5rem")};
    font-size: ${(props: any) => (props.isCard ? "1.6vw" : "1.5rem")};
    line-height: 1.17;
    font-weight: 500;
    letter-spacing: -0.03em;

    @media ${mediaDown("sm")} {
      font-size: ${(props: any) => (props.isCard ? "3vw" : "1rem")};
    }
  }

  p {
    margin-top: ${(props: any) => (props.isCard ? "0" : "1rem")};
    margin-bottom: ${(props: any) => (props.isCard ? "0" : "1rem")};
    font-size: ${(props: any) => (props.isCard ? "1.125vw" : "1rem")};

    @media ${mediaDown("sm")} {
      font-size: ${(props: any) => (props.isCard ? "3vw" : "1rem")};
    }
  }
`;

export const ReadStory = styled.div`
  width: 100%;
  box-shadow: inset 0 0 0 1px #000;
  padding: 16px 24px;

  @media ${mediaDown("lg")} {
    display: flex;
    align-items: center;
  }

  @media ${mediaBetween("sm", "lg")} {
    width: ${(props: any) => (props.isCard ? "100%" : "calc((2 * 100%) / 12)")};
  }

  div {
    display: inline-block;
    color: #4c5fd5;
    text-decoration: ${(props: any) => (props.isCard ? "none" : "underline")};
    font-size: ${(props: any) => (props.isCard ? "1.125vw" : "1rem")};
    font-weight: ${(props: any) => (props.isCard ? "500" : "400")};

    @media ${mediaDown("sm")} {
      font-size: ${(props: any) => (props.isCard ? "3vw" : "1rem")};
    }
  }

  div:hover {
    text-decoration: none;
  }
`;

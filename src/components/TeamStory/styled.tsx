import styled from "styled-components";

import { mediaBetween, mediaDown } from "../../utils/mixins";
import { TeamStoryPropsType } from "./TeamStory";

export const Wrapper = styled.a`
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0 0 0 0 #000, 0 0 0 1px #000;
  transform: translate(0px, 0px);
  transition: transform 100ms ease, box-shadow 100ms ease,
    -webkit-transform 100ms ease;

  &:hover {
    transform: translate(-6px, -6px);
    box-shadow: 6px 6px 0 0 #000, 0 0 0 1px #000;
  }
`;

export const IconWrapper = styled.div`
  width: 100%;
  padding: 60px;
  height: 12rem;
  background-color: ${({ iconBg }: TeamStoryPropsType) => iconBg};
  box-shadow: inset 0 0 0 1px #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media ${mediaBetween("sm", "lg")} {
    height: 8.5rem;
    padding: 2.5rem 1rem;
    width: calc((2 * 100%) / 12);
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
      width: calc((3 * 100%) / 12);
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
      width: calc((5 * 100%) / 12);
      display: flex;
      align-items: center;
    }
  }

  h3 {
    margin: 0;
    margin-top: 0.5rem;
    font-size: 1.5rem;
    line-height: 1.17;
    font-weight: 500;
    letter-spacing: -0.03em;
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
    width: calc((2 * 100%) / 12);
  }

  div {
    display: inline-block;
    color: #4c5fd5;
    text-decoration: underline;
  }

  div:hover {
    text-decoration: none;
  }
`;

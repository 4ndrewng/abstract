import styled from "styled-components";

import { TeamStoryPropsType } from "./TeamStory";

export const Wrapper = styled.a`
  cursor: pointer;
  display: block;
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
  padding: 60px;
  height: 12rem;
  background-color: ${({ iconBg }: TeamStoryPropsType) => iconBg};
  box-shadow: inset 0 0 0 1px #000;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Info = styled.div`
  display: flex;
`;

export const InfoItem = styled.div`
  padding: 24px;
  width: 50%;
  box-shadow: inset 0 0 0 1px #000;

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
  box-shadow: inset 0 0 0 1px #000;
  padding: 16px 24px;

  div {
    display: inline-block;
    color: #4c5fd5;
    text-decoration: underline;
  }

  div:hover {
    text-decoration: none;
  }
`;

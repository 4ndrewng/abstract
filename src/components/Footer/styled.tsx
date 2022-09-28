import styled from "styled-components";

import { mediaDown, mediaUp } from "../../utils/mixins";

export const Wrapper = styled.div`
  background-color: #000;
  grid-template-columns: repeat(14, 1fr);
  padding: 4rem 0;
  column-gap: 1rem;
  color: #fff;
  position: relative;

  @media ${mediaUp("md")} {
    display: grid;
  }

  @media ${mediaDown("md")} {
    display: flex;
    padding: 4rem 2rem;
    flex-wrap: wrap;
  }
`;

export const LogoWrapper = styled.div`
  grid-column-start: 2;
  grid-column-end: 6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    width: 160px;
    height: 40px;
  }

  @media ${mediaDown("md")} {
    width: 100%;
    padding-bottom: 2rem;
  }
`;

export const Copyright = styled.div`
  font-size: 0.8rem;
  color: #8b8e8f;
  display: block;

  @media ${mediaDown("md")} {
    display: none;
  }
`;

export const CopyrightSmall = styled.div`
  display: none;

  @media ${mediaDown("md")} {
    display: block;
    position: absolute;
    bottom: 64px;
    right: 32px;
    font-size: 13px;
  }
`;

export const Menu = styled.div`
  grid-column-start: ${(props: any) => {
    if (props.data === "resources") return 8;
    if (props.data === "company") return 10;
    if (props.data === "social") return 12;
  }};
  grid-column-end: ${(props: any) => {
    if (props.data === "resources") return 10;
    if (props.data === "company") return 12;
    if (props.data === "social") return 14;
  }};

  h4 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 18px;
  }

  ul + h4 {
    margin-top: 8px;
  }

  ul {
    margin: 0;
    list-style: none;
    padding-left: 0;
  }

  li {
    cursor: pointer;
    margin-bottom: 8px;
    color: #8b8e8f;
    line-height: 22px;
  }

  li:last-child {
    margin-bottom: 0;
  }

  li:hover {
    color: #fff;
  }

  @media ${mediaDown("md")} {
    width: 23%;
  }

  @media ${mediaDown("sm")} {
    width: 48%;
  }
`;

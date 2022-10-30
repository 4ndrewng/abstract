import styled from "styled-components";

import { mediaDown, mediaUp } from "../../utils/mixins";

export const Wrapper = styled.div`
  padding: 8rem 0;
  background-color: #f6f7f7;
  padding-right: 2rem;
  padding-left: 2rem;

  @media ${mediaUp("md")} {
    display: grid;
    grid-template-columns: repeat(14, 1fr);
    column-gap: 1rem;
    padding-right: 0;
    padding-left: 0;
  } ;
`;

export const Heading = styled.h1`
  text-align: center;
  grid-column-start: 2;
  grid-column-end: 14;
  margin: 0;
  font-size: 5.4vw;
  line-height: 1;
  font-weight: 400;
  letter-spacing: -0.04em;
`;

export const Desc = styled.p`
  grid-column-start: 5;
  grid-column-end: 11;
  margin: 2rem 0 4rem;
  font-size: 2vw;
`;

export const Card = styled.div`
  @media ${mediaUp("md")} {
    grid-column-start: ${(props: any) => {
      if (props.value === "card1") return 2;
      if (props.value === "card2") return 6;
      if (props.value === "card3") return 10;
    }};
    grid-column-end: ${(props: any) => {
      if (props.value === "card1") return 6;
      if (props.value === "card2") return 10;
      if (props.value === "card3") return 14;
    }};
    display: flex;
    justify-content: ${(props: any) => {
      if (props.value === "card1") return "start";
      if (props.value === "card2") return "center";
      if (props.value === "card3") return "end";
    }};
    grid-row-start: 3;
    grid-row-end: 4;
    grid-auto-rows: 1fr;
  }

  @media ${mediaDown("md")} {
    & + & {
      padding-top: 2rem;
    }
  }
`;

export const CardWrapper = styled.div`
  @media ${mediaUp("md")} {
    width: 94%;
    height: 100%;
  } ;
`;

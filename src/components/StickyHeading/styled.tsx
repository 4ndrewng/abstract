import styled from "styled-components";

import { mediaDown } from "../../utils/mixins";

type StickyDivProps = {
  paddingSm: boolean;
  bgColor: string;
};

export const StickyDiv = styled.div`
  z-index: -1;
  position: sticky;
  bottom: 0%;
  padding-bottom: 1rem;
  padding-top: ${(props: StickyDivProps) =>
    props.paddingSm ? "22.5ren" : "27rem"};
  background-color: ${(props: StickyDivProps) => props.bgColor};

  @media ${mediaDown("sm")} {
    padding-top: 15vh;
  }
`;

export const DesignHeading = styled.h3`
  margin: 0;
  font-size: 4.4rem;
  line-height: 1;
  font-weight: 400;
  letter-spacing: -0.05em;
  z-index: 2;
  padding-bottom: 2rem;

  @media ${mediaDown("md")} {
    font-size: 4rem;
    line-height: 1.1;
  }

  @media ${mediaDown("sm")} {
    font-size: 3rem;
    line-height: 1;
    font-weight: 500;
  }
`;

export const HeadingLineWrapper = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;

  @media ${mediaDown("sm")} {
    display: none;
  }
`;

export const HeadingLine = styled.div`
  position: relative;
  bottom: 0.7rem;
  height: 4.5rem;
  border-bottom: 2px solid #b3b8ee;

  &:first-child {
    border-top: 2px solid #b3b8ee;
  }
`;

import styled from "styled-components";

import { mediaDown } from "../../utils/mixins";

export type StickyDivProps = {
  paddingSm?: boolean;
  bgColor: string;
  zIndex: number;
};

export const StickyDiv = styled.div`
  z-index: ${(props: StickyDivProps) => props.zIndex};
  position: sticky;
  bottom: 0%;
  padding-bottom: 1rem;
  padding-top: ${(props: StickyDivProps) =>
    props.paddingSm ? "22.5rem" : "27rem"};
  background-color: ${(props: StickyDivProps) => props.bgColor};

  @media ${mediaDown("sm")} {
    padding-top: 15vh;
  }
`;

import { ReactNode } from "react";

import { StickyDivProps } from "./styled";
import * as Styled from "./styled";
import Container from "../Container";

interface StickyHeading extends StickyDivProps {
  children: ReactNode;
}

const StickyHeading = ({
  paddingSm,
  bgColor,
  zIndex,
  children,
}: StickyHeading) => {
  return (
    <Styled.StickyDiv bgColor={bgColor} paddingSm={paddingSm} zIndex={zIndex}>
      <Container>{children}</Container>
    </Styled.StickyDiv>
  );
};

export default StickyHeading;

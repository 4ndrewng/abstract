import React from "react";

import * as Styled from "./styled";
import Container from "../Container";

const StickyHeading = () => {
  return (
    <Styled.StickyDiv bgColor={"#dadbf1"}>
      <Container>
        <Styled.HeadingLineWrapper>
          <Styled.HeadingLine />
          <Styled.HeadingLine />
        </Styled.HeadingLineWrapper>
        <div className="col">
          <Styled.DesignHeading className="libre-font col-8">
            Design collaboration shouldn’t be extra work
          </Styled.DesignHeading>
        </div>
      </Container>
    </Styled.StickyDiv>
  );
};

export default StickyHeading;

import StickyHeading from "../StickyHeading/StickyHeading";
import ColabAdvances from "../ColabAdvances";

import * as Styled from "./styled";

const DesignColab = () => {
  return (
    <>
      <StickyHeading bgColor="#dadbf1" zIndex={8}>
        <Styled.HeadingLineWrapper>
          <Styled.HeadingLine />
          <Styled.HeadingLine />
        </Styled.HeadingLineWrapper>
        <div className="col">
          <Styled.DesignHeading className="libre-font col-8 col-9-md">
            Design collaboration shouldn’t be extra work
          </Styled.DesignHeading>
        </div>
      </StickyHeading>
      <ColabAdvances />
    </>
  );
};

export default DesignColab;

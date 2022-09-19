import React from "react";

import * as Styled from "./styled";

type AdvanceItemPropsType = {
  Icon: React.FunctionComponent;
  heading: string;
  desc: string;
};

const AdvanceItem = ({ Icon, heading, desc }: AdvanceItemPropsType) => {
  return (
    <Styled.AdvancedItemWrapper>
      <Styled.AdvanceIcon>
        <Icon />
      </Styled.AdvanceIcon>
      <Styled.AdvanceHeading>{heading}</Styled.AdvanceHeading>
      <Styled.AdvanceDesc>{desc}</Styled.AdvanceDesc>
    </Styled.AdvancedItemWrapper>
  );
};

export default AdvanceItem;

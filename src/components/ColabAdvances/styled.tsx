import styled from "styled-components";

import { mediaDown } from "../../utils/mixins";

export const AdvancedItemWrapper = styled.div`
  @media ${mediaDown("sm")} {
    padding-bottom: 2rem;
  }
`;

export const ColabAdvances = styled.div`
  padding-top: 4rem;
  padding-bottom: 15rem;
  background-color: #dadbf1;
  border-bottom-left-radius: 5rem;
  border-bottom-right-radius: 5rem;

  @media ${mediaDown("sm")} {
    padding-bottom: 7.5rem;
  }
  z-index: 8;
  position: relative;
`;

export const AdvanceIcon = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  margin-bottom: 1rem;
`;

export const AdvanceHeading = styled.h2`
  margin: 0;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 1.17;
  font-weight: 500;
  letter-spacing: -0.03em;
`;

export const AdvanceDesc = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.4;
  letter-spacing: -0.01em;
`;

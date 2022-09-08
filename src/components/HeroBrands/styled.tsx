import styled from "styled-components";

import { mediaUp, mediaDown } from "../../utils/mixins";

export const BrandWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -16px;
  margin-right: -16px;

  div {
    padding: 0 16px 32px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media ${mediaUp("md")} {
      width: calc(2.4 / 12 * 100%);
    }

    @media ${mediaDown("md")} {
      flex-basis: calc(4 / 12 * 100%);
      flex-shrink: 0;
      flex-grow: 1;
    }

    img {
      max-width: 100%;
    }
  }
`;

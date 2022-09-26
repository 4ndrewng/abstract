import styled from "styled-components";
import { mediaDown } from "../../utils/mixins";

export const DesignTeamsWrapper = styled.div`
  padding: 4rem 0 12.5rem;

  @media ${mediaDown("sm")} {
    padding-bottom: 7.5rem;
  }
`;

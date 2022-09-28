import React from "react";
import styled from "styled-components";

import { mediaDown } from "../../utils/mixins";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>
        <img src="/images/Abstract-White.svg" alt="Abstract logo" />
      </Logo>
      <SignIn>
        <a href="#">Sign in</a>
      </SignIn>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  position: relative;
  z-index: 10;
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  grid-column-gap: 1rem;
  align-items: center;
  background: #000;

  @media ${mediaDown("sm")} {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
  }
`;
const Logo = styled.div`
  padding: 1rem 0;
  grid-column-start: 2;
  grid-column-end: 5;

  img {
    width: 160px;
    height: 40px;
    max-width: 100%;

    @media ${mediaDown("sm")} {
      width: 8rem;
      height: auto;
    }
  }
`;
const SignIn = styled.div`
  grid-column-start: 11;
  grid-column-end: 14;
  display: flex;
  justify-content: flex-end;

  a {
    color: #818eff;
    text-decoration: none;
    padding: 8px 20px;
    font-size: 16px;
    line-height: 22px;
    font-weight: 500;
  }
`;

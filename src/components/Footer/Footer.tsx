import * as Styled from "./styled";

type CopyrightPropType = {
  isSmall?: boolean;
};

const Footer = () => {
  const Copyright = ({ isSmall }: CopyrightPropType) => {
    if (isSmall)
      return (
        <Styled.CopyrightSmall responsive={isSmall}>
          <span>© Copyright 2022</span>
          <br />
          <span>Abstract Studio Design, Inc.</span>
          <br />
          <span>Srights reserved</span>
        </Styled.CopyrightSmall>
      );
    return (
      <Styled.Copyright responsive={isSmall}>
        <span>© Copyright 2022</span>
        <br />
        <span>Abstract Studio Design, Inc.</span>
        <br />
        <span>Srights reserved</span>
      </Styled.Copyright>
    );
  };

  return (
    <Styled.Wrapper>
      <Styled.LogoWrapper>
        <img src="/images/Abstract-White.svg" alt="LogoWrapper" />
        <Copyright isSmall={false} />
      </Styled.LogoWrapper>
      <Styled.Menu data="resources">
        <h4>Resources</h4>
        <ul>
          <li>Blog</li>
          <li>Help Center</li>
          <li>Cotnact Support</li>
          <li>Release Notes</li>
          <li>Status</li>
        </ul>
      </Styled.Menu>
      <Styled.Menu data="company">
        <h4>Company</h4>
        <ul>
          <li>About Us</li>
          <li>Carreers</li>
          <li>Legal</li>
          <li>Privacy</li>
          <li>Terms of Use</li>
        </ul>
        <h4>Contact Us</h4>
        <ul>
          <li>info@abtract.com</li>
        </ul>
      </Styled.Menu>
      <Styled.Menu data="social">
        <h4>Social</h4>
        <ul>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Facebook</li>
          <li>Dribble</li>
        </ul>
      </Styled.Menu>
      <Copyright isSmall={true} />
    </Styled.Wrapper>
  );
};

export default Footer;

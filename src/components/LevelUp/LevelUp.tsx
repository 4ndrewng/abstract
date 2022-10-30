import Container from "../Container";
import Button from "../Button";
import * as Styled from "./styled";

const LevelUp = () => {
  return (
    <Styled.Wrapper>
      <Container>
        <Styled.ContentWrapper>
          <h2>
            Level up your <span className="libre-font">workflow</span>
          </h2>
          <Styled.ButtonWrapper>
            <Button href="/" label="View Pricing Plans" />
          </Styled.ButtonWrapper>
        </Styled.ContentWrapper>
      </Container>
    </Styled.Wrapper>
  );
};

export default LevelUp;

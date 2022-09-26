import React from "react";

import * as Styled from "./styled";
import TeamStory from "../TeamStory";

const Dedicated = () => {
  return (
    <Styled.Wrapper>
      <Styled.Heading>
        Dedicated to <span className="libre-font">product designers</span>
      </Styled.Heading>
      <Styled.Desc>
        Get inspired by stories and resources from the best product design
        leaders and teams.
      </Styled.Desc>
      <Styled.Card value="card1">
        <Styled.CardWrapper>
          <TeamStory
            img="/images/brands/card1.svg"
            heading="Customer Spotlight"
            desc="Empowering design teams and transforming workflows with Abstract "
            isCard
            cardLinkTitle="Read their stories"
          />
        </Styled.CardWrapper>
      </Styled.Card>
      <Styled.Card value="card2">
        <Styled.CardWrapper>
          <TeamStory
            img="/images/brands/card2.jpeg"
            heading="Design Inspiration"
            desc="Scaling design ops, collaboration, and the impact of design"
            isCard
            cardLinkTitle="Get inspired"
          />
        </Styled.CardWrapper>
      </Styled.Card>
      <Styled.Card value="card3">
        <Styled.CardWrapper>
          <TeamStory
            img="/images/brands/card3.png"
            heading="Our Blog"
            desc="Stories, news, and tips from behind the Artboards"
            isCard
            cardLinkTitle="Browse Abstract's blog"
          />
        </Styled.CardWrapper>
      </Styled.Card>
    </Styled.Wrapper>
  );
};

export default Dedicated;

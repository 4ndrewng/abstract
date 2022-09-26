import * as Styled from "./styled";

export type TeamStoryPropsType = {
  iconBg?: string;
  img: string;
  teamTitle?: string;
  heading: string;
  desc: string;
  isCard?: boolean;
  cardLinkTitle?: string;
};

const TeamStory = ({
  iconBg,
  img,
  teamTitle,
  heading,
  desc,
  isCard,
  cardLinkTitle,
}: TeamStoryPropsType) => {
  return (
    <Styled.Wrapper isCard={isCard}>
      <Styled.IconWrapper iconBg={iconBg} isCard={isCard}>
        <img src={img} alt={teamTitle} />
      </Styled.IconWrapper>
      {isCard ? (
        <Styled.InfoWrapper>
          <Styled.InfoItem className="heading" isCard={isCard}>
            <h3>{heading}</h3>
          </Styled.InfoItem>
          <Styled.InfoItem className="desc" isCard={isCard}>
            <p>{desc}</p>
          </Styled.InfoItem>
        </Styled.InfoWrapper>
      ) : (
        <>
          <Styled.InfoItem className="heading" isCard={isCard}>
            <h3>{heading}</h3>
          </Styled.InfoItem>
          <Styled.InfoItem className="desc" isCard={isCard}>
            <p>{desc}</p>
          </Styled.InfoItem>
        </>
      )}

      <Styled.ReadStory isCard={isCard}>
        {isCard ? (
          <div>{cardLinkTitle}</div>
        ) : (
          <div>Read {teamTitle}'s story</div>
        )}
      </Styled.ReadStory>
    </Styled.Wrapper>
  );
};

export default TeamStory;

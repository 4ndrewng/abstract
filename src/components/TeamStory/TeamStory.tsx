import * as Styled from "./styled";

export type TeamStoryPropsType = {
  iconBg: string;
  img: string;
  teamTitle: string;
  heading: string;
  desc: string;
};

const TeamStory = ({
  iconBg,
  img,
  teamTitle,
  heading,
  desc,
}: TeamStoryPropsType) => {
  return (
    <Styled.Wrapper>
      <Styled.IconWrapper iconBg={iconBg}>
        <img src={img} alt={teamTitle} />
      </Styled.IconWrapper>
      <Styled.InfoItem className="heading">
        <h3>{heading}</h3>
      </Styled.InfoItem>
      <Styled.InfoItem className="desc">
        <p>{desc}</p>
      </Styled.InfoItem>
      <Styled.ReadStory>
        <div>Read {teamTitle}'s story</div>
      </Styled.ReadStory>
    </Styled.Wrapper>
  );
};

export default TeamStory;

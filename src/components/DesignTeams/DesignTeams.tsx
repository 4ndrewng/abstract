import * as Styled from "./styled";
import Container from "../Container";
import TeamStory from "../TeamStory";

const DesignTeams = () => {
  return (
    <Styled.DesignTeamsWrapper>
      <Container>
        <div className="col">
          <div className="col-4 col-12-lg pb-32">
            <TeamStory
              iconBg="#e3dbd5"
              img="/images/brands/cisco_black.svg"
              teamTitle="Cisco"
              heading="Design system management"
              desc="How Cisco built an enterprise global design system"
            />
          </div>
          <div className="col-4 col-12-lg pb-32">
            <TeamStory
              iconBg="#c9d5d3"
              img="/images/brands/sale_force.svg"
              teamTitle="Saleforce"
              heading="Radical transparency"
              desc="How designers at Salesforce fostered trust and teamwork"
            />
          </div>
          <div className="col-4 col-12-lg pb-32">
            <TeamStory
              iconBg="#dadbf1"
              img="/images/brands/banner_health.svg"
              teamTitle="Banner Health"
              heading="Remote collaboration"
              desc="How Banner Health is navigating the remote future no one planned for"
            />
          </div>
        </div>
      </Container>
    </Styled.DesignTeamsWrapper>
  );
};

export default DesignTeams;

import StickyHeading from "../StickyHeading/StickyHeading";
import DesignTeams from "../DesignTeams";
import * as Styled from "./styled";

const DesignLove = () => {
  return (
    <>
      <StickyHeading paddingSm={true} bgColor="#fff" zIndex={7}>
        <Styled.DesignLoveHeading>
          <h3>
            Why <span className="libre-font">design teams</span> love Abstract
            <span className="icon">®</span>
          </h3>
        </Styled.DesignLoveHeading>
      </StickyHeading>
      <DesignTeams />
    </>
  );
};

export default DesignLove;

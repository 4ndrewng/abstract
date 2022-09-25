import React from "react";

import * as Styled from "./styled";
import Container from "../Container";
import AdvanceItem from "./AdvanceItem";
import { ReactComponent as ClockIcon } from "../../assets/icons/clock.svg";
import { ReactComponent as IterateIcon } from "../../assets/icons/iterate.svg";
import { ReactComponent as PlantIcon } from "../../assets/icons/plant.svg";

const ColabAdvances = () => {
  return (
    <Styled.ColabAdvances>
      <Container>
        <div className="col">
          <div className="col-4 col-12-sm">
            <AdvanceItem
              Icon={ClockIcon}
              heading="Less files. More flow."
              desc="No more digging through Dropbox and Google Drive. Always know where to find “the latest,” so you can stay in your design flow."
            />
          </div>
          <div className="col-4 col-12-sm">
            <AdvanceItem
              Icon={PlantIcon}
              heading="Design together, in real time."
              desc="Explore and iterate in the same file at the same time, without losing the original. Simply create a branch, do your thing, then merge your changes when ready."
            />
          </div>
          <div className="col-4 col-12-sm">
            <AdvanceItem
              Icon={IterateIcon}
              heading="Iterate with context."
              desc="Know who made changes, when, and why. Compare changes side by side, resolve design conflicts, and merge work with precision."
            />
          </div>
        </div>
      </Container>
    </Styled.ColabAdvances>
  );
};

export default ColabAdvances;

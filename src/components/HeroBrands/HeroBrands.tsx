import React from "react";

import * as Styled from "./styled";

const HeroBrands = () => {
  return (
    <Styled.BrandWrapper>
      <div>
        <img src="/images/brands/wayfair.svg" alt="Wayfair" />
      </div>
      <div>
        <img src="/images/brands/cisco.svg" alt="Cisco" />
      </div>
      <div>
        <img src="/images/brands/docusign.svg" alt="Docusign" />
      </div>
      <div>
        <img src="/images/brands/microsoft.svg" alt="Microsoft" />
      </div>
      <div>
        <img src="/images/brands/zendesk.svg" alt="Zendesk" />
      </div>
    </Styled.BrandWrapper>
  );
};

export default HeroBrands;

import React from "react";
import Button from "../../styles/GlobalComponents/Button";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          WELCOME TO MY PORTFOLIO <br />
          THANAI YODSAENG
        </SectionTitle>
        <SectionText>
          <br></br>
          Accountant graduate aspires to be a software engineer. <br></br>
          <br></br>
        </SectionText>
        <a href="https://res.cloudinary.com/dk7xxtqnj/image/upload/v1659156710/THANAI_YODSAENG_ewdy4u.png">
          <Button onClick={props.handleClick}>Read More</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

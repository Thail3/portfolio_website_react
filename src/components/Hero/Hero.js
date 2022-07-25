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
          Accountant graduate aspires to be a software engineer. <br></br>
          <br></br>I have accumulated work experience. Whether it's accounting,
          document work, or sales, to increase my skills in various fields until
          I found another turning point, I thought that I could work on anything
          during this period. A friend of mine who is a programmer suggested
          that I try to learn to write code. At that time, I decided to study on
          my own. I have discovered that I love it very much
        </SectionText>
        <a href="https://res.cloudinary.com/dk7xxtqnj/image/upload/v1658736376/THANAI_YODSAENG_a6eeon.png">
          <Button onClick={props.handleClick}>Learn More</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

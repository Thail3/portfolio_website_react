import React, { useRef, useEffect } from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";

const Timeline = () => {
  const carouselRef = useRef();

  const scroll = (node, left) => {
    return scrollTo({ left, behavior: "smooth" });
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <Section id="about">
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        The first language I learned was Python, which I learned on my own a
        month after I did. I applied for CODE CAMP, which gave me a better
        understanding of the code. Know the structure and function and can
        better use it. My capabilities include HTML, CSS, Bootstrap, JavaScript,
        React, Node.js/Express, and SQL/MySQL; I am familiar with Git, and
        Regular Expression, and have a basic understanding of both UX and UI
        design
      </SectionText>

      <SectionDivider />
    </Section>
  );
};

export default Timeline;

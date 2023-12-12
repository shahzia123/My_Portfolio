import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Web Developer"}
            disc={`A creative and detail-oriented web developer with a passion for crafting exceptional online experiences. Proficient in front-end technologies, adept at turning design concepts into responsive and user-friendly websites. Skilled in HTML, CSS, JavaScript, and familiar with various frameworks like React. Dedicated to delivering high-quality  and digital solutions. `}
          />
        </Slide>


        {/* test  */}
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Data Analyst"}
            disc={`A dedicated data analyst with a keen analytical mindset and a strong aptitude for translating complex data into actionable insights. Proficient in data collection, cleaning, and analysis, utilizing tools like GoogleSheets,, and SQL. Experienced in creating visualizations and reports to effectively communicate findings to both technical and non-technical stakeholders.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"Fully Responsive"}
            disc={`I specialize in crafting fully responsive websites that seamlessly adapt to different devices and screen sizes. Whether your audience is browsing on a desktop, tablet, or smartphone, I ensure a consistent and user-friendly experience.  My commitment to responsive design guarantees that your website will look stunning and function flawlessly across various platforms.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import internshala from "../../Assets/Projects/internshala.png";
import health from "../../Assets/Projects/health.png";
import nykaa from "../../Assets/Projects/nykaa.jpeg";






function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={health}
              isBlog={false}
              isDeploy={true}
              isAblog={true}
              title="Healthkart"
              description="We're healthkart- a great place for people serious about health and fitness.
We're a young start-up of around 400 people that work for your needs in fitness and well-being. We deliver everything from genuine protein supplements to vitamins smoothly at prices. Being  healthproduct"
              link="https://github.com/ankit1470/healthkart-clone-project-only-front-end"
              links="https://healthkart-clone-project-only-front-end.netlify.app/"
              techstack="TECH-STACKS : HTML,CSS,Dom,JavaScript"
              storage="DATABASE : Local Storage."

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={internshala}
              isBlog={false}
              isDeploy={true}
              isAblog={true}
              title="Internshala"
              description="Internshala is a dot com business with the heart of dot org. We are a technology company on a mission to equip students with relevant skills & practical exposure to help them get the best possible start to their careers. Imagine a world full of freedom and possibilities."
              link="https://github.com/ankit1470/Backend-Internshaala"
              links="https://internshaala.herokuapp.com/"
              techstack="TECH-STACKS: Express,Nodejs,EJS, DOM, CSS, HTML"
              storage="DATABASE : MongoDb"

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nykaa}
              isBlog={false}
              isDeploy={true}
              isAblog={true}
              title="Nykaa"
              description="Since our launch, we have not only redefined the art of e-retailing beauty and personal care in India, but also have been instrumental in fostering the growth of a previously relatively nascent ecosystem. From bringing you domestic brands, international brands, luxury and prestige brands, premium brands. "
              link="https://github.com/ankit1470/Nykaa-clone"
              links="https://nykaa-clone1-2twteopl3-ankit1470.vercel.app/"
              techstack="TECH-STACKS : HTML,CSS,DOM,JavaScript"
              storage="DATABASE : Local Storage"

            />
          </Col>

      


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

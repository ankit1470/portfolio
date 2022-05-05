import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import myntra from "../../Assets/Projects/myntra.jpeg";
import healthkarts from "../../Assets/Projects/healthkarts.jpeg";
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
              imgPath={healthkarts}
              isBlog={false}
              isDeploy={true}
              isAblog={true}
              title="Healthkart"
              description="We're healthkart- a great place for people serious about health and fitness.
We're a young start-up of around 400 people that work for your needs in fitness and well-being. We deliver everything from genuine protein supplements to vitamins smoothly at prices. Being  healthproduct"
              links="https://healthkart-clone-project-only-front-end.netlify.app/"
              link="https://github.com/ankit1470/healthkart-clone-project-only-front-end"
            
              techstack="TECH-STACKS : HTML,CSS,Dom,JavaScript"
              storage="DATABASE : Local Storage."

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myntra}
              isBlog={false}
              isDeploy={true}
              isAblog={true}
              title="Myntra"
              description="Myntra is a one stop shop for all your fashion and lifestyle needs. Being India's largest e-commerce store for fashion and lifestyle products, Myntra aims at providing a hassle free and enjoyable shopping experience to shoppers across the country with the widest range of brands and products on its portal"
              link="https://capable-zuccutto-4cccee.netlify.app"
              links="https://github.com/ankit1470/Myntra-clone"
      
              techstack="TECH-STACKS: EJS, DOM, CSS, HTML"
              storage="DATABASE : Local Storage"

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
              link="https://nykaa-clone1-2twteopl3-ankit1470.vercel.app/"
              links="https://github.com/ankit1470/Nykaa-clone"
            
              techstack="TECH-STACKS : HTML, CSS, DOM, JavaScript"
              storage="DATABASE : Local Storage"

            />
          </Col>

      


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

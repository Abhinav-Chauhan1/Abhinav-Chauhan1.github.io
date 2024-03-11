import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import highfiii from "../../Assets/Projects/highfiii.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              imgPath={highfiii}
              isBlog={false}
              title="HighFiii"
              description="A Blog App with authentication"
              link="https://github.com/Abhinav-Chauhan1"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="AH Clothing"
              description="An Clothing Website for an Client with an huge amount of products." 
              link="https://ahclothing.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Jarvis AI Assistant"
              description="A personal Assistant Which Can Give Replys To Your Questions!!!!"
              link="https://github.com/Abhinav-Chauhan1/Jarvis"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Zombie Spacer"
              description="An FPS Game Developed in Unity."
              link="https://drive.google.com/drive/folders/104DhwTj2wOHQ6dyd_8cDeaWUaP0b1y-j?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Howard Convent School"
              description="An School Website Designed with HTML5, CSS3, BootStrap5"
              link="https://howardconventschool.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Pani-Poori-Wala"
              description="An Modern Website For Client For Serving Frenchise."
              link="http://panipooriwala.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

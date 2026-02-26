import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import {
  ProjectCardContainer,
  ProjectCardWrapper,
  ProjectCardTitle,
  ProjectCardDescription,
  ProjectCardTechnologiesContainer,
  ProjectCardTechnology,
  IconContainer,
  Background,
  ProjectCardImage
} from "./project.card.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ title, description, technologies, url, githubUrl, pic }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <ProjectCardContainer darkMode={darkMode}>
      {/*<Background darkMode={darkMode} />
      <Background darkMode={darkMode} />
  <ProjectCardImage src={pic} />*/}
      <ProjectCardWrapper>
        <ProjectCardTitle>
          {title}
          <IconContainer>
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={url} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </IconContainer>
        </ProjectCardTitle>
        <ProjectCardDescription>{description}</ProjectCardDescription>
        <ProjectCardTechnologiesContainer>
          {technologies.map((item, idx) => (
            <ProjectCardTechnology key={idx}>{item}</ProjectCardTechnology>
          ))}
        </ProjectCardTechnologiesContainer>
      </ProjectCardWrapper>
    </ProjectCardContainer>
  );
};

export default ProjectCard;

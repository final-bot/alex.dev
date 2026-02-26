import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext
} from "react";
import ProjectCard from "../projectCard/ProjectCard.component";
import { projects } from "../../common/data";
import {
  ProjectListContainer,
  ProjectListWrapper,
  ProjectListTextContainer,
  ProjectListTitle,
  ProjectListSubTitle,
  ListContainer
} from "./projectList.styles";
import { ThemeContext } from "../../context";

const ProjectList = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const projectsRef = useRef();

  const [projectsPosition, setProjectsPosition] = useState(Infinity);
  const [projectsVisibility, setProjectsVisibility] = useState(0);

  const handleScroll = useCallback(async (e) => {
    const projectsElement = projectsRef.current;
    const projectsPosition = projectsElement.getClientRects()[0].y;
    setProjectsPosition(projectsPosition);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (!projectsVisibility && window.innerHeight * 0.4 >= projectsPosition) {
      setProjectsVisibility(1);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll, projectsPosition, projectsVisibility]);

  return (
    <ProjectListContainer ref={projectsRef} id="projects" darkMode={darkMode}>
      <ProjectListWrapper visibility={projectsVisibility}>
        <ProjectListTextContainer>
          <ProjectListTitle>WORK</ProjectListTitle>
          <ProjectListSubTitle>
            A selection of stuff that I've built
          </ProjectListSubTitle>
        </ProjectListTextContainer>
        <ListContainer>
          {projects.map(({ id, ...otherProps }) => (
            <ProjectCard key={id} {...otherProps} />
          ))}
        </ListContainer>
      </ProjectListWrapper>
    </ProjectListContainer>
  );
};

export default ProjectList;

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useContext
} from "react";
import SkillIconList from "../skilliconList/SkillIconList.component";
import CustomButton from "../customButton/CustomButton.component";
import {
  AboutContainer,
  AboutWrapper,
  AboutTextContainer,
  SkillsContainer,
  AboutTitle,
  AboutSubTitle,
  AboutText
} from "./about.styles";
import CV from '../../assets/CV.pdf';
import { ThemeContext } from "../../context";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const aboutRef = useRef();
  const skillsRef = useRef();

  const [aboutPosition, setAboutPosition] = useState(Infinity);
  const [skillsPosition, setSkillsPosition] = useState(Infinity);
  const [aboutVisibility, setAboutVisibility] = useState(0);
  const [skillsVisibility, setSkillsVisibility] = useState(0);

  const handleScroll = useCallback(async (e) => {
    const aboutElement = aboutRef.current;
    const aboutPosition = aboutElement.getClientRects()[0].y;
    setAboutPosition(aboutPosition);

    const skillsElement = skillsRef.current;
    const skillsPosition = skillsElement.getClientRects()[0].y;
    setSkillsPosition(skillsPosition);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (!aboutVisibility && window.innerHeight * 0.5 >= aboutPosition) {
      setAboutVisibility(1);
    }

    if (!skillsVisibility && window.innerHeight * 0.45 >= skillsPosition) {
      setSkillsVisibility(1);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    handleScroll,
    aboutVisibility,
    skillsVisibility,
    aboutPosition,
    skillsPosition
  ]);

  return (
    <AboutContainer id="about" darkMode={darkMode}>
      <AboutWrapper>
        <AboutTextContainer visibility={aboutVisibility} ref={aboutRef}>
          <AboutTitle visibility={aboutVisibility}>ABOUT</AboutTitle>
          <AboutSubTitle visibility={aboutVisibility}>
            A little bit about myself, if you'd like to get to know me
          </AboutSubTitle>
          <AboutText visibility={aboutVisibility}>
            Self taught web developer, life long learner, with growth mindset and positive thinking. 
            Eager to contribute to team success through hard work, attention to detail and excellent technical and problem solving skills.
            Likes challanges and solving complex problems by breaking them down to smaller parts and finding the best solutions.
            Motivated to learn, grow and excel in IT.             
          </AboutText>
          <CustomButton visibility={aboutVisibility} target='_blank' href={CV} darkMode={darkMode}>Download CV</CustomButton>
        </AboutTextContainer>
        <SkillsContainer ref={skillsRef}>
          <AboutTitle visibility={skillsVisibility}>SKILLS</AboutTitle>
          <AboutSubTitle visibility={skillsVisibility}>
            The tools and technologies I use to bring ideas to life
          </AboutSubTitle>
          <SkillIconList visibility={skillsVisibility} />
        </SkillsContainer>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;

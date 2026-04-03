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
import CV from '../../assets/Alex Thain CV.pdf';
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
            A little bit about myself
          </AboutSubTitle>
          <AboutText visibility={aboutVisibility}>
            Experienced software engineer with 7+ years experience across full stack web development for major global companies, namely IBM & BAE Systems. 
            I have specialisms in Front End development building responsive, performant web applications using React & Next.js and AWS cloud infrastructure solutions and implementations utilising Infrastructure as Code.
          </AboutText>
        </AboutTextContainer>
        <CustomButton visibility={aboutVisibility} target='_blank' href={CV} darkMode={darkMode}>Download CV</CustomButton>
        <SkillsContainer ref={skillsRef}>
          <AboutTitle visibility={skillsVisibility}>SKILLS</AboutTitle>
          <AboutSubTitle visibility={skillsVisibility}>
            The tools and technologies I'm proficient in
          </AboutSubTitle>
          <SkillIconList visibility={skillsVisibility} />
        </SkillsContainer>
      </AboutWrapper>
    </AboutContainer>
  );
};

export default About;

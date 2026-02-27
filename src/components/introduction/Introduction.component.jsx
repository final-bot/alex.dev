import React, { useContext } from "react";
import {
  IntroductionContainer,
  IntroWrapper,
  IntroSubHeading,
  IntroMainHeading,
  IntroDescription,
  ButtonContainer,
  VideoContainer
} from "./intro.styles";
import CustomButton from "../customButton/CustomButton.component";
import AnimatedWrapper from "../animated/AnimatedWrapper";
import { ThemeContext } from "../../context";
import backgroundVideo from '../../video/blue-portfolio-bg.mp4'

const Introduction = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <IntroductionContainer id="home" darkMode={darkMode}>
      <VideoContainer autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4"/>
      </VideoContainer>
      <IntroWrapper>
        <IntroSubHeading>
          <AnimatedWrapper splitWord={true}>Alex</AnimatedWrapper>
        </IntroSubHeading>
        <IntroMainHeading>
          <AnimatedWrapper splitWord={true}>Thain</AnimatedWrapper>
        </IntroMainHeading>
        <IntroSubHeading>
          <AnimatedWrapper splitWord={true}>Front End Developer</AnimatedWrapper>
        </IntroSubHeading>
        <IntroDescription>
          <AnimatedWrapper>
            I'm a full stack developer with over 7 years experience working for major global companies. I have a passion for
            building responsive web applications & AWS cloud infrastructure.
          </AnimatedWrapper>
        </IntroDescription>
        <ButtonContainer>
          <AnimatedWrapper>
            <CustomButton darkMode={darkMode} href="#projects">View my Work</CustomButton>
          </AnimatedWrapper>
          <AnimatedWrapper>
            <CustomButton darkMode={darkMode} href="#contact">Contact me</CustomButton>
          </AnimatedWrapper>
        </ButtonContainer>
      </IntroWrapper>
    </IntroductionContainer>
  );
};
export default Introduction;

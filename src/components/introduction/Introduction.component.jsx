import React, { useContext } from "react";
import {
  IntroductionContainer,
  IntroWrapper,
  IntroSubHeading,
  IntroMainHeading,
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
        <IntroMainHeading>
          <AnimatedWrapper splitWord={true}>Alex Thain</AnimatedWrapper>
        </IntroMainHeading>
        <IntroSubHeading>
          <AnimatedWrapper splitWord={true}>Full Stack Developer</AnimatedWrapper>
        </IntroSubHeading>
        <ButtonContainer>
          <AnimatedWrapper>
            <CustomButton darkMode={darkMode} href="#projects">View my work</CustomButton>
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

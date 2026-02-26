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
import backgroundVideo from '../../video/bg-vid.mp4'

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
          <AnimatedWrapper splitWord={true}>Hi,</AnimatedWrapper>
        </IntroSubHeading>
        <IntroSubHeading>
          <AnimatedWrapper splitWord={true}>I'm</AnimatedWrapper>
        </IntroSubHeading>
        <IntroMainHeading>
          <AnimatedWrapper splitWord={true}>Attila</AnimatedWrapper>
        </IntroMainHeading>
        <IntroSubHeading>
          <AnimatedWrapper splitWord={true}>Web Developer</AnimatedWrapper>
        </IntroSubHeading>
        <IntroDescription>
          <AnimatedWrapper>
            I'm a self taught web developer, who found passion in coding and
            building things for the web.
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

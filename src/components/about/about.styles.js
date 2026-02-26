import styled, { css, keyframes } from "styled-components";
import CustomButton from '../customButton/CustomButton.component';
import { device } from "../../common/breakpoints";

const lightModeColorStyles = css`
  background-color: #fffffe;

  h2 {
    color: #3da9fc;
  }

  h3 {
    color: #5f6c7b;
  }

  p {
    color: #5f6c7b;
  }
`;

const darkModeColorStyles = css`
  background-color: #16161a;

  h2 {
    color: #7f5af0;
  }

  h3 {
    color: #fffffe;
  }

  p {
    color: #94a1b2;
  }
`;

const applyColorTheme = ({ darkMode }) => {
  return darkMode ? darkModeColorStyles : lightModeColorStyles;
};

export const AboutContainer = styled.div`
  min-height: 100vh;
  position: relative;
  ${applyColorTheme};
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 15%;
  padding: 50px 35px;

  @media only screen and ${device.sm} {
    padding: 50px 10%;
  }

  @media only screen and ${device.xl} {
    padding: 50px 20%;
  }
`;

export const SkillsContainer = styled.div`
  margin-top: 50px;
`;

const setVisibility = ({ visibility }) =>
  visibility ? "display: flex" : null;

const FadeDownKeyframes = keyframes`
0% {
    transform: translateY(-80px);
    opacity: 0;
}

100% {
    transform: translateY(0);
    opacity: 1;
}
`;

const FadeDownAnimation = css`
  opacity: 0;
  animation-name: ${FadeDownKeyframes};
  animation-duration: 1.6s;
  animation-fill-mode: forwards;
  animation-timing: cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const AboutTitle = styled.h2`
  display: none;
  font-size: 15px;
  text-align: left;
  ${setVisibility};
  ${FadeDownAnimation};
`;

export const AboutSubTitle = styled.h3`
  display: none;
  font-size: 30px;
  text-align: left;
  font-weight: 200;
  ${setVisibility};
  ${FadeDownAnimation};
`;
export const AboutText = styled.p`
  display: none;
  text-align: justify;
  line-height: 30px;
  ${setVisibility};
  ${FadeDownAnimation};
`;

export const AboutTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  a {
    display: none;
    text-decoration: none;
    ${setVisibility};
    ${FadeDownAnimation};
  }

`;



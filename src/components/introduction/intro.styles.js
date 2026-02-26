import styled, { css } from "styled-components";
import { device } from "../../common/breakpoints";

const lightModeColorStyles = css`
  h1,
  h2 {
    color: #fffffe;
  }

  p {
    color: #94a1b2;
  }

  video {
    filter: brightness(70%);
  }
`;

const darkModeColorStyles = css`
  h1,
  h2 {
    color: #fffffe;
  }

  p {
    color: #94a1b2;
  }

  video {
    filter: brightness(25%);
  }
`;

const applyColorTheme = ({ darkMode }) => {
  return darkMode ? darkModeColorStyles : lightModeColorStyles;
};

export const IntroductionContainer = styled.div`
  min-height: 100vh;
  position: relative;
  ${applyColorTheme};
`;

export const VideoContainer = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;  
`

export const IntroWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  padding: 0 35px;

  @media only screen and ${device.sm} {
    padding: 0 10%;
  }

  @media only screen and ${device.xl} {
    padding: 0 20%;
  }
`;

export const IntroSubHeading = styled.h2`
  max-width: 100%;
  font-size: 23px;
  font-weight: 400;
  margin: 0;

  @media only screen and ${device.xs} {
    font-size: 26px;
  }

  @media only screen and ${device.sm} {
    font-size: 50px;
  }

  @media only screen and ${device.m} {
    font-size: 60px;
  }
`;

export const IntroMainHeading = styled.h1`
  max-width: 100%;
  font-size: 50px;
  font-weight: 400;
  margin: 0;

  @media only screen and ${device.sm} {
    font-size: 100px;
  }
`;

export const IntroDescription = styled.p`
  max-width: 100%;
  font-size: 15px;
  max-width: 450px;
  text-align: justify;

  @media only screen and ${device.xs} {
    font-size: 15px;
  }

  @media only screen and ${device.sm} {
    font-size: 15px;
  }
`;
export const ButtonContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  @media only screen and ${device.sm} {
    justify-content: flex-start;
    flex-direction: row;
    gap: 20px;
  }

  button {
    width: 100%;

    @media only screen and ${device.sm} {
      width: 150px;
    }
  }
`;

import styled, { css, keyframes } from "styled-components";
import { device } from "../../common/breakpoints";

const lightModeColorStyles = css`
  background-color: #fffffe;

  h4,
  a {
    color: #5f6c7b;
  }

  p {
    color: #5f6c7b;
  }

  code {
    background-color: #3da9fc;
    color: #fffffe;
  }
`;

const darkModeColorStyles = css`
  background-color: #242629;

  h4,
  a {
    color: #fffffe;
  }

  p {
    color: #fffffe;
  }

  code {
    background-color: #7f5af0;
    color: #fffffe;
  }
`;

const applyColorTheme = ({ darkMode }) => {
  return darkMode ? darkModeColorStyles : lightModeColorStyles;
};

export const ProjectCardContainer = styled.div`
  position: relative;
  overflow: hidden;
  height: 300px;
  max-width: 350px;
  padding: 15px 30px;
  text-decoration: none;
  transition: all 0.5s;
  box-shadow: 2px 2px 10px black;
  user-select: none;
  ${applyColorTheme};

  &:hover {
    transform: scale(1.05);
  }
`;

export const ProjectCardWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ProjectCardTitle = styled.h4`
  margin-top: 0;
  font-size: 12px;
  display: flex;

  @media only screen and ${device.sm} {
    font-size: 16px;
  }
`;

export const ProjectCardDescription = styled.p`
  font-size: 12px;
  width: 100%;

  @media only screen and ${device.sm} {
    font-size: 14px;
  }
`;

export const ProjectCardTechnologiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  bottom: 10px;
`;

export const ProjectCardTechnology = styled.code`
  font-size: 12px;
  margin: 5px;
  padding: 5px;
`;

export const IconContainer = styled.span`
  margin-left: auto;
  display: flex;

  a {
    text-decoration: none;
    margin: 0 5px;
  }
`;

export const Background = styled.div`
  position: absolute;
  width: 150%;
  height: 150%;
  z-index: 6;
  transform: rotate(45deg);
  transition: all 1s;

  &:nth-of-type(1) {
    top: -360px;
    right: -390px;
    background: linear-gradient(to top, #3da9fc, #7f5af0);

    ${ProjectCardContainer}:hover & {
      top: 200px;
      right: 230px;
    }
  }

  &:nth-of-type(2) {
    top: 200px;
    right: 230px;
    background: linear-gradient(to bottom, #3da9fc, #7f5af0);

    ${ProjectCardContainer}:hover & {
      top: -360px;
      right: -390px;
    }
  }
`;

const ImageFadeOutKeyframes = keyframes`
  0% {
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
`;

const ImageFadeInKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  25% {
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
`;

const ImageFadeOutAnimation = css`
  animation-name: ${ImageFadeOutKeyframes};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

const ImageFadeInAnimation = css`
  animation-name: ${ImageFadeInKeyframes};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

export const ProjectCardImage = styled.img`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 5;
  transition: all 1.25s;
  ${ImageFadeInAnimation}

  ${ProjectCardContainer}:hover & {
    ${ImageFadeOutAnimation}
    z-index: -5;
  }
`;

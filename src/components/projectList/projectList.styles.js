import styled, { keyframes, css } from "styled-components";
import { device } from "../../common/breakpoints";

const setVisibility = ({ visibility }) =>
  visibility ? "display: block" : null;

const lightModeColorStyles = css`
  background-color: rgba(230, 230, 230, 0.7);

  h2 {
    color: #3da9fc;
  }

  h3 {
    color: #fffffe;
  }

  p {
    color: #5f6c7b;
  }
`;

const darkModeColorStyles = css`
  background-color: rgba(0, 0, 0, 0.7);

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

export const ProjectListContainer = styled.div`
  padding: 50px 0px;
  min-height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80");
  background-position: right center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-blend-mode: overlay;
  ${applyColorTheme}
`;

export const ProjectListWrapper = styled.div`
  display: none;
  ${setVisibility};
  ${FadeDownAnimation};

  padding: 0 35px;

  @media only screen and ${device.sm} {
    padding: 0 10%;
  }

  @media only screen and ${device.xl} {
    padding: 0 20%;
  }
`;

export const ProjectListTextContainer = styled.div`
  width: 100%;
  text-align: left;
`;

export const ProjectListTitle = styled.h2`
  font-size: 15px;
`;

export const ProjectListSubTitle = styled.h3`
  font-size: 30px;
  font-weight: 200;
`;

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

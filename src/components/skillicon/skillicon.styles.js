import styled, { css, keyframes } from 'styled-components';

const JelloKeyframes = keyframes`
  0% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
  30% {
    -webkit-transform: scale3d(1.25, 0.75, 1);
            transform: scale3d(1.25, 0.75, 1);
  }
  40% {
    -webkit-transform: scale3d(0.75, 1.25, 1);
            transform: scale3d(0.75, 1.25, 1);
  }
  50% {
    -webkit-transform: scale3d(1.15, 0.85, 1);
            transform: scale3d(1.15, 0.85, 1);
  }
  65% {
    -webkit-transform: scale3d(0.95, 1.05, 1);
            transform: scale3d(0.95, 1.05, 1);
  }
  75% {
    -webkit-transform: scale3d(1.05, 0.95, 1);
            transform: scale3d(1.05, 0.95, 1);
  }
  100% {
    -webkit-transform: scale3d(1, 1, 1);
            transform: scale3d(1, 1, 1);
  }
`

const JelloAnimation = css`
  animation-name: ${JelloKeyframes};
  animation-duration: 1s;
  animation-fill-mode: forwards;

const playAnimation = ({ active }) => {
    return active ? JelloAnimation : null;
  }
`

const lightModeColorStyles = css`
  background-color: #fffffe;

  span {
    color: #5f6c7b;
  }

  box-shadow: 0px 0px 10px rgb(215, 215, 215);
`;

const darkModeColorStyles = css`
  background-color: #242629;

  span {
    color: #fffffe;
  }

  box-shadow: 0px 0px 5px rgb(150, 150, 150);
`;

const applyColorTheme = ({ darkMode }) => {
    return darkMode ? darkModeColorStyles : lightModeColorStyles;
};

const playAnimation = ({ active }) => {
    return active ? JelloAnimation : null;
}

export const Icon = styled.div`
  width: 150px;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 10px;
  padding: 15px 5px;
  user-select: none;
  transition: all 0.2s;
  ${applyColorTheme};
  ${playAnimation};
  cursor: pointer;

  &:hover {
    transform: scale(1.05);    
  }
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
`;

export const Description = styled.span`
  width: 100%;
  text-align: center;
`;
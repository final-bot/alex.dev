import styled, { keyframes, css } from "styled-components";
import { device } from "../../common/breakpoints";

const setVisibility = ({ visibility }) =>
  visibility ? "display: block" : null;

const lightModeColorStyles = css`
  background-color: #fffffe;

  h1,
  h2 {
    color: #3da9fc;
  }

  p {
    color: #5f6c7b;
  }
  
  input,
  textarea {
    background-color: transparent;    
  }

  button {
    --primary: #3da9fc;
    --primary-dark: #2055EE;
    --primary-darkest: #133FC0;
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

  button {
    --primary: #7f5af0;
    --primary-dark: #47328a;
    --primary-darkest: #322361;
  }

  input,
  textarea {
    background-color: transparent;    
  }

  label {
    color: #fffffe;
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

export const ContactContainer = styled.div`
  position: relative;
  min-height: 100vh;  
  ${applyColorTheme}
`;

export const ContactWrapper = styled.div`
  display: none;
  height: 100%;
  ${setVisibility};
  ${FadeDownAnimation};
  padding: 50px 10%;

  @media only screen and ${device.xl} {
    padding: 50px 20%;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 15px;
  text-align: left;
`;

export const ContactSubTitle = styled.h3`
  font-size: 30px;
  text-align: left;
  font-weight: 200;
`;

export const ContactInfo = styled.div``;

export const ContactInfoItem = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0px;
`;

export const ContactIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 20px;
`;

export const ContactDescription = styled.div``;

export const ContactText = styled.p``;

export const ContactForm = styled.form`
  margin-top: 100px;

  button {
    margin-top: 30px;
  }
`;

export const ContactFromAddressInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 50px;

  @media only screen and ${device.m} {
    flex-direction: row;
  }
`;

export const BackgroundContainer = styled.div`
  max-width: 500px;
  position: absolute;
  top: 40%;
  left: 45%;
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
  opacity: 0.1;  
`

export const SendButton = styled.button`
  ${applyColorTheme};
  --text: #FFFFFE;
  --text-opacity: 1;
  --success: #FFFFFE;
  --success-scale: .2;
  --success-opacity: 1;
  --border-radius: 7;
  --overflow: hidden;
  --rotate: 0;
  --plane-x: 0;
  --plane-y: 0;
  --plane-opacity: 1;
  --left-wing-background: var(--primary);
  --left-wing-first-x: 0;
  --left-wing-first-y: 0;
  --left-wing-second-x: 50;
  --left-wing-second-y: 0;
  --left-wing-third-x: 0;
  --left-wing-third-y: 100;
  --left-body-background: var(--primary);
  --left-body-first-x: 50;
  --left-body-first-y: 0;
  --left-body-second-x: 50;
  --left-body-second-y: 100;
  --left-body-third-x: 0;
  --left-body-third-y: 100;
  --right-wing-background: var(--primary);
  --right-wing-first-x: 50;
  --right-wing-first-y: 0;
  --right-wing-second-x: 100;
  --right-wing-second-y: 0;
  --right-wing-third-x: 100;
  --right-wing-third-y: 100;
  --right-body-background: var(--primary);
  --right-body-first-x: 50;
  --right-body-first-y: 0;
  --right-body-second-x: 50;
  --right-body-second-y: 100;
  --right-body-third-x: 100;
  --right-body-third-y: 100;
  display: block;
  cursor: pointer;
  position: relative;
  border: 0;
  padding: 8px 0;
  min-width: 100px;
  text-align: center;
  margin: 0;
  line-height: 24px;
  font-family: inherit;
  font-weight: 500;
  font-size: 14px;
  background: none;
  outline: none;
  color: var(--text);
  transform: rotate(calc(var(--rotate) * 1deg)) translateZ(0);
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  .left,
  .right {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      opacity: var(--plane-opacity);
      transform: translate(calc(var(--plane-x) * 1px), calc(var(--plane-y) * 1px)) translateZ(0);
      &:before,
      &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          right: 0;
          bottom: 0;
          border-radius: calc(var(--border-radius) * 1px);
          transform: translate(var(--x, .4%), var(--y, 0)) translateZ(0);
          z-index: var(--z-index, 2);
          background: var(--background, var(--left-wing-background));
          clip-path: polygon(calc(var(--first-x, var(--left-wing-first-x)) * 1%) calc(var(--first-y, var(--left-wing-first-y)) * 1%), calc(var(--second-x, var(--left-wing-second-x)) * 1%) calc(var(--second-y, var(--left-wing-second-y)) * 1%), calc(var(--third-x, var(--left-wing-third-x)) * 1%) calc(var(--third-y, var(--left-wing-third-y)) * 1%));
      }
  }
  .left:after {
      --x: 0;
      --z-index: 1;
      --background: var(--left-body-background);
      --first-x: var(--left-body-first-x);
      --first-y: var(--left-body-first-y);
      --second-x: var(--left-body-second-x);
      --second-y: var(--left-body-second-y);
      --third-x: var(--left-body-third-x);
      --third-y: var(--left-body-third-y);
  }
  .right:before {
      --x: -.4%;
      --z-index: 2;
      --background: var(--right-wing-background);
      --first-x: var(--right-wing-first-x);
      --first-y: var(--right-wing-first-y);
      --second-x: var(--right-wing-second-x);
      --second-y: var(--right-wing-second-y);
      --third-x: var(--right-wing-third-x);
      --third-y: var(--right-wing-third-y);
  }
  .right:after {
      --x: 0;
      --z-index: 1;
      --background: var(--right-body-background);
      --first-x: var(--right-body-first-x);
      --first-y: var(--right-body-first-y);
      --second-x: var(--right-body-second-x);
      --second-y: var(--right-body-second-y);
      --third-x: var(--right-body-third-x);
      --third-y: var(--right-body-third-y);
  }
  span {
      display: block;
      position: relative;
      z-index: 4;
      opacity: var(--text-opacity);
      &.success {
          z-index: 0;
          position: absolute;
          left: 0;
          right: 0;
          top: 8px;
          transform: rotate(calc(var(--rotate) * -1deg)) scale(var(--success-scale)) translateZ(0);
          opacity: var(--success-opacity);
          color: var(--success);
      }
  }
`;
import styled, { css, keyframes } from "styled-components";
import { device } from "../../common/breakpoints";

const setVisibility = ({ visibility }) => (visibility ? "display: flex" : null);

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

export const SkillIconsContainer = styled.div`
  display: none;
  ${setVisibility};
  ${FadeDownAnimation};
`;

export const SkillIconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;

  @media only screen and ${device.sm} {
    justify-content: flex-start;
  }
`;

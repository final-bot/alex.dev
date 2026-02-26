import styled, { css, keyframes } from 'styled-components';

const AnimationKeyframes = keyframes`
0% {
    -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
    transform: translateY(-600px) rotateX(-30deg) scale(0);
    -webkit-transform-origin: 50% 100%;
    transform-origin: 50% 100%;
    opacity: 0;
}
100% {
    -webkit-transform: translateY(0) rotateX(0) scale(1);
    transform: translateY(0) rotateX(0) scale(1);
    -webkit-transform-origin: 50% 1400px;
    transform-origin: 50% 1400px;
    opacity: 1;
  }
`;

let delay = 0;

export const getAnimationDelay = () => delay;
export const setAnimationDelay = value => delay = value;

const getFormattedDelay = () => {
    setAnimationDelay(getAnimationDelay() + 0.05);
    return `${getAnimationDelay()-0.05}s`
}

export const AnimatedSpan = styled.span`
opacity: 0;
display: inline-block;
animation-name: ${AnimationKeyframes};
animation-duration: 0.5s;
animation-fill-mode: forwards;
animation-timing: cubic-bezier(0.390, 0.575, 0.565, 1.000);
animation-delay: ${getFormattedDelay};
`
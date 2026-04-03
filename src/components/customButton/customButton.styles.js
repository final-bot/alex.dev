import styled, { css } from 'styled-components';

const lightModeColorStyles = css`
    background-color: #3da9fc;
    &:hover {
      background-color: #1f74ff
    }
`;

const darkModeColorStyles = css`
    background-color: #3527f8ff;

    &:hover {
        background-color: #281dc4ff;
    }
`;

export const CustomButtonContainerLink = styled.a``;

const applyColorTheme = ({ darkMode }) => {
    return darkMode ? darkModeColorStyles : lightModeColorStyles;
  };

const setVisibility = ({ visibility }) =>
  visibility ? "display: flex" : null;

export const CustomButtonContainer = styled.button`
    color: #fffffe;
    height: 45px;
    width: 130px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    padding: 10px;
    ${applyColorTheme};
    ${setVisibility};

    a {
        text-decoration: none;
        color: #fffffe;
    }
`
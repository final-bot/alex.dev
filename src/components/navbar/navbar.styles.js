import styled, { css } from 'styled-components';
import { device } from '../../common/breakpoints';

const lightModeColorStyles = css`
    background-color: #fffffe;

    a {
    color: #094067;
    }
`;

const darkModeColorStyles = css`
  background-color: #16161a;

  a {
    color: #fffffe;
  }
`;

const backgroundTransparent = css`
  background: transparent;
  box-shadow: none;
  a {
    color: white;
  }
`;

const showBackground = ({ backgroundVisible }) => {
    return backgroundVisible ? null: backgroundTransparent
}

const applyColorTheme = ({ darkMode }) => {
  return darkMode ? darkModeColorStyles : lightModeColorStyles;
}

export const NavbarContainer = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 50px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
    z-index: 10;
    transition: all 1.2s;
    box-shadow: 0px 3px 5px black;
    ${applyColorTheme};
    ${showBackground};

    padding: 0 2%;

    @media only screen and ${device.lg} {
        padding: 0 10%;
    }

    @media only screen and ${device.xl} {
        padding: 0 20%;
    }
`;

const menuVisible = css`
    display: flex;
`;

const menuHidden = css`
  display: none;
`;

const setMenuVisibility = ({ menuVisibility }) => {
  return menuVisibility ? menuVisible : menuHidden
}

export const NavigationList = styled.ul`
    width: 100%;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    gap: 30px;
    list-style: none;
    ${setMenuVisibility};

    @media only screen and ${device.sm} {
      display: flex;
      flex-direction: row;
    }
`;

export const NavListItem = styled.li`
    a {
        text-decoration: none;
    }
`;

export const HamburgerMenuContainer = styled.div`
    height: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    cursor: pointer;

    @media only screen and ${device.sm} {
      display: none;
    }
`;

const lightModeHamburgerColorTheme = css`
  background-color: #094067;
`;


const applyHamburgerColorTheme = ({ darkMode, backgroundVisible }) => {
  return (!darkMode && backgroundVisible) ? lightModeHamburgerColorTheme : null
}

export const HamburgerMenuBar = styled.div`
    width: 40px;
    height: 5px;
    border-radius: 20px;
    background-color: white;
    ${applyHamburgerColorTheme};
`;
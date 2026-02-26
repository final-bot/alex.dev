import React, { useEffect, useState, useContext } from 'react';
import { NavbarContainer, NavigationList, HamburgerMenuContainer, HamburgerMenuBar, NavListItem } from './navbar.styles';
import Toggle from '../toggle/Toggle.component';
import { ThemeContext } from '../../context';

const Navbar = () => {

    const [menuVisibility, setmenuVisibility] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [backgroundVisible, setBackgroundVisible] = useState(0);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const toggleMenu = () => {
        setmenuVisibility(prev=> prev === 0 ? 1 : 0 )
    }

    const handleScroll = event => {
        setScrollPosition(window.scrollY);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        if (!backgroundVisible && scrollPosition > 100) {
            setBackgroundVisible(1);
        } else if (backgroundVisible && scrollPosition <= 100) {
            setBackgroundVisible(0);
        }

        return (
            () => window.removeEventListener('scroll', handleScroll)
        )
    }, [scrollPosition, backgroundVisible])

    return ( 
    <NavbarContainer darkMode={darkMode} backgroundVisible={backgroundVisible}>
        <NavigationList menuVisibility={menuVisibility}>
            <NavListItem><a href='#home'>Home</a></NavListItem>
            <NavListItem><a href='#about'>About</a></NavListItem>
            <NavListItem><a href='#projects'>Work</a></NavListItem>
            <NavListItem><a href='#contact'>Contact</a></NavListItem>
            <NavListItem><Toggle darkMode={darkMode} backgroundVisible={backgroundVisible}/></NavListItem>
        </NavigationList>
        <HamburgerMenuContainer onClick={toggleMenu}>
            <HamburgerMenuBar darkMode={darkMode} backgroundVisible={backgroundVisible}/>
            <HamburgerMenuBar darkMode={darkMode} backgroundVisible={backgroundVisible}/>
            <HamburgerMenuBar darkMode={darkMode} backgroundVisible={backgroundVisible}/>
        </HamburgerMenuContainer>
    </NavbarContainer>
    )
}

export default Navbar;
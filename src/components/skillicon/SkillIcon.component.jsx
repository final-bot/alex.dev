import React, { useState, useContext } from "react";
import { Icon, Image, Description } from './skillicon.styles';
import { ThemeContext } from "../../context";

const SkillIcon = ({ name, pic, animation }) => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const [active, setActive] = useState(0);

    const handleClick = e => {
        setActive(1);
        setTimeout(()=>{setActive(0)}, 1000);
    }

    return (
    <Icon darkMode={darkMode} onClick={handleClick} active={active} animation={animation}>
        <Image src={pic} alt=''></Image>
        <Description>{name}</Description>
    </Icon>
    )
}

export default SkillIcon;
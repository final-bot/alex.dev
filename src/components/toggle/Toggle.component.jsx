import React, {useState} from "react";
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
import { ToggleContainer, ToggleImage, ToggleButton } from "./toggle.styles";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {

    const [position, setPosition] = useState('left');
    const theme = useContext(ThemeContext);

    const handleClick = () => {
        setPosition(prev => prev === 'left' ? 'right' : 'left');
        theme.dispatch({type: 'TOGGLE'});
        
    }

    return (
        <ToggleContainer  onClick={handleClick}>
            <ToggleImage src={Sun} alt=''/>
            <ToggleImage src={Moon} alt=''/>
            <ToggleButton position={position}/>
        </ToggleContainer>
    )
}

export default Toggle;
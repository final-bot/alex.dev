import React, { useContext } from "react";
import { AnimatedSpan } from "./animated.styles";
import { ThemeContext } from "../../context";

const AnimatedWrapper = ({ children, splitWord }) => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    if (splitWord) {
        const reactArray = children.split('').map((letter, index) => <AnimatedSpan darkMode={darkMode} splitWord={true} key={index}>{letter}</AnimatedSpan>)
        return <span>{reactArray}</span>
    } else {
        return <AnimatedSpan>{children}</AnimatedSpan>
    }
}

export default AnimatedWrapper;
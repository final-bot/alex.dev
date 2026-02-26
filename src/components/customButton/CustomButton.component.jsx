import React from "react";
import { CustomButtonContainer, CustomButtonContainerLink } from './customButton.styles';

const CustomButton = ({ children, href, darkMode, target }) => {
    return (
        <CustomButtonContainerLink href={href} target={target} rel='noreferrer'>
            <CustomButtonContainer darkMode={darkMode}>{ children }</CustomButtonContainer>
        </CustomButtonContainerLink>
    )
}

export default CustomButton;
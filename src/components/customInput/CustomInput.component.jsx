import React, { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import { CustomInputFormContainer, CustomInputContainer, CustomInputLabel, CustomTextAreaLabel, CustomTextAreaContainer } from './customInput.styles'

const CustomInput = ({ name, type, label, rows }) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <CustomInputFormContainer >
            {
                type==='textarea'
                ? 
                <>
                <CustomTextAreaLabel
                    htmlFor={name}
                    focused={focused}
                    value={value} 
                    >
                    {label}
                </CustomTextAreaLabel>
                <CustomTextAreaContainer
                    onFocus={()=> setFocused(true)}
                    onBlur={()=> setFocused(false)}
                    onChange={e=> setValue(e.target.value)}
                    name={name}
                    type={type}
                    rows='5'
                    darkMode={darkMode}
                    >                    
                </CustomTextAreaContainer>
                </>
                :
                <>
                <CustomInputLabel
                    htmlFor={name}
                    focused={focused}
                    value={value} 
                    >
                    {label}
                </CustomInputLabel>
                <CustomInputContainer
                    onFocus={()=> setFocused(true)}
                    onBlur={()=> setFocused(false)}
                    onChange={e=> setValue(e.target.value)}
                    name={name}
                    type={type}
                    darkMode={darkMode}
                    >                        
                </CustomInputContainer>
                </>
            }
        </CustomInputFormContainer>
    )
}

export default CustomInput;
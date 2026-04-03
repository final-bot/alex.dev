import styled, { css } from 'styled-components';

const shrinkLabelStyle = css`
    top: 0px;
    font-size: 14px;
`

const shrinkTextAreaLabelStyle = css`
    top: -20px;
    font-size: 14px;
`

const commonInputStyles = css`
    font-size: 18px;    
    padding: 20px 0px 0px 10px;
    outline: none;
    width: 100%;
    border: none;
    border-bottom: 2px solid rgb(215, 215, 215);
`

const commonLabelStyles = css`
    position: absolute;
    left: 5px;
    font-size: 20px;
    font-weight: 300;
    pointer-events: none;
    transition: all 0.3s;
`

const darkModeStyles = css`
    color: #DDD;
`

const applyTheme = ({ darkMode }) => {
    return darkMode ? darkModeStyles : null
}

export const CustomInputFormContainer = styled.div`
    position: relative;
    width: 100%;
`

export const CustomInputContainer = styled.input`  
    color: #333;
    ${commonInputStyles};
    ${applyTheme};
    height: 50px;
`

export const CustomTextAreaContainer = styled.textarea`   
    color: #333; 
    ${commonInputStyles};
    ${applyTheme};
    padding-top: 90px;
    height: 120px;
`

const setLabelShrink = ({ focused, value }) => 
    focused || value ? shrinkLabelStyle : null

const setTextAreaLabelShrink = ({ focused, value }) => 
    focused || value ? shrinkTextAreaLabelStyle : null

export const CustomInputLabel = styled.label`
    ${commonLabelStyles}
    top: 20px;
    ${setLabelShrink};
    
`

export const CustomTextAreaLabel = styled.label`
    ${commonLabelStyles}    
    top: 80px;
    ${setTextAreaLabelShrink};    
`
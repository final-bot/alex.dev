import styled from 'styled-components';

export const ToggleContainer = styled.div`
    cursor: pointer;
    width: 50px;
    height: 25px;
    border-radius: 20px;
    border: 2px solid #999;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
`

export const ToggleImage = styled.img`
    width: 15px;
    height: 15px;
`

const getButtonPosition = ({ position }) => {
    return `${position}: -2px`

}

export const ToggleButton = styled.button`    
    cursor: pointer;
    width: 25px;
    height: 25px;
    border: 2px solid #999;
    border-radius: 50px;
    position: absolute;
    ${getButtonPosition}
`
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../../common/breakpoints';


export const SidebarContainer = styled.div`
    position: fixed;
    top: 30%;
    right: 0px;    
    padding: 5px 5px 5px 5px;
    border-radius: 20px 0px 0px 20px;
    background-color: rgba(0,0,0,0.5);
    z-index: 10; 
    
    @media only screen and ${device.sm} {
        padding: 5px 10px 5px 15px;
    }
`;

export const SidebarList = styled.ul`
    list-style: none;
    padding: 0;   
`;

export const SidebarListItem = styled.li`
    display: flex;
    align-items: center;
    margin: 10px 0;
    transition: all 1s;
    position: relative;
`;

export const SidebarLink = styled.a`
    text-decoration: none;    
`

export const Icon = styled(FontAwesomeIcon)`
    width: 20px;
    height: 20px;
    transition: transform 0.5s;
    color: white;  

    @media only screen and ${device.xs} {
        width: 25px;
        height: 25px;
    }

    &:hover {
        transform: scale(1.3);
    }
`

const visible = css`
    opacity: 100%;    
    transform: translateX(-225px);
    background-color: rgba(0,0,0,0.3);

    @media only screen and ${device.sm} {
        transform: translateX(-235px);
    }
`;

const hidden = css`
    opacity: 0%;
    transform: translateX(-50px);
    background-color: transparent;
`;

const setVisibility = ({ visibility }) => {
    return visibility ? visible : hidden;
}

export const Contact = styled.p`
    position: absolute;
    width: 220px;
    top: 50%
    right: 0;
    padding: 2px 10px;
    color: white;    
    border-radius: 20px 0px 0px 20px;
    transition: all 1s;
    ${setVisibility};
    
`


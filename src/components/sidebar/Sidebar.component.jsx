import React, { useState, useEffect, useRef } from 'react';
import { SidebarContainer, SidebarList, SidebarListItem, SidebarLink, Icon, Contact } from './sidebar.styles';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {

    const [emailVisibility, setEmailVisibility] = useState(0);
    const [phoneVisibility, setPhoneVisibility] = useState(0);
    const emailRef = useRef();
    const phoneRef = useRef();

    const handleMouseEnter = event => {
        const id = event.target.id;        
        if (id === 'email') {
            setEmailVisibility(1);            
        } else {
            setPhoneVisibility(1);
        }
    }

    const handleMouseLeave = event => {
        const id = event.target.id;
        if (id === 'email') {
            setEmailVisibility(0);
        } else {
            setPhoneVisibility(0);
        }
    }

    useEffect(()=> {
        const emailElement = emailRef.current;
        const phoneElement = phoneRef.current;
        emailElement.addEventListener('mouseenter', handleMouseEnter);
        phoneElement.addEventListener('mouseenter', handleMouseEnter);
        emailElement.addEventListener('mouseleave', handleMouseLeave);
        phoneElement.addEventListener('mouseleave', handleMouseLeave);

        return(
            () => {
                emailElement.removeEventListener('mouseenter', handleMouseEnter);
                phoneElement.removeEventListener('mouseenter', handleMouseEnter);
                emailElement.removeEventListener('mouseleave', handleMouseLeave);
                phoneElement.removeEventListener('mouseleave', handleMouseLeave);
            }
        )
    })

    return (
        <SidebarContainer name='div'>
            <SidebarList name='ul'>
                <SidebarListItem>
                    <SidebarLink href='https://www.facebook.com/attila.boros.184' target='blank'><Icon icon={ faFacebook }/></SidebarLink>
                </SidebarListItem>
                <SidebarListItem>
                    <SidebarLink href='https://www.linkedin.com/in/attila-boros-7b1519192/' target='blank'><Icon icon={ faLinkedin }/></SidebarLink>
                </SidebarListItem>
                <SidebarListItem>
                    <SidebarLink href='https://github.com/borosati85' target='blank'><Icon icon={ faGithub }/></SidebarLink>
                </SidebarListItem>
                <SidebarListItem ref={emailRef} id='email'>
                    <Icon icon={ faEnvelope }/><Contact visibility={emailVisibility}>borosati85@gmail.com</Contact>
                </SidebarListItem>
                <SidebarListItem ref={phoneRef} id='phone'>
                    <Icon icon={ faPhone }/><Contact visibility={phoneVisibility}>+36-50/106-4146</Contact>
                </SidebarListItem>
            </SidebarList>
        </SidebarContainer>
    )
}

export default Sidebar;
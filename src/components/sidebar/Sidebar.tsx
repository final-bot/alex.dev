import { useState, useEffect, useRef } from 'react';
import { SidebarContainer, SidebarList, SidebarListItem, SidebarLink, Icon, Contact } from './sidebar.styles';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {

    const [emailVisibility, setEmailVisibility] = useState(0);
    const [phoneVisibility, setPhoneVisibility] = useState(0);
    const emailRef = useRef<HTMLLIElement>(null);
    const phoneRef = useRef<HTMLLIElement>(null);

    const handleMouseEnter = (event: MouseEvent) => {
        const target = event.currentTarget as HTMLLIElement;
        const id = target.id;
        if (id === 'email') {
            setEmailVisibility(1);            
        } else {
            setPhoneVisibility(1);
        }
    }

    const handleMouseLeave = (event: MouseEvent) => {
        const target = event.currentTarget as HTMLLIElement;
        const id = target.id;
        if (id === 'email') {
            setEmailVisibility(0);
        } else {
            setPhoneVisibility(0);
        }
    }

    useEffect(()=> {
        const emailElement = emailRef.current;
        const phoneElement = phoneRef.current;
        if (emailElement && phoneElement) {
            emailElement.addEventListener('mouseenter', handleMouseEnter);
            phoneElement.addEventListener('mouseenter', handleMouseEnter);
            emailElement.addEventListener('mouseleave', handleMouseLeave);
            phoneElement.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                emailElement.removeEventListener('mouseenter', handleMouseEnter);
                phoneElement.removeEventListener('mouseenter', handleMouseEnter);
                emailElement.removeEventListener('mouseleave', handleMouseLeave);
                phoneElement.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    return (
        <SidebarContainer name='div'>
            <SidebarList name='ul'>
                <SidebarListItem>
                    <SidebarLink href={`https://www.linkedin.com/in/${process.env.REACT_APP_LINKEDIN_USER}`} target='blank'><Icon icon={ faLinkedin }/></SidebarLink>
                </SidebarListItem>
                <SidebarListItem>
                    <SidebarLink href={`https://github.com/${process.env.REACT_APP_GITHUB_USER}`} target='blank'><Icon icon={ faGithub }/></SidebarLink>
                </SidebarListItem>
                <SidebarListItem ref={emailRef} id='email'>
                    <Icon icon={ faEnvelope }/><Contact visibility={emailVisibility}>{process.env.REACT_APP_EMAIL_ADDRESS}</Contact>
                </SidebarListItem>
                <SidebarListItem ref={phoneRef} id='phone'>
                    <Icon icon={ faPhone }/><Contact visibility={phoneVisibility}>{process.env.REACT_APP_TELEPHONE_NUMBER}</Contact>
                </SidebarListItem>
            </SidebarList>
        </SidebarContainer>
    )
}

export default Sidebar;
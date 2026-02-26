import React from "react";
import { SkillIconsContainer, SkillIconsWrapper } from "./skilliconList.styles";
import { skills } from '../../common/data';
import SkillIcon from "../skillicon/SkillIcon.component";


const SkillIcons = ({ visibility }) => {
    return (
        <SkillIconsContainer visibility={visibility} >
            <SkillIconsWrapper>
                {
                    skills.map(({ name, pic, animation }, idx) =>
                        <SkillIcon key={idx} name={name} pic={pic} animation={animation}/>          
                    )
                }
            </SkillIconsWrapper>
        </SkillIconsContainer>
    )
}

export default SkillIcons;
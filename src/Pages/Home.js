import React from 'react';
import styled from "styled-components";
import {NavLink} from '../Layouts/shared/styledElements/navLink';
import { resumeHome, serviceHome, } from './../routes';
import ResumeLogo from './sharedAssets/SVG/ResumeIcon.svg';
import ServiceLogo from './sharedAssets/SVG/ServicesIcon.svg';

const OneRow = styled.div`
    display:flex;
`;
const ImgLeft = styled.img `
    height:589px;
    width: 590px;
    
`;
const LeftSide = styled.div`
    position: absolute;
    left: 500px;
    top: 230px;
`;
const ImgRight = styled.img `
    height: 360px;
    width: 322px;
`;
const RightSide = styled.div`
    position: absolute;
    right: 500px;
    top: 360px;
`;
const Title = styled.p`
    font-size: 122px;
    margin-top: 0%;
`;

const LeftTitle = styled(Title)`
    position: absolute;
    top: 450px;
    left: 90px;
`;

const RightTitle = styled(Title)`
    position: absolute;
    top: 300px;
`;
function Home(){
    return(
        <React.Fragment>
            <OneRow>
                <LeftSide>
                    <NavLink to={resumeHome}>
                        <ImgLeft src={ResumeLogo}/>
                        <LeftTitle>Resume</LeftTitle>
                    </NavLink>
                </LeftSide>
                <RightSide>
                    <NavLink to={serviceHome}>
                        <ImgRight src={ServiceLogo} />
                        <RightTitle>Service</RightTitle>
                    </NavLink>
                </RightSide>
            </OneRow>
        </React.Fragment>
    );
}

export default Home;
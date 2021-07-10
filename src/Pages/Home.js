import React from 'react';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { resumeHome, serviceHome, } from './../routes';
import ResumeLogo from './sharedAssets/SVG/ResumeIcon.svg';
import ServiceLogo from './sharedAssets/SVG/ServicesIcon.svg';

const StyledLinks = styled(Link)`
 text-decoration: none;
 color: white;
 &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

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
    top: 141px;
`;
const ImgRight = styled.img `
    height: 360px;
    width: 322px;
`;
const RightSide = styled.div`
    position: absolute;
    right: 500px;
    top: 305px;
`;
const Title = styled.p`
    font-size: 122px;
    margin-top: 0%;
    text-decoration: none;
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
                    <StyledLinks to={resumeHome}>
                        <ImgLeft src={ResumeLogo}/>
                        <LeftTitle>Resume</LeftTitle>
                    </StyledLinks>
                </LeftSide>
                <RightSide>
                    <StyledLinks to={serviceHome}>
                        <ImgRight src={ServiceLogo} />
                        <RightTitle>Service</RightTitle>
                    </StyledLinks>
                </RightSide>
            </OneRow>
        </React.Fragment>
    );
}

export default Home;
import React from 'react';
import Layout from '../../../Layouts/page/pageLayout';
import styled from "styled-components";
import {ImageContainer} from "../../../Layouts/page/ImageColumn";
import ContentColumn from '../../../Layouts/page/ContentColumn';
import webIcon from "../../sharedAssets/aboutMeIcons/web.png";
import githubIcon from "../../sharedAssets/aboutMeIcons/web.png";
import linkedInIcon from "../../sharedAssets/aboutMeIcons/linkedin-48.png";
import mobileIcon from "../../sharedAssets/aboutMeIcons/mobile.png";
import emailIcon from "../../sharedAssets/aboutMeIcons/email.png";
import BackgroundImage from "./images/background.png";

const Ptag = styled.p`
    font-size:24px;
    width:100%;
`;

const ListGroup = styled.div`
    display: inline-block;
`;

const Inline = styled.a`
    display: inline-block;
    margin-left: 15px;
    margin-bottom:10px;
    color:white;
    text-decoration:none;
`;

const ImgBullet = styled.img`
    vertical-align: middle;
    width: 40px;
    height:auto;
`;
const TextBullet = styled.p`
    vertical-align: middle;
    display: inline;
    margin-left:20px;
`;
const AboutContent = () =>{
    return(
        <React.Fragment>
 <Ptag>Who am I? Hardworking, INFP-T, genuine,
                creative, Scorpio, gamer, spiritual christian
                and true to my core values.</Ptag>
                    
                    <ListGroup>
                        <Inline href="/">
                            <ImgBullet src={webIcon} />
                            <TextBullet>http://devpro.jonthuemichel.com/</TextBullet>
                        </Inline>
                        <Inline  href="/">
                            <ImgBullet src={githubIcon} />
                            <TextBullet>https://github.com/JonthueM</TextBullet>
                        </Inline>
                        <Inline  href="/">
                            <ImgBullet src={linkedInIcon} />
                            <TextBullet>www.linkedin.com/in/jonthue-michel</TextBullet>
                        </Inline>
                        <Inline  href="/">
                            <ImgBullet src={mobileIcon} />
                            <TextBullet>603 - 306 - 1148</TextBullet>
                        </Inline>
                        <Inline  href="/">
                            <ImgBullet src={emailIcon} />
                            <TextBullet>connect@jonthuemichel.com</TextBullet>
                        </Inline>
                    </ListGroup>
        </React.Fragment>
    )
}

function rAbout() {
    
         
    return (
            <React.Fragment>
                <Layout 
                RightColumn={
                    <ContentColumn>
                        <AboutContent/>
                    </ContentColumn>
                } 
                LeftColumn={
                    <ImageContainer Image={BackgroundImage}/>
                } />
        
            </React.Fragment>
    )
    
};

export default rAbout;
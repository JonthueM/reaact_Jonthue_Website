import React from 'react';
import Layout from '../../../Layouts/page/pageLayout';
import styled from "styled-components";
import webIcon from "../../sharedAssets/aboutMeIcons/web.png";
import mobileIcon from "../../sharedAssets/aboutMeIcons/mobile.png";
import emailIcon from "../../sharedAssets/aboutMeIcons/email.png";
import Image from './images/background.png';
import {Link} from 'react-router-dom';


const Ptag = styled.p`
    width:100%;
`;

const ListGroup = styled.div`
    display: inline-block;
`;

const Inline = styled.a`
    display: inline-block;
    margin-left: 15px;
    margin-bottom:10px;
`;

const ImgBullet = styled.img`
    vertical-align: middle;
    width: 40px;
    height:auto;
`;
const TextBullet = styled(Link)`
    text-decoration: none;
    color: white;
    vertical-align: middle;
    display: inline;
    margin-left:20px;
`;
function sAbout() {
    
        return (
            <div>
                <Layout Image={Image}>
                
                <Ptag>Who am I? Hardworking, INFP-T, genuine,
                    creative, Scorpio, gamer, spiritual christian
                    and true to my core values.</Ptag>
                    
                    <ListGroup>
                        <Inline href="/">
                            <ImgBullet src={webIcon} />
                            <TextBullet>http://devpro.jonthuemichel.com/</TextBullet>
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
                        
                    
                </Layout>
        
            </div>
            )
    
}
export default sAbout;
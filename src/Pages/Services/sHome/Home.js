import React from 'react';
import Layout from '../../../Layouts/page/pageLayout';
import styled from "styled-components";
import ServiceIcon from '../../sharedAssets/SVG/ServicesIcon.svg';
import ResumeIcon from '../../sharedAssets/SVG/ResumeIcon.svg';

const SVGresume = styled.img`
        position: absolute;
        z-index: 900;
        height: 300px; 
        transform:translate(90%,-18%); 
`;
const Linkresume = styled.a`
    position: absolute;
    bottom: 150px;
    font-size: 80px;
    right: 490px;
`;
const SVGservices = styled.img`
    position: absolute;
    z-index: 900;
    height:500px;
    transform:translate(-130%,-33);

`;

const Linksevice = styled.a`
    position: absolute;
    left: 395px;
    bottom: 150px;
    font-size: 80px;
`;

class sHome extends React.Component{
    render() {
        return(
            <div>
            <Layout>
                <a href='/resume/home'>
                    <SVGresume src={ResumeIcon} />
                </a>
                <Linkresume href="/resume/home">Resume</Linkresume>

                <a href='/services/home'>
                    <SVGservices src={ServiceIcon}/>
                </a>
                <Linksevice href="/services/home">Service</Linksevice>

            </Layout>
        </div>
        );
        
    }   
}
 export default sHome;
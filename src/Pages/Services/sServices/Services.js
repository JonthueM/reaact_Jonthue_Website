import React from 'react';
import {ImageColumn, ContentColumn, PageLayout} from "../../../directory";
import styled from "styled-components";
import mobileIcon from '../../sharedAssets/aboutMeIcons/mobile.png';
import webIcon from '../../sharedAssets/aboutMeIcons/web.png';
import BackgroundImage from './images/background.png'

const Button = styled.button`
margin-top:-10px;
`;

const ServiceList = styled.div`
    display: flex;
    flex-direction:row;
    float:left;
    box-shadow:none;
    margin-top:25px;
`;

const ServiceList2 = styled(ServiceList)`
    margin-top:15px
`;

const ColumnOne = styled.div`
    margin-right:15px;
`;

const ColumnTwo= styled.div`
    margin-left:10px;
`;
const ColumnThree = styled.div`
    margin-left:2px;
`;
const Title = styled.h2`
    font-size:1em;
    margin-top:-0px;
    margin-bottom: -10px;
`;

const Paragraph = styled.p`
    color:white;
`;
const Img = styled.img`
    width:20px;
    height: auto;
    padding:0;
    margin:0;
`;
const ServiceContent = () =>{
    return(
        <React.Fragement>
        <ServiceList>
                <ColumnOne>
                    <Img src={webIcon} />
                </ColumnOne>
                <ColumnTwo>
                    <span>
                        <Title>Web Developer</Title>
                        <Paragraph>SEO, resign, PAW etc www..</Paragraph>
                    </span>
                </ColumnTwo>
                <ColumnThree>
                    <Button>More Info</Button>
                </ColumnThree>
            </ServiceList>
            <ServiceList2>
                <ColumnOne>
                    <Img src={mobileIcon} />
                </ColumnOne>
                <ColumnTwo>
                    <span>
                        <Title>Mobile Development</Title>
                        <Paragraph>Redesign, web app etc..</Paragraph>
                    </span>
                </ColumnTwo>
                <ColumnThree>
                    <Button>More Info</Button>
                </ColumnThree>
            </ServiceList2>
        </React.Fragement>
    )
}

function sService(){
    
        return(
            <React.Fragement>
                <PageLayout 
                    RightColumn={
                        <ContentColumn>
                            <ServiceContent/>
                        </ContentColumn>
                    }
                    LeftColumn={
                        <ImageColumn Image={BackgroundImage} />
                    }
                />
             </React.Fragement>
        );
        
    
}
export  {sService};
import React from 'react';
import Layout from '../../../Layouts/page/pageLayout';
import {primaryButton} from '../../../Layouts/shared/styledElements/primaryButton';
import styled from "styled-components";
import Mobile from "./images/mobile.png";
import Web from "./images/webDev.png";
import Image from './images/background.png'
import {ImageContainer} from "../../../Layouts/page/ImageColumn";
import ContentColumn from '../../../Layouts/page/ContentColumn';

const Button = styled(primaryButton)`
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
                    <Img src={Web} />
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
                    <Img src={Mobile} />
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

function Service(){
    
        return(
            <React.Fragement>
                <Layout 
                    RightColumn={
                        <ContentColumn>
                            <ServiceContent/>
                        </ContentColumn>
                    }
                    LeftColumn={
                        <ImageContainer Image={Image} />
                    }
                />
             </React.Fragement>
        );
        
    
}
export default Service;
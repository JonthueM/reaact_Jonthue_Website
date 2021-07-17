import React from 'react';
import styled from "styled-components";
import Layout from '../../../Layouts/page/pageLayout';
import { H2 } from "../../../Layouts/shared/styledElements/H2";
import {ImageContainer} from "../../../Layouts/page/ImageColumn";
import ContentColumn from '../../../Layouts/page/ContentColumn';
import BackgroundImage from './images/background.png';

const Button = styled.button`
        margin-left: 140px;
`;

const Title = styled(H2)`
 color:white;
`;

const AppLockerContent = () =>{
    return(
        <React.Fragment>
                    <Title>Description </Title>
                    <p>This app locker is built using _____ ___________ ___________. <br/>
                    It is made to showcase the mobile applications that I hadd desiged <br/>
                    and built from scratcth.  Demostrating not only the ability to construct <br /> 
                    complex functionality but also to provide a delicious front-end look and experience. </p>
                <Title>Apps:</Title>
                    <ul>
                        <li>12 Days to Wholeness Journey</li>
                        <li>Vending Machine Mobile</li>
                        <li>Call the Professionals</li>
                    </ul>
                <Button>Check It Out!</Button>
        </React.Fragment>
    )
}

function rAppLocker(){
    
        
 return (
        <React.Fragment>
            <Layout 
            RightColumn={
                <ContentColumn>
                    <AppLockerContent />
                </ContentColumn>
            }
            LeftColumn={
                <ImageContainer Image={BackgroundImage} />
            }
            />
        </React.Fragment>
        
    );   
}
export {rAppLocker};
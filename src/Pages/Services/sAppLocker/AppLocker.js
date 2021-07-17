import React from 'react';
import styled from "styled-components";
import {ImageColumn, ContentColumn, PageLayout} from "../../../directory";
import { H2 } from "../../../Layouts/shared/styledElements/H2";
import Image from './images/background.png';

const Button = styled.button`
margin-left: 140px;
`;

const AppLockerContent = () =>{
    return(
        <React.Component>
            <H2>Description </H2>
            <p>Here is a app locker that is made to showcase  mobile applications that I hadd desiged
            and built from scratcth.  Demostrating not only the ability to provide a mobile and desktop solution for your busines. </p>
            <H2>Apps:</H2>
            <ul>
                <li>12 Days to Wholeness Journey</li>
                <li>A Mindful Moment</li>
                <li>Call the Professionals</li>
                <li>GYC Atlantic</li>
            </ul>
            <Button>Check It Out!</Button>
        </React.Component>
    )
}

function sAppLocker(){
    
        return(
            <React.Fragment>
            <PageLayout
                RightColum={
                    <ContentColumn>
                        <AppLockerContent/>
                    </ContentColumn>
                }
                LeftColumn={
                    <ImageColumn Image={Image} />
                }
            />
               
            
            
        </React.Fragment>
        );
        
    
}
export  {sAppLocker};
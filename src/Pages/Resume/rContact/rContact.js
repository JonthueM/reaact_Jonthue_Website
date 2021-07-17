import React from 'react';
import styled from 'styled-components';
import BackgroundImage from './images/background.png';
import {ImageColumn, ContentColumn, PageLayout} from "../../../directory";


const LeftSideButton = styled.button`
    position: absolute;
    right: 26.3%;
    color:black;
`;

const ContactContent = () =>{
    return(
        <React.Fragment>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Your Message" cols="7" rows="7"></textarea>
                <LeftSideButton src="/">Button</LeftSideButton>
        </React.Fragment>
    );
}
function rContact  (){
    return(
           <React.Fragment>
               <PageLayout 
               RightColumn={
                   <ContentColumn>
                       <ContactContent/>
                   </ContentColumn>
               }
               LeftColumn={
                   <ImageColumn Image={BackgroundImage} />
               }
               />
           </React.Fragment>
        );
       
    
}
export  {rContact};
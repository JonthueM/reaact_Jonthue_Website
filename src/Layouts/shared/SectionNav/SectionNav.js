import React from 'react';
import styled, { keyframes } from "styled-components";
import { Link,useLocation } from 'react-router-dom';
import ResumeLinks from './Links/ResumeLinks';
import ServiceLinks from './Links/SerivcesLinks';
import Logo from './../../../Pages/sharedAssets/loadingAssets/logo.svg';

const SlideUp = keyframes`
from{bottom:-100px} 
  to{bottom:0;}
`;

const Section = styled.div`
    background-color: transparent; 
    position: fixed; 
    bottom: 0; 
    padding: 20px 10px; 
    padding-bottom: 35px; 
    width: 100vw; 
    z-index: 20;
    animation: ${SlideUp} 4s ease 1;

`;

const Img = styled.img`
    height: 50px;
`;
const LogoPosition = styled.div`
    position: fixed;
    right: 60px;
    bottom: 20px;

`;

const QuoteDisplay = styled.div`
    color: white;
    font-size: 24px;
    text-align: center;
`;


 

 const NavJudge = () =>{
    const Location = useLocation().pathname;

    if (Location.toLowerCase().indexOf("/resume/") === -1){
        
        return  <ServiceLinks />
        
    }
    else {
        return  <ResumeLinks />

        
    }
};


const Contents = () =>{
    const Location = useLocation().pathname;

    console.log(Location);
    

    if (Location.toLowerCase().indexOf("/service/") === -1  && Location.toLowerCase().indexOf("/resume/") === -1){
        return (
            <React.Fragment>
            <Section>
                <QuoteDisplay>Expectional People Learn that doing their best is all they can do. - Wes Fesler</QuoteDisplay>
            </Section>
        </React.Fragment>
                );
    }
    
    else {
        return (
            <React.Fragment>
                <Section>
                    <NavJudge />
                    <LogoPosition>
                        <Link to="/"><Img src={Logo} /></Link>
                    </LogoPosition>
                </Section>
            </React.Fragment>
           
                
        );
    }


};

const SectionNavBar = () =>{

    return <div><Contents/></div>
};


export default function SectionNav(){
    return <SectionNavBar />;
}
import React from 'react';
import styled from "styled-components";
import { Link,useLocation } from 'react-router-dom';
import ResumeLinks from './Links/ResumeLinks';
import ServiceLinks from './Links/SerivcesLinks';
import Logo from './../../../Pages/sharedAssets/loadingAssets/logo.svg';


const Section = styled.div`
    background-color: transparent; 
    position: fixed; 
    bottom: 0; 
    padding: 20px 10px; 
    padding-bottom: 35px; 
    width: 100vw; 
    z-index: 20;
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
    const Resume = "resume";

    if (Location.indexOf(Resume) !== -1){
        return <ResumeLinks />
    }
    else {
        return <ServiceLinks />
    }
};


const Contents = () =>{
    const Location = useLocation().pathname;
    const Service = "service";
    const Resume = "resume";

    console.log(Location);
    

    if (Location.indexOf(Service) !== -1 && useLocation.indexOf(Resume) !== -1 ){
        return <React.Fragment><Section><QuoteDisplay>Expectional People Learn that doing their best is all they can do. - Wes Fesler</QuoteDisplay>    </Section></React.Fragment>
    }
    else {
        return <Section>
                    <div>
                        <ul>
                           <NavJudge />
                        </ul>
                    </div>
                    <LogoPosition>
                        <Link to="/"><Img src={Logo} /></Link>
                    </LogoPosition>
                </Section>
    }


};

const SectionNavBar = () =>{

    return <div><Contents/></div>
};


export default function SectionNav(){
    return <SectionNavBar />;
}
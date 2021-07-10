import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';
import HomeIcon from '../../../Pages/sharedAssets/Home.png';
import ServiceIcon from '../../../Pages/sharedAssets/SVG/ServicesIcon.svg';
import ResumeIcon from '../../../Pages/sharedAssets/SVG/ResumeIcon.svg';

const Title = styled.div`
    color: white;
    font-size: 14px;
    text-align: center;
`;
const Image = styled.img`
    width: 50px;
    height: 54px;
`;

const HomeSection = () =>{
    return(
        <React.Fragment>
            <Image src={HomeIcon} />
            <Title>Home</Title>
        </React.Fragment>
    )
};

const ServiceSection = () =>{
    return(
        <React.Fragment>
            <Image src={ServiceIcon} />
            <Title>Service</Title>
        </React.Fragment>
    )
};

const ResumeSection =() =>{
    return(
        <React.Fragment>
            <Image src={ResumeIcon}/>
            <Title>Resume</Title>
        </React.Fragment>
    )
}

const NavJudge = () =>{
    const Location = useLocation().pathname;
    const Resume = "resume";

    if (Location.indexOf(Resume) !== -1){
        return <ResumeSection/>
        
    }
    else {
        return  <ServiceSection/>
    }
};


const Contents = () =>{
    const Location = useLocation().pathname;
    const Service = "service";
    const Resume = "resume";

    console.log(Location);
    

    if (Location.indexOf(Service) !== -1 && Location.indexOf(Resume) !== -1 ){
        return <HomeSection/>
    }
    else {
        return <NavJudge />              
    }


};

const SectionIndicator = () =>{

    return <div><Contents/></div>
};
export default SectionIndicator;
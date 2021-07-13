import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HomeIcon from '../../../Pages/sharedAssets/Home.png';
import ServiceIcon from '../../../Pages/sharedAssets/SVG/ServicesIcon.svg';
import ResumeIcon from '../../../Pages/sharedAssets/SVG/ResumeIcon.svg';

const Title = styled.div`
    color: white;
    font-size: 26px;
    text-align: center;
    margin-left: -25px;
`;
const HomeTitle = styled(Title)`
    margin-left:-31px;
`;
const ResumeTitle = styled(Title)`
    margin-top:-10px;
    margin-left:-63px;
`;
const Image = styled.img`
    width: 50px;
    height: 54px;
`;
const ServiceImage = styled(Image)`
    height: 75px;
    width: auto;
    margin-bottom: -17px;
    margin-left:-5px;
`;

const ResumeImage = styled(Image)`
    width: 140px;
    height: auto;
    margin-top: -47px;
    margin-bottom: -37px;
    margin-left:-62px;
`;

const HomeSection = () =>{
    return(
        <React.Fragment>
            <Image src={HomeIcon} />
            <HomeTitle>Home</HomeTitle>
        </React.Fragment>
    )
}

const ServiceSection = () =>{
    return(
        <React.Fragment>
            <ServiceImage src={ServiceIcon} />
            <Title>Service</Title>
        </React.Fragment>
    );
};

const ResumeSection = () =>{
    return(
        <React.Fragment>
            <ResumeImage src={ResumeIcon}/>
            <ResumeTitle>Resume</ResumeTitle>
        </React.Fragment>
    )
}

const NavJudge = () =>{
    const Location = useLocation().pathname;
    const Resume = "resume";

    if (Location.indexOf(Resume) === -1){
        return <ServiceSection/>
        
    }
    else {

        return  <ResumeSection/>
        
    }
}


const Contents = () =>{
    const Location = useLocation().pathname;
       console.log("Section Indicator Prints"+ {Location});
    

    if (Location.toLowerCase().indexOf("/service/") === -1  && Location.toLowerCase().indexOf("/resume/") === -1){
        return <HomeSection/>
    }
   
    else {
        return <NavJudge />              
    }


}

const SectionIndicator = () =>{

    return <React.Fragment><Contents/></React.Fragment>
};
export default SectionIndicator;
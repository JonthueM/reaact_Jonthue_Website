import React from 'react';
import styled from 'styled-components';
import ResumeIcon from '../../sharedAssets/SVG/ResumeIcon.svg';

const SVG = styled.img`
    position: absolute;
    top: 230px;
    left:43%;
    height: 460px;
    width: 422px;
       
`;
const Title = styled.p`
    font-size: 122px;
    margin-top: 0%;
    text-decoration: none;
    text-align: center;
    color:white;
    position: absolute;
    top:510px;
    right: 40%;
`;

class rHome extends React.Component {
    render() {
        return(
            <React.Fragment>
                    <SVG src={ResumeIcon}/>
                    <Title>Resume</Title>
            </React.Fragment>
        );
        
    }
 }
 export default rHome;
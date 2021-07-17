import React from 'react';
import styled from "styled-components";
import ServiceIcon from "../../sharedAssets/SVG/ServicesIcon.svg";

const SVGservices = styled.img`
    position: absolute;
    top: 230px;
    right: 43%;
    z-index: 900;
    height: 360px;
    width: 322px;
   

`;
const Title = styled.p`
    font-size: 122px;
    margin-top: 0%;
    text-decoration: none;
    text-align: center;
    color:white;
    position: absolute;
    top:500px;
    right: 42%;
`;


function sHome (){
    
        return(
            <React.Fragment>
                    <SVGservices src={ServiceIcon}/>
                    <Title>Service</Title>
             </React.Fragment>
        );
        
     
}
 export {sHome};
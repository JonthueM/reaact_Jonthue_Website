import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';


const FlexBox = styled.div`
    display: flexbox;
    margin-top: -8px;
`;
const PageName = styled.h1`
    color:white;
    font-size: 58px;
    margin-bottom: -15px;
`;
const PageState = styled.p`
    color: green;
        text-transform: uppercase;
        letter-spacing: 6px;
        font-size: 12px;
        font-weight: bold;
        `;

    const TextualProgressPart = styled.div`
        margin-top: -45px;
        margin-left: 10px;
    `;

const VisualProgressPart = styled.div`
`;
const TrafficLights = styled.div`
    background-color: #222;
    background-image: linear-gradient(transparent 2%, #111 2%, transparent 75%,  #111 30% );
    width: 30px;
    height: 70px;
    border-radius: 7px;
    position: fixed;
    border: solid 1px #333;
    position: relative;
    margin-right: 10px;
    margin-top: 3px;
`;

const RedLights = styled.div`
    background: red;
    background-size: 5px 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    left: 8px;
    /*animation: 13s red 1;*/
    border: solid 2px red;
`;

const YellowLights = styled.div`
    background: yellow;
    background-size: 5px 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: solid 2px yellow;
    position: absolute;
    top: 28px;
    left: 8px;
    /* animation: 10s yellow 1; */
`;

const GreenLights = styled.div`
    background: lime;
    background-size: 5px 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: solid 2px lime;
    position: absolute;
    top: 50px;
    left: 8px;
`;

function StatusIndicator(){
    const Location = useLocation().pathname;
    var Filename  = Location.substring(Location.lastIndexOf('/')+1).charAt(0).toUpperCase() + Location.substring(Location.lastIndexOf('/')+1).slice(1);

    return (
        <React.Fragment>
            <FlexBox>
                <VisualProgressPart>
                    <TrafficLights>
                        <RedLights></RedLights>
                        <YellowLights></YellowLights>
                        <GreenLights></GreenLights>
                    </TrafficLights>
                </VisualProgressPart>
                <TextualProgressPart>
                    <PageName>{Filename}</PageName>
                    <PageState>Complete</PageState>
                </TextualProgressPart>
            </FlexBox>
            
        </React.Fragment>
    )
    
}
export default StatusIndicator;
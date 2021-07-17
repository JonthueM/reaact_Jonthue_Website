import React from 'react';
import styled, { keyframes }  from 'styled-components';
import StatusIndicator from './statusIndicator.jsx';
import SectionIndicator from './sectionIndicator.jsx';

const Top = keyframes`
 from{top:-100px} 
  to{top:0px;}
`;

const IndicatorPosition = styled.div`
    position: sticky;
    top: 40;
    margin: 40px 20px;
    animation: ${Top} 4s ease 1;

`;
const IndicatorContainer = styled.div`
    display: flex;
    justify-content: space-between;
    animation: ${Top} 4s ease 1;


`;
const PositionLeft = styled.div`
    width: 250px;
    display:flex;
    height: 27px;
    animation: ${Top} 4s ease 1;


`;
const PositionCenter = styled.div`
    width:75px;
    height: auto;
    margin-left: -40px;
    animation: ${Top} 4s ease 1;


`;
const PositionRight = styled.div`
    width:150px;
    animation: ${Top} 4s ease 1;

`;

function IndicatorBars(){
    return(
        <React.Fragment>
            <IndicatorPosition>
                <IndicatorContainer>
                    <PositionLeft>
                        <StatusIndicator/>
                    </PositionLeft>
                    <PositionCenter>
                        <SectionIndicator/>
                    </PositionCenter>
                    <PositionRight>
                        
                    </PositionRight>
                </IndicatorContainer>
            </IndicatorPosition>
        </React.Fragment>
        );
}
export default IndicatorBars;
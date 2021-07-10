import React from 'react';
import styled from 'styled-components';
import StatusIndicator from './statusIndicator.jsx';
import SectionIndicator from './sectionIndicator.jsx';

const IndicatorPosition = styled.div`
    position: sticky;
    top: 40;
    margin: 40px 20px;
`;
const IndicatorContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const PositionLeft = styled.div`
    width: 250px;
    display:flex;
    height: 27px;

`;
const PositionCenter = styled.div`
    width:75px;
    height: auto;
`;
const PositionRight = styled.div`
    width:150px;
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
import React from 'react';
import styled from "styled-components";

const CenterContainer = styled.div`
    margin-top: -7.9%;
    display: flex; 
    align-items: center; 
    justify-content: center;
    height: 100vh;
`;

const PageContainer = styled.div`
    width: 1496px;
    height: 693px;
    background-color: grey;
    overflow: hidden;
    padding: 0;
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);`;

const ColumnContainer = styled.div`
    display: flex;
    background-color: #363636;
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 50%;
`;

const LeftColumn = styled(ColumnContainer)`
    float: left;
    height: 100vh;

`;

const RightColumn = styled(ColumnContainer)`
    float: right;
    height: 100vh;
    
`;


const PageLayout = (props) =>{
   

    return(
    <React.Fragment>
        
        <CenterContainer>

            <PageContainer>

                <LeftColumn>
                    {props.LeftColumn}
                </LeftColumn>

                <RightColumn>
                    
                     {props.RightColumn}   
                    
                </RightColumn>

            </PageContainer>

        </CenterContainer> 

    </React.Fragment>
);
}
export {PageLayout};
import React from 'react';
import styled from "styled-components";
import {useLocation } from 'react-router-dom';

const CenterContainer = styled.div`
    margin-top: -7%;
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
const ImageContainer = styled.div`
    flex:1;
    height: 100vh;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width:50%;
    overflow: hidden;
    background-image: url(${props => props.Image});
    background-repeat: no-repeat;
    background-position:center;
    background-size:cover;
`;

const ContentArea = styled.div`
    width: 80%;
    height: 100vh;
    margin: 15px auto;
    height:100%;
    overflow: hidden;
    color:white;
    
`;

const PageTitle = styled.h1`
    font-size: 50px;
    text-align:center;
    text-transform:uppercase;
    color: #E91C00;

`;


const ContentSpace = styled.div`
    font-size: 23px;
    padding: 0;
    margin: 0;
`;


const MainContentlayout = (props) =>{
    const Location = useLocation().pathname;
    var Filename  = Location.substring(Location.lastIndexOf('/')+1);

    return(
    <React.Fragment>
        
        <CenterContainer>

            <PageContainer>

                <LeftColumn>
                    <ImageContainer />
                </LeftColumn>

                <RightColumn>
                    
                        <ContentArea>
                            <PageTitle>{Filename}</PageTitle>
                            <ContentSpace>{props.children}</ContentSpace>
                        </ContentArea>
                    
                </RightColumn>

            </PageContainer>

        </CenterContainer> 

    </React.Fragment>
);
}
export default MainContentlayout;
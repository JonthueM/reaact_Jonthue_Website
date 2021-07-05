import React from 'react';
import styled from "styled-components";
import backgroundIMAGE from './images/background.png';

const CenterContainer = styled.div`
    margin-top: -7%;
    display: flex; 
    align-items: center; 
    justify-content: center;
    height: 100vh;
`;

const PageContainer = styled.div`
    width: 986px;
    background-color: grey;
    overflow: hidden;
    padding: 0;
    box-shadow: ${props => props.theme.shadow};
`;

const ColumnContainer = styled.div`
    display: flex;
    background-color: #363636;
`;

const ImageContainer = styled.div`
    flex:1;
    height:493px;
    box-shadow: ${props => props.theme.shadow};
    width:50%;
    overflow: hidden;
    background-image: url(${backgroundIMAGE}) center;
    background-repeat: no-repeat;
    background-position:center;
    background-size:cover;
`;

const ContentArea = styled.div`
    width: auto;
    overflow: hidden;
`;

const PageTitle = styled.h1`
    text-align:center;
    color: ${props => props.theme.myRed};

`;
const ContentContainer = styled.div``;

const ContentSpace = styled.div`
    padding: 0;
    margin: 0;
`;
var url = window.location.pathname;
var filename = url.substring(url.lastIndexOf('/')+1);

const mainContentlayout = (props) =>{
    return(
    <div>
        
        <CenterContainer>
            <PageContainer>
                <ColumnContainer>
                    <ImageContainer></ImageContainer>
                </ColumnContainer>
                <ContentContainer>
                    <ContentArea>
                        <ContentArea>
                            <PageTitle>{filename}</PageTitle>
                            <ContentSpace>{props.children}</ContentSpace>
                        </ContentArea>
                    </ContentArea>
                </ContentContainer>
            </PageContainer>
        </CenterContainer>       
    </div>
);
}
export default mainContentlayout;
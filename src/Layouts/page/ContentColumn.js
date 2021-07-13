import React from 'react';
import styled from 'styled-components';
import {useLocation } from 'react-router-dom';


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

const ContentColumn = (props)=>{
    const Location = useLocation().pathname;
    var Filename  = Location.substring(Location.lastIndexOf('/')+1);
    return(
        <React.Fragment>
            <ContentArea>
                <PageTitle>{Filename}</PageTitle>
                <ContentSpace>{props.children}</ContentSpace>
            </ContentArea>
        </React.Fragment>
    )
}
export default ContentColumn;
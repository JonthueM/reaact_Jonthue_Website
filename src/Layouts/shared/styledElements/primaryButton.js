import React from 'react';
import styled from 'styled-components';

const PrimaryButton = styled.button`
    color:white;
    box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color:rgba(0, 0, 0, 1);
    width:118px;
    height:43px;
    border-radius:5px;
    border:1px solid rgba(0, 0, 0, 1);
    color:rgba(255, 255, 255, 1);
    text-align:center;
    font-size:14px;
    text-transform: uppercase;
    transition: 0.9s;

    &:hover{
        box-shadow:0px 4px 4px rgba(233.00000131130219, 27.999969832599163, 0, 0.25);
	    background-color:rgba(233.00000131130219, 28.000000230968, 0, 1);
    }

`;


export  const primaryButton = ({children}) =>{
    return <PrimaryButton>{children}</PrimaryButton>
};
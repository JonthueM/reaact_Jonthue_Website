import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    height: 52px;
    width: 18.9%;
    border-radius: 3px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    resize: none;
    padding: 0;
    color: white !important;
    background-color: rgba(0,0,0,0.56);
    border:1px solid rgba(0, 0, 0, 1);
    text-align:left;
    display:block;
    transition: 0.9s;

    &:hover{
    border-left: 1px solid red;
    
    &::placeholder{
        color: white;
        padding-left: 10px;
        opacity: 1;
        text-shadow: ${props => props.theme.textShadow};
    }

    }

`;
export const InputType =() =>{
    return <Input/>
};
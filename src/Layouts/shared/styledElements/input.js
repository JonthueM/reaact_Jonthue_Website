import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    height: 52px;
    width: 18.9%;
    

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
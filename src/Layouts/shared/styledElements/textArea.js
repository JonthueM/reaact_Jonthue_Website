import React from 'react';
import styled from 'styled-components';
import {InputType} from './input';

const TextAreas = styled(InputType).attrs({
    placeholder:"Message",
    cols:"7",
    rows:"4"
})`
    width: 18%;
    padding-top:15px;
    padding-left:5px;
    padding-right:12px;
`;

export const TextArea = () =>{
    return <TextAreas as="textarea" />
}
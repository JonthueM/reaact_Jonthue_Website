import React from 'react';
import styled from 'styled-components';

const SubTitle = styled.h2`
    color: white;
    font-size:1em;
`;

export const H2 = ({children}) =>{
    return<SubTitle>{children}</SubTitle>
};
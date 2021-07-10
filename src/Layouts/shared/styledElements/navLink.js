import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const TempNavLinks = styled(NavLink)`
    text-decoration: none;
    color:white;
`;

export const NavLinks = ({children}) =>{
    return <TempNavLinks>{children}</TempNavLinks>
};
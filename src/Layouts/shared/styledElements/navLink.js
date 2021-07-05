import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavLinks = styled(Link)`
    text-decoration: none;
    color:white;
`;

export const NavLink = ({children}) =>{
    return <NavLinks>{children}</NavLinks>
};
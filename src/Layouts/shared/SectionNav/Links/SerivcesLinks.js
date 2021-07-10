import React from 'react';
import styled from "styled-components";
import {ListItems} from './ListItems';
import {NavLink} from 'react-router-dom';

import { serviceHome, serviceAbout, serviceServices, serviceApplocker,serviceContact, serviceStart, servicePortfolio} from '../../../../routes';

const StyledLinks = styled(NavLink)`
 text-decoration: none;
 color: white;
 &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
function ServicesLinks(){
    return(
    <React.Fragment>
        <ListItems><StyledLinks to={serviceHome}>Home</StyledLinks></ListItems>
        <ListItems><StyledLinks to={serviceAbout}>About</StyledLinks></ListItems>
        <ListItems><StyledLinks to={serviceServices}>Services</StyledLinks></ListItems>
        <ListItems><StyledLinks to={servicePortfolio}>Portfolio</StyledLinks></ListItems>
        <ListItems><StyledLinks to={serviceApplocker}>AppLocker</StyledLinks></ListItems>
        <ListItems><StyledLinks to={serviceStart}>Start</StyledLinks></ListItems>
        <ListItems><StyledLinks to={serviceContact}>Contact</StyledLinks></ListItems>
    </React.Fragment>
    );
};

export default ServicesLinks;
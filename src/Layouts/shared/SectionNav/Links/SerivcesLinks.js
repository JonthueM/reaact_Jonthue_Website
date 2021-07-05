import React from 'react';
import {NavLink} from '../../styledElements/navLink';
import {ListItems} from './ListItems';
import { serviceHome, serviceAbout, serviceServices, serviceApplocker,serviceContact, serviceStart, servicePortfolio} from '../../../../routes';


function ServicesLinks(){
    return(
    <React.Fragment>
        <ListItems><NavLink to={serviceHome}>Home</NavLink></ListItems>
        <ListItems><NavLink to={serviceAbout}>About</NavLink></ListItems>
        <ListItems><NavLink to={serviceServices}>Services</NavLink></ListItems>
        <ListItems><NavLink to={servicePortfolio}>Portfolio</NavLink></ListItems>
        <ListItems><NavLink to={serviceApplocker}>AppLocker</NavLink></ListItems>
        <ListItems><NavLink to={serviceStart}>Start</NavLink></ListItems>
        <ListItems><NavLink to={serviceContact}>Contact</NavLink></ListItems>
    </React.Fragment>
    );
};

export default ServicesLinks;
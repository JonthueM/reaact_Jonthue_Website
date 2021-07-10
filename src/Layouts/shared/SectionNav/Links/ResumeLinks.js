import React from 'react';
import {ListItems }from './ListItems';
import styled from "styled-components";
import {NavLink} from 'react-router-dom';
import { resumeHome, resumeAbout, resumeContact, resumeGitHub, resumeApplocker, resumeProjects, resumeResumes} from '../../../../routes';

const StyledLinks = styled(NavLink)`
 text-decoration: none;
 color: white;
 &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;
function ResumeLinks(){
    return(
    <React.Fragment>
        <ListItems><StyledLinks to={resumeHome}>Home</StyledLinks></ListItems>
        <ListItems><StyledLinks to={resumeAbout}>About</StyledLinks></ListItems>
        <ListItems><StyledLinks to={resumeResumes}>Resume</StyledLinks></ListItems>
        <ListItems><StyledLinks to={resumeProjects}>Projects</StyledLinks></ListItems>
        <ListItems><StyledLinks To={resumeApplocker}>AppLocker</StyledLinks></ListItems>
        <ListItems><StyledLinks To={resumeGitHub}>Github</StyledLinks></ListItems>
        <ListItems><StyledLinks To={resumeContact}>Contact</StyledLinks></ListItems>
    </React.Fragment>
    );
};

export default ResumeLinks;
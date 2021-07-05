import React from 'react';
import {ListItems }from './ListItems';
import {NavLink} from '../../styledElements/navLink';
import { resumeHome, resumeAbout, resumeContact, resumeGitHub, resumeApplocker, resumeProjects, resumeResumes} from '../../../../routes';

function ResumeLinks(){
    return(
    <React.Fragment>
        <ListItems><NavLink to={resumeHome}>Home</NavLink></ListItems>
        <ListItems><NavLink to={resumeAbout}>About</NavLink></ListItems>
        <ListItems><NavLink to={resumeResumes}>Resume</NavLink></ListItems>
        <ListItems><NavLink to={resumeProjects}>Projects</NavLink></ListItems>
        <ListItems><NavLink To={resumeApplocker}>AppLocker</NavLink></ListItems>
        <ListItems><NavLink To={resumeGitHub}>Github</NavLink></ListItems>
        <ListItems><NavLink To={resumeContact}>Contact</NavLink></ListItems>
    </React.Fragment>
    );
};

export default ResumeLinks;
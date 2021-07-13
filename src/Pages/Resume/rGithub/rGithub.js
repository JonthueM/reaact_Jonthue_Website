import React from 'react';
import styled from "styled-components";
import Layout from '../../../Layouts/page/pageLayout';
import { H2 } from "../../../Layouts/shared/styledElements/H2";
import {primaryButton} from '../../../Layouts/shared/styledElements/primaryButton';
import {ImageContainer} from "../../../Layouts/page/ImageColumn";
import ContentColumn from '../../../Layouts/page/ContentColumn';
import BackgroundImage from './images/github.png';

const Button = styled(primaryButton)`
margin-left: 140px;
`;

 const GitHubContent = ()=>{
     return(
            <React.Fragment>
                    <H2>Source Code </H2>
                    <p>Been using Github for ?!!! and I love the support and the  <br/>
                    ease that it brings. Almost all my personal and professional <br /> 
                    projects are on there. Here is a list of apps and projects that 
                    are currently on and I update: </p>
                <H2>Apps:</H2>
                    <ul>
                        <li>12 Days to Wholeness Journey</li>
                        <li>Vending Machine Mobile</li>
                        <li>Call the Professionals</li>
                    </ul>
                <Button>Check It Out!</Button>
            </React.Fragment>
     );
 }

function rGithub(){
    return(
            <React.Fragment>
                <Layout 
                    RightColumn = {
                        <ContentColumn>
                            <GitHubContent/>
                        </ContentColumn>
                    }
                    LeftColumn ={
                        <ImageContainer Image={BackgroundImage} />
                    }
                />
        </React.Fragment>
        );
        
    
}
export default rGithub;
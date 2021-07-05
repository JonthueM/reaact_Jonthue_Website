import React from 'react';
import styled from "styled-components";
import Layout from '../../../Layouts/page/pageLayout';
import { H2 } from "../../../Layouts/shared/styledElements/H2";
import {primaryButton} from '../../../Layouts/shared/styledElements/primaryButton';

const Button = styled(primaryButton)`
margin-left: 140px;
`;

class rGithub extends React.Component {
    render(){
        return(
            <div>
            <Layout>
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
            </Layout>
        </div>
        );
        
    }
}
export default rGithub;
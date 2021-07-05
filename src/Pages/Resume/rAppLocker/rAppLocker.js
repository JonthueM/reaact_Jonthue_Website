import React from 'react';
import styled from "styled-components";
import Layout from '../../../Layouts/page/pageLayout';
import { H2 } from "../../../Layouts/shared/styledElements/H2";
import {primaryButton} from '../../../Layouts/shared/styledElements/primaryButton';

const Button = styled(primaryButton)`
        margin-left: 140px;
`;

const Title = styled(H2)`
 color:white;
`;
function rApplockerLocker(){
    
        
 return (
        <div>
            <Layout>
                <Title>Description </Title>
                    <p>This app locker is built using _____ ___________ ___________. <br/>
                    It is made to showcase the mobile applications that I hadd desiged <br/>
                    and built from scratcth.  Demostrating not only the ability to construct <br /> 
                    complex functionality but also to provide a delicious front-end look and experience. </p>
                <Title>Apps:</Title>
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
export default rApplockerLocker;
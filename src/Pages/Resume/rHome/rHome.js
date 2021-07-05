import React from 'react';
import styled from 'styled-components';
import Layout from '../../../Layouts/page/pageLayout';
import ResumeIcon from '../../sharedAssets/SVG/ResumeIcon.svg';

const SVG = styled.img`
        position: relative;
        z-index: 900;
        height: 10000px; transform:translate(43.5%,44.6%); 
`;

class rHome extends React.Component {
    render() {
        return(
            <div>
            <Layout>
                <a href='/'>
                    <SVG src={ResumeIcon}/>
                </a>
            </Layout>
        </div>
        );
        
    }
 }
 export default rHome;
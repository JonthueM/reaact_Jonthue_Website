import React from 'react';
import styled from 'styled-components';
import Layout from '../../../Layouts/page/pageLayout';
import BackgroundImage from './images/background.png';
import {ImageContainer} from "../../../Layouts/page/ImageColumn";
import ContentColumn from '../../../Layouts/page/ContentColumn';

const  ProjectsContent = ()=>{
    return(
        <React.Fragment>
            Build Slider
        </React.Fragment>
        )
}



function componentName() {
    return (
        <React.Fragment>
            <Layout 
                RightColumn ={
                    <ContentColumn>
                        <ProjectsContent />
                    </ContentColumn>
                }
                LeftColumn={
                    <ImageContainer Image={BackgroundImage} />
                }
            />
        </React.Fragment>            
    )
}

export default componentName

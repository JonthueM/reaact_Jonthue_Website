import React from 'react';
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



function rProjects() {
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

export {rProjects}

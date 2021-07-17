import React from 'react';
import BackgroundImage from './images/background.png';
import {ImageColumn, ContentColumn, PageLayout} from "../../../directory";

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
            <PageLayout 
                RightColumn ={
                    <ContentColumn>
                        <ProjectsContent />
                    </ContentColumn>
                }
                LeftColumn={
                    <ImageColumn Image={BackgroundImage} />
                }
            />
        </React.Fragment>            
    )
}

export {rProjects};

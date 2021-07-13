import React from 'react';
import Layout from '../../../Layouts/page/pageLayout';
import Image from './images/background.png';
import {ImageContainer} from "../../../Layouts/page/ImageColumn";
import ContentColumn from '../../../Layouts/page/ContentColumn';


const PortfolioContent = ()=>{
    return(
        <React.Fragment>
                           Coming Soon

        </React.Fragment>
    );
}

function Portfolio() {
    
        return (
            <div>
                <Layout
                 RightColumn={
                     <ContentColumn>
                         <PortfolioContent />
                     </ContentColumn>
                 }
                 LeftColumn={
                     <ImageContainer Image={Image} />
                 }
                />
        
            </div>
            )
    
}
export default Portfolio;
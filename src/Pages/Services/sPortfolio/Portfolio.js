import React from 'react';
import {ImageColumn, ContentColumn, PageLayout} from "../../../directory";
import Image from './images/background.png';


const PortfolioContent = ()=>{
    return(
        <React.Fragment>
                Coming Soon

        </React.Fragment>
    );
}

function sPortfolio() {
    
        return (
            <div>
                <PageLayout
                 RightColumn={
                     <ContentColumn>
                         <PortfolioContent />
                     </ContentColumn>
                 }
                 LeftColumn={
                     <ImageColumn Image={Image} />
                 }
                />
        
            </div>
            )
    
}
export  {sPortfolio};
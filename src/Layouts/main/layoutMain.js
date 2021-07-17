import React from 'react';
import VideoBackground from '../shared/videoBackground/VideoBackground';
import IndicatorBar from '../shared/indicatorBar/indicatorBar';
import SectionNav from '../shared/SectionNav/SectionNav';
import R2 from '../shared/R2/R2';

const Layout = (props) =>{
    return(
            <div>
                <VideoBackground>
                    <IndicatorBar/>
                    <R2 />
                    {props.children}
                    <SectionNav />
                </VideoBackground>
            </div>
            );
}
export  {Layout};
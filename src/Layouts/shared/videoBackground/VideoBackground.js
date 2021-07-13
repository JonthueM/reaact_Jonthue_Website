import React from 'react';
import video from './videoBackgroundAssets/video.mp4';
import styled from 'styled-components';

const Content = styled.div`
    z-index: 100;
    position: absolute;
    padding: 0;
    margin: 0;
    width: 100vw;
`;

const Outer = styled.div`
    text-align: center;
    position: relative;
    overflow: hidden;
    min-height: 100vh;
`;

const HomeTopVideo = styled.div`
    left: 0%;
    top: 0%;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    position: absolute;
    z-index: -7;
    &:before{
        content:"";
        position: absolute;
        top:0;
        right:0;
        left:0;
        bottom:0;
        z-index:1;
        background-color:rgba(0, 0, 0, 0.6);
    }
`;
const videoBackgroound = ({children}) =>{
    return(
    <div>
        <Content>
                {children}
        </Content>
        
        <Outer>
                <HomeTopVideo>
                    <video autoPlay loop muted width="100%">
                        <source src={video} />
                    </video>
                </HomeTopVideo>
        </Outer>
    </div>
);
}
export default videoBackgroound;
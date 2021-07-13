import React from 'react';
import dial from './R2Assets/dial.svg';
import home from './R2Assets/home.svg';
import leftTriangle from './R2Assets/TriangleArrow-Right.svg';
import rightTriangle from './R2Assets/TriangleArrow-Left.svg';
import styled, { keyframes } from "styled-components";
import {rootPath} from './../../../routes';
import {Link} from 'react-router-dom';

const SlideLeft = keyframes`
 from{left:-100px;} 
  to{left:0;}
`;

const SlideRight = keyframes`
from{right:-100px} 
  to{right:0;}
`;

const Vspot = styled.div`
    position: fixed;
    z-index: 2;
    width: 100vw;
    height: 10vw;
    top: 25%;
`;
const Oneline = styled.div`
    display: flex;
    align-content: center;
    justify-content:space-between; 
    margin: auto 0;
    padding: auto 0;
    height: 100%; 
`;
const FlexIT = styled.div`
    height: 200%;
    display: flex;
    align-items: center !important;
`;

const LeftNav = styled.div`
    width: 231px;   
    position: absolute;
    top: 65%; 
    animation: ${SlideLeft} 4s ease 1;
`;
const RightNav = styled.div`
    position: absolute;
    top: 68%;
    right: 0;
    animation: ${SlideRight} 4s ease 1;
`;
const Triangle = styled.img`
    width: 130px;
    height: 150px;
    z-index: 2;
`;
const LeftTriangle = styled(Triangle)`
    z-index: 1;
    
`;

const SVGcontainter = styled.div`

`;

const Image = styled.img`
    z-index: 300;
    position: absolute;
    top: 50px;
    height: 70px;
    width: 70px;
`;

const LeftImage = styled(Image)`
    top:30%;
    height:65px;
    width: 65px;
`;
const RightImage = styled(Image)`
    right: 15px;
    height: 45px;
    width: 45px;
    top: 33%;
`;

function R2(){
    return(
        <Vspot>
            <Oneline>
                <FlexIT>
                    <LeftNav>
                        <LeftTriangle src={leftTriangle} />
                        <SVGcontainter>
                            <Link to={rootPath}>
                                <LeftImage src={home} />
                            </Link>
                        </SVGcontainter>
                    </LeftNav>
                </FlexIT>
                <FlexIT>
                    <FlexIT>
                        <RightNav>
                            <Triangle src={rightTriangle} />
                            <SVGcontainter>
                                <Link to="/">
                                    <RightImage src={dial}  />
                                </Link>
                            </SVGcontainter>
                        </RightNav>
                    </FlexIT>
                </FlexIT>
            </Oneline>
        </Vspot>
    );
}
export default R2;
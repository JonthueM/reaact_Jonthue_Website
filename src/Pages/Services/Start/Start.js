import React from 'react';
import styled from "styled-components";
import Layout from '../../../Layouts/page/pageLayout';
import Image  from './images/background.png';
import { H2 } from "../../../Layouts/shared/styledElements/H2";
import {ImageContainer} from "../../../Layouts/page/ImageColumn";
import ContentColumn from '../../../Layouts/page/ContentColumn';


const Button = styled.button`
margin-left: 140px;
`;

const ListItem = styled.ul`
    list-style-type: square;
    margin-top: 7px 0;
    font-weight:light;
`;

const Note = styled.p`
    color: ${props => props.theme.myRed};
    font-style:italic; 
    width: 100%;
    text-align:center;
    margin: 7px 0;   
`;

const StartContent = () =>{
    return(
        <React.Fragment>
            <p>Before we start be sure you got some basic things in place <br/>
            so I can develop according to those clear specifcations. To <br/>
            name some</p>
            <H2>Apps:</H2>
            <ListItem>
                <li>Design guide (idea visual as to how you want it to look)</li>
                <li>Assets (logo, pictures etc...)</li>
                <li>And budget (so we can began to talk based on it and all)</li>
            </ListItem>
            <p>Honesty is the best policy and I will let you know how <br/> to make it work!</p>
            <Button>Lets Go!</Button>

            <Note>Note: This a desin brief which will take some time to fill out!</Note>
        </React.Fragment>
        );
}


function sStart (){
    
        return(
            <React.Fragment>
                <Layout 
                    RightColumn = {
                        <ContentColumn>
                            <StartContent/>
                        </ContentColumn>
                    }
                    LeftColumn = {
                        <ImageContainer Image={Image}/>
                    }
                />
            </React.Fragment>

            );
        
    
}

export  {sStart};
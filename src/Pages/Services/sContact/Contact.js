import React from 'react';
import Layout from '../../../Layouts/page/pageLayout';
import {ImageContainer} from "../../../Layouts/page/ImageColumn";
import ContentColumn from '../../../Layouts/page/ContentColumn';
import styled from 'styled-components';
import Image from './images/background.png';


const LeftSideButton = styled.button`
      position: absolute;
    right: 26.3%;
    color:black;
`;

const ContactContent = ()=>{
return(
    <React.Fragment>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea cols="7" rows="4"></textarea>
                <LeftSideButton src="/">Contact</LeftSideButton>
    </React.Fragment>
)
};

function sContact (){
    
        return(
            <React.Fragment>
                <Layout 
                    RightColumn={
                        <ContentColumn>
                            <ContactContent/>
                        </ContentColumn>
                    }
                    LeftColumn={
                        <ImageContainer Image={Image}/>
                    }
                />
        </React.Fragment>
        );
    
}
export {sContact};
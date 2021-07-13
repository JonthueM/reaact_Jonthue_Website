import React from 'react';
import {InputType} from '../../../Layouts/shared/styledElements/input';
import Layout from '../../../Layouts/page/pageLayout';
import {ImageContainer} from "../../../Layouts/page/ImageColumn";
import ContentColumn from '../../../Layouts/page/ContentColumn';
import {TextArea} from '../../../Layouts/shared/styledElements/textArea';
import {primaryButton} from '../../../Layouts/shared/styledElements/primaryButton';
import styled from 'styled-components';
import Image from './images/background.png';

const Name = styled(InputType).attrs(props =>({
    type: "text",
    placeholder: "Name"
}));

const Email = styled(InputType).attrs({
    type: "email",
    placeholder: "Email"
});

const LeftSideButton = styled(primaryButton)`
    margin-left: 12%;
`;

const ContactContent = ()=>{
return(
    <React.Fragment>
                <Name />
                <Email />
                <TextArea />
                <LeftSideButton src="/"/>
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
export default sContact;
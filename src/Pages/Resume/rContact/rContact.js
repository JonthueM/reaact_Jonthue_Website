import React from 'react';
import {InputType} from '../../../Layouts/shared/styledElements/input';
import Layout from '../../../Layouts/page/pageLayout';
import {TextArea} from '../../../Layouts/shared/styledElements/textArea';
import {primaryButton} from '../../../Layouts/shared/styledElements/primaryButton';
import styled from 'styled-components';

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
class rContact extends React.Component{
    render(){
        return(
            <div>
            <Layout>
                <Name />
                <Email />
                <TextArea />
                <LeftSideButton src="/"/>
            </Layout>
        </div>
        );
       
    }
}
export default rContact;
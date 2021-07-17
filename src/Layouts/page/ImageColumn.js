import styled from 'styled-components';

const ImageContainer = styled.div`
    flex:1;
    height: 100vh;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width:50%;
    overflow: hidden;
    background-image: url(${props => props.Image});
    background-repeat: no-repeat;
    background-position:center center;
    background-size:cover;
`;

export {ImageContainer};
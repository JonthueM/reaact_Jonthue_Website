import { createGlobalStyle } from "styled-components";
import RalewayNormal from './Raleway-Regular.woff';

export default createGlobalStyle`
    @font-face {
        font-family: Raleway-Regular;
        src:local('Rale') url(${RalewayNormal});
        font-style: normal;
    }
`;
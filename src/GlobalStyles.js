
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
    *{
    font-family: 'Raleway', sans-serif;

    };
    button{
        color:black;
        box-shadow:0px 4px 4px rgba(0, 0, 0, 0.25);
        background-color:rgba(255, 255, 255, 1);
        width:138px;
        height:53px;
        border-radius:5px;
        border:1px solid rgba(0, 0, 0, 1);
        color:rgba(255, 255, 255, 1);
        text-align:center;
        font-size:14px;
        text-transform: uppercase;
        transition: 0.9s;
    };
    button:hover{
        box-shadow:0px 4px 4px rgba(233.00000131130219, 27.999969832599163, 0, 0.25);
        background-color:rgba(0, 0, 0, 1);
        border-color:black;
        color: white;

    };

    input, textarea{
        border-radius: 3px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        resize: none;
        padding: 0;
        color: white ;
        background-color: rgba(0,0,0,0.46);
        border:1px solid rgba(0, 0, 0, 1);
        text-align:left;
        display:block;
        transition: 0.9s;
        margin-left: 60px;
        margin-bottom: 30px;
    }

    input:hover{
        border-left: 1px solid red;  
    }
    input::placeholder{
        color: white;
        padding-left: 25px;
        opacity: 1;
        box-shadow:0px 4px 7px rgba(0, 0, 0, 0.25);

    }
    input[type=text]{
        height: 72px;
        width: 78.9%;
    }
    input[type=email]{
        height: 72px;
        width: 78.9%;
    }
    textarea{
        width: 76%;
        padding-top:15px;
        padding-left:5px;
        padding-right:12px;
        resize: none;
        }
    textarea::placeholder{
        color: white;
        padding-left:25px;
        font-size:14px;

        }

`;
export default GlobalStyle;

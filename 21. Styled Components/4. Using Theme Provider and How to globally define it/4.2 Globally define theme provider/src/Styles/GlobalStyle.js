import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    p{
        color : green;
        text-decoration : underline;
        background-color: yellow;
        font-size: ${({ theme }) => theme.p.size}
    }

    button{
        color : ${({ theme }) => theme.btn2.textColor};
        font-size: ${({ theme }) => theme.btn2.size};
    }
`;


export default GlobalStyle;

// don't use " " write it like as same as CSS
// we takes the value of theme from Themes.js  without importing it
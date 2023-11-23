import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    //border: 1px solid hotpink;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: #f0f2f5;
    font-family: 'Cabin', sans-serif;
    //font-family: 'Roboto', sans-serif;
  }
`;

export default GlobalStyle;

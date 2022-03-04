import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background: rgb(20, 20, 20);
    font-family: 'Inter', sans-serif;
  }

  button {
    font-weight: bold;
    font-size: 2.3rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.3s ease;

    &:hover {
      background: #23d997;
    }
    
  }

  h2 {
    font-weight: lighter;
    font-size: 6rem;
  }

  h3 {
    font-size: 2.3rem;
    color: white;
  }

  h4 {
    font-weight: bold;
  }

  span {
    font-weight: bold;
    color: #23d997;
  }

  a {
    font-size: 2.3rem;
  }

  p {
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 2.3rem;
    line-height: 150%;
  }
`;

export default GlobalStyle;

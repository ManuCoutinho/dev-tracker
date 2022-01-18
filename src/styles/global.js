import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle `
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

html {
  @media (max-width: 1080px){
    font-size: 93.75%;
  }

  @media (max-width: 720px){
    font-size: 87.5%;
  }
}

body {
  background: ${({theme}) => theme.bg};
  color: ${({theme}) => theme.text};
  transition: ${({theme}) => theme.transition};
}

body, input, textarea, button {
  font-family: 'PT Sans', sans-serif; 
  font-weight: 400;
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 700;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;  
}
`
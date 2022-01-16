import { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyle = createGlobalStyle `
  :root {  
  --bg-primary: #121214;
  --bg-card:#29292E;
  --blue-el: #1F2729;
  --text: #F1F2F3;
  --border: rgba(255, 255, 255, 0.7);
  --hover: #0078f1;
}

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
  background: var(--bg-primary);
  color: var(--text);  
}

body, input, textarea, button {
  font-family: 'PT Sans', sans-serif; 
  font-weight: 400;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 700;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: filter 0.2s;   
}

a:hover {
  filter: brightness(0.8);
  color: var(--hover);
  transition: 0.2s;  
}
`
import { createGlobalStyle } from "styled-components"

 export const GlobalStyle = createGlobalStyle`
  :root {
    --silverDark: #2C373D;
    --background: #f0f2f5;

    --red: #C72C41;
    --silver: #D8D8D8;
    --green: #5429cc;

    --blue: #5429cc;
    --blue-light: #6933ff;
    --text-title: #363f5f;

    --shape: #FFFFFF;
  }
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }
 html {
   height: 100%;
   @media (max-width: 1080px) { // quando o usuario estiver com uma tela até 1080 pixels de largura, vou diminuir a fonte
     font-size: 93.75%; // 15px
   }
   @media (max-width: 720px) { // quando o usuario estiver com uma tela de 720 pixels de largura, vou diminuir a fonte
     font-size: 87.5%; // 14px
   }
 }
 body {
   background: var(--background);
   -webkit-font-smoothing: antialiased; // no chrome, que as fontes ficam mais detalhadas
   background-image: linear-gradient(to bottom, var(--silverDark), white);
   min-height: 100vh;
 }
 body, input, button, textarea {
  font: 400 15px 'Roboto', sans-serif;
}

 button { 
    cursor: pointer;
  }

  .react-modal-overlay {
  background: rgba(0, 0, 0, 0.5);
  
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.react-modal-content {
  width: 100%;
  max-width: 576px;
  background: var(--background);
  padding: 1rem;
  position: relative;
  border-radius: 0.25rem;
}
.react-modal-close {
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;
  &:hover {
    filter: brightness(0.8)
  }
}
 `;
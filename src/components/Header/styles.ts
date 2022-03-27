import styled from "styled-components"

export const HeaderFix = styled.header`
  background-color: var(--silverDark);
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: row;
`;

export const DivButton = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column-reverse;
  /* background-color: yellow; */
`;

export const DivLogo= styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

export const Logo = styled.img`
width: 70px;
height: 65px;
margin-right: 20px;
`;

export const TextLogo = styled.span`
margin-right: 25px;
font-size: 15px;
color: white;
width: 700;
`;

export const RowButtonDiv = styled.div`
    display: flex;
   justify-content: flex-end;
   margin-bottom: 1%;
   margin-right: 1%;
  `;
  
  export const ButtonUsers = styled.button`
    font-size: 15px; // 16 pixels de font
    color: #FFFFFF;  // 
    background: #6CC356; //
    border: 0;
    padding: 0 2rem; // 32 pixels na direita e esquerda
    border-radius: 0.25rem;
    height: 3rem;
    cursor: pointer;
    transition: filter 0.2s; // deixa mais leve a transição do brightness
    &:hover {
      filter: brightness(0.9) // vai levemente escurecer o botão ao passar por cima
    }
  `;

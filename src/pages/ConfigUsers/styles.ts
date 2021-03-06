import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
/* background-color: var(--background); */

/* background-image: url("assets/InventoryManagement.png"); */

`;

export const ImageInventory = styled.img`
  width: 100%;


`;

export const Header = styled.div`

  width: 100%;
  height: 150px;

`;

export const ContainerBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  

`;
export const DivTable = styled.div`
display: flex;
width: 65%;
flex-direction: column;
margin-left: 5px;

`;
export const TitleTable = styled.span`
  color: white;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 700 50px 'Roboto', sans-serif;
  text-align: justify;
  
  `;

export const DivTitle = styled.div`
  margin-top: 5px;
  
  width: 37%;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

export const DivImage = styled.div`
  display: flex;
  width: 45%;
  margin-top: 20px;
  flex-direction: column;
  /* background-color: #E6E6E6; */

`;

export const DivButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  `;
  
  export const ButtonAdd = styled.button`
     display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 13%;
    margin-top: 5px;
    font-size: 15px;
    color: #FFFFFF;  // 
    background: var(--red); //
    border: 0;
    padding: 0 1rem; // 32 pixels na direita e esquerda
    border-radius: 0.25rem;
    height: 3rem;
    cursor: pointer;
    transition: filter 0.2s; // deixa mais leve a transição do brightness
    &:hover {
      filter: brightness(0.9) // vai levemente escurecer o botão ao passar por cima
    }
  `;




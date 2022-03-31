import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

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
margin-left: 3px;
margin-right: 5px;
`;
export const TitleTable = styled.span`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 700 50px 'Roboto', sans-serif;
  text-align: justify;
  `;
export const DivTitle = styled.div`
margin-top: 100px;


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

  `;
  
  export const ButtonAdd = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 24%;
    margin-top: 5px;
    font-size: 15px;
    color: #FFFFFF;  // 
    background: var(--green); //
    border: 0;
    padding: 25px; // 32 pixels na direita e esquerda
    border-radius: 0.25rem;
    height: 3rem;
    cursor: pointer;
    transition: filter 0.2s; // deixa mais leve a transição do brightness
    &:hover {
      filter: brightness(0.9) // vai levemente escurecer o botão ao passar por cima
    }
  `;
  export const ButtonConfigUsers = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 26%;
    margin-top: 5px;
    font-size: 15px; // 
    color: #FFFFFF;  // 
    background: var(--blue); //
    border: 0;
    padding: 25px; // 32 pixels na direita e esquerda
    border-radius: 0.25rem;
    height: 3rem;
    cursor: pointer;
    transition: filter 0.2s; // deixa mais leve a transição do brightness
    &:hover {
      filter: brightness(0.9) // vai levemente escurecer o botão ao passar por cima
    }
  `;




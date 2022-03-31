import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-image: linear-gradient(to right, red, var(--background));
    

`;

export const CardLogin = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
border-radius: 10px;
width: 700px;
height: 500px;
background-color: var(--background);
box-shadow: 1px 1px 1px 1px white;
`;

export const DivLogo = styled.div`

width: 40%;
height: 99%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
/* background-color: red; */

`;

export const DivLogin = styled.form`
display: flex ;
align-items: center;
justify-content: center;
flex-direction: column;

width: 55%;
height: 95%;
margin-right: 10px;
background-color: var(--shape);
border-radius: 10px;
`;


export const ImgLogo = styled.img`
    width: 30%;
`;

export const TitleLogo = styled.span`
    margin-top: 10px;
    font-size: 15px;
    color: grey;
    font-weight: 500;
    `;

export const InputLogin = styled.input`
width: 95%;
padding: 0 1.5rem;
height: 2.5rem;
border-radius: 0.25rem;
border: 1px solid white;
background: #e7e9ee;
box-shadow: 1px 1px 1px 1px white;
&::placeholder {
  color: grey;
}
& + input {
  margin-bottom: 0.5rem;
  margin-top: 1rem;
}
& + select {
  margin-top: 1rem;
}
`;

export const ButtonCreateAcount = styled.button`
border-radius: 5px;
  width: 95%;
  height: 3rem;
  padding: 0 1.5rem;
  background-color: var(--red);
  color: #fff;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  &:hover {
    filter: brightness(0.9);
  }
`;

export const TitleCreateAcount = styled.span`
    font-size: 18px;
    color: grey;
    font-weight: 500;
`;
export const SubTitleCreateAcount = styled.span`
    font-size: 15px;
    color: grey;
    font-weight: 500;
    margin-bottom: 50px;
`;
export const TitleRegister = styled.span`
    font-size: 12px;
    color: grey;
    font-weight: 500;
    margin-top: 50px;
`;

export const ButtonRegister = styled.button`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 30%;
margin-top: 10px;
/* margin-right: 10px; */
font-size: 11px;
color: #FFFFFF;  // 
font-weight: 500;
background: var(--red); //
border: 0;
padding: 0 0.5rem; // 32 pixels na direita e esquerda
border-radius: 0.25rem;
height: 1.5rem;
cursor: pointer;
transition: filter 0.2s; // deixa mais leve a transição do brightness
&:hover {
 filter: brightness(0.9) // vai levemente escurecer o botão ao passar por cima
}
`;
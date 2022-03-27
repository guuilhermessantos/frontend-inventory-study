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
  
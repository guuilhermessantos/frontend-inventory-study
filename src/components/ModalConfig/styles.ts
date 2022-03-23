import styled from 'styled-components'

export const Container = styled.form`
 width: 100%;
`;


export const TitleModal = styled.h2`
  color: var(--text-title);
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;
export const InputUser = styled.input`
  width: 100%;
    padding: 0 1.5rem;
    height: 2.5rem;
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background: #e7e9ee;
    &::placeholder {
      color: #969CB3;
    }
    & + input {
      margin-bottom: 0.5rem;
      margin-top: 1rem;
    }
    & +  select {
      margin-top: 1rem;
    }
`;
export const ButtonClose = styled.button``;

export const ButtonRegister = styled.button`
  width: 100%;
  padding: 0 1.5rem;
  height: 4rem;
  background-color: var(--green);
  color: #FFF;
  border: 0;
  font-size: 1rem;
  margin-top: 1.5rem;
  &:hover {
    filter: brightness(0.9);
  }
`;
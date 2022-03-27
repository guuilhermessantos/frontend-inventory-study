import React, { useState } from "react";
import Modal from "react-modal";
import {
  ButtonClose,
  ButtonRegister,
  Container,
  InputUser,
  TitleModal,
  BtnCloseContainer,
} from "./styles";
import { FaTimes } from "react-icons/fa";
import api from "../../services/api";

interface IModalRegisterProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

interface IUsers {
  name: string,
	email: string,
	password: string,
	admin: boolean
}

export function ModalUsersRegister({ isOpen, onRequestClose }: IModalRegisterProps) {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [users, setUsers] = useState<IUsers[]>([]);


  async function handleRegisterUser() {
    
    try {
      const { data } = await api.post("users", {

        name: name,
	      email: email,
	      password: password,
	      admin: false
      });
      
      setUsers((state) => [...state, data]);
      onRequestClose()
      
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Container>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        ariaHideApp={false}
        appElement={document.getElementById('root') || undefined}
      >
       
          <BtnCloseContainer>
            <ButtonClose
              type="button"
              onClick={onRequestClose}
              className="react-modal-close"
            >
              <FaTimes />
            </ButtonClose>
          </BtnCloseContainer>
          <TitleModal>Cadastrar Usuario(a) </TitleModal>

          <InputUser placeholder="Nome do Usuario"  onChange={(e) => setName(e.target.value)} />

          <InputUser placeholder="Email" type={"email"} onChange={(e) => setEmail(e.target.value)} />

          <InputUser placeholder="Senha" type={"password"} onChange={(e) => setPassword(e.target.value)} />
          

          <ButtonRegister type="submit" onClick={() => {
            handleRegisterUser()
            }}>Cadastrar</ButtonRegister>
      
      </Modal>
    </Container>
  );
}
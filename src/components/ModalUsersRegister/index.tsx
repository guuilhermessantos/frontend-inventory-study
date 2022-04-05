import React, { Dispatch, SetStateAction, useState } from "react";
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
import { useToasts } from "@geist-ui/react";

interface IModalRegisterProps {
  isOpen: boolean;
  onRequestClose: () => void;
}



export function ModalUsersRegister({ isOpen, onRequestClose }: IModalRegisterProps) {

  const [adminCompare, setCompareAdmin] = useState("")

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [admin, setAdmin] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [, setToast] = useToasts();
  


  async function handleRegisterUser() {
    
    try {
      if (name.length < 3) {
        return setToast({
          text: 'Nome precisa estar preenchido!.',
          type: 'warning'
        })
      }

      if (email.length > 0 ) {
        const usuario = email.substring(0, email.indexOf("@"))
        const dominio = email.substring(email.indexOf("@")+ 1, email.length);

        if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")===-1) &&
        (dominio.search("@")===-1) &&
        (usuario.search(" ")===-1) &&
        (dominio.search(" ")===-1) &&
        (dominio.search(".")!==-1) &&
        (dominio.indexOf(".") >=1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) 
        {}
        else{
          return setToast({
            text: 'Email Invalido!.',
            type: 'error'
          })
        }
      }

      if (email.length < 3) {
        return setToast({
          text: 'Email precisa estar preenchido!.',
          type: 'warning'
        })
      }

      if (password.length < 1) {
        return setToast({
          text: 'Senha precisa estar preenchido!.',
          type: 'warning'
        })
      }

      if (confirmPassword.length < 1) {
        return setToast({
          text: 'Confirmação da senha precisa estar preenchido!.',
          type: 'warning'
        })
      }

      if (password !== confirmPassword ) {
        return setToast({
            text: 'As senhas precisam ser iguais!.',
            type: 'warning'
          })
      }
      
      await api.post("users", {
        name: name,
	      email: email,
	      password: password,
	      admin: false
      });
      setToast({
        text: 'Sua conta foi criada com sucesso, acesse nosso sistema!.',
        type: 'success'
      })

      onRequestClose()
      setName("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")
      
    } catch (error) {
      setToast({
        text: 'Email já esta sendo utilizado em outra conta !.',
        type: 'error'
      })
      
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
          <TitleModal>Criando conta...</TitleModal>

          <InputUser placeholder="Nome do Usuario"  onChange={(e) => setName(e.target.value)} />

          <InputUser placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />

          <InputUser placeholder="Senha" type={"password"} onChange={(e) => setPassword(e.target.value)} />

          <InputUser placeholder="Confirmar Senha" type={"password"} onChange={(e) => setConfirmPassword(e.target.value)} />

      
          <ButtonRegister type="submit" onClick={() => {
            handleRegisterUser()
            }}>Cadastrar</ButtonRegister>
      
      </Modal>
    </Container>
  );
}
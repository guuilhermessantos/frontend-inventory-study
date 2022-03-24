import React from "react";
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

interface IModalRegisterProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalUsersRegister({ isOpen, onRequestClose }: IModalRegisterProps) {
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
              {/* <img src={closeImg} alt="Fechar modal" /> */}
            </ButtonClose>
          </BtnCloseContainer>
          <TitleModal>Cadastrar Usuario(a) </TitleModal>

          <InputUser placeholder="Nome do Usuario" />

          <InputUser placeholder="Email" />
          <InputUser placeholder="Admin" />

          <ButtonRegister type="submit">Cadastrar</ButtonRegister>
      
      </Modal>
    </Container>
  );
}
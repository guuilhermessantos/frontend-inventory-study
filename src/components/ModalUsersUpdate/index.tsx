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

interface IModalUpdateProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function ModalUsersUpdate({ isOpen, onRequestClose }: IModalUpdateProps) {
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
          <TitleModal>Editar Usuario(a) </TitleModal>

          <InputUser placeholder="Nome do Usuario" />

          <InputUser placeholder="Email" />
          <InputUser placeholder="Senha" type={"password"} />

          <ButtonRegister type="submit">Salvar</ButtonRegister>
      
      </Modal>
    </Container>
  );
}
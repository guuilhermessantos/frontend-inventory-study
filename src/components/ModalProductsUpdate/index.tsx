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
  isOpen: boolean,
  onRequestClose: () => void,
  
}

export function ModalProductsUpdate({ isOpen, onRequestClose }: IModalUpdateProps) {
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
        
        <div className="teste">
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
          <TitleModal> Edite um Produto </TitleModal>

          <InputUser placeholder="Nome do Produto" />

          <InputUser placeholder="Observação do Produto" />
          <InputUser placeholder="Quantidade" />

          <ButtonRegister type="submit">Salvar</ButtonRegister>
        </div>
      </Modal>
    </Container>
  );
}
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

interface IModalViewProps {
  isOpen: boolean,
  onRequestClose: () => void,
  
}

export function ModalProductsView({ isOpen, onRequestClose }: IModalViewProps) {
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
          <TitleModal> Visualizar um Produto </TitleModal>

          <InputUser placeholder="Nome do Produto" />

          <InputUser placeholder="Observação do Produto" />
          <InputUser placeholder="Quantidade" />

          <ButtonRegister type="submit">Salvar</ButtonRegister>
        </div>
      </Modal>
    </Container>
  );
}
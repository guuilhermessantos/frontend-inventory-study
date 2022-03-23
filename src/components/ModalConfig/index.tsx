import React from "react"
import Modal from 'react-modal';
import { ButtonClose, ButtonRegister, Container, InputUser, TitleModal } from './styles';

interface NewModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
  }


export function ModalConfig ({isOpen, onRequestClose } : NewModalProps){
    return (
      <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
      >
         <ButtonClose
          type="button"
          onClick={onRequestClose}
          className="react-modal-close"
        >
           {/* <img src={closeImg} alt="Fechar modal" /> */}
         </ButtonClose>
         <Container >
      <TitleModal>Cadastrar Funcionario(a) </TitleModal>

      <InputUser
        placeholder="Nome do Produto"
       
      />

      <InputUser
       placeholder="Observação do Produto"
       
      />
      <InputUser
       placeholder="Quantidade"
       
      />
    
      <ButtonRegister type="submit">Cadastrar</ButtonRegister>

      

       </Container>
    </Modal>

    )
}
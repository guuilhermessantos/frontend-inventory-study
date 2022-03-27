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
import { useUpdateUser } from "../../context/updateUserContext";
import api from "../../services/api";

interface IModalUpdateProps {
  isOpen: boolean;
  onRequestClose: () => void;
  
}

interface IUsers {
  name: string;
  email: string;
  password: string;
  admin: boolean;
}

export function ModalUsersUpdate({ isOpen, onRequestClose }: IModalUpdateProps) {

  const [users, setUsers] = useState<IUsers[]>([]);

  const { id, setId } = useUpdateUser();
  const { name, setName } = useUpdateUser();
  const {email, setEmail} = useUpdateUser();
  const {password, setPassword} = useUpdateUser();
  const {admin, setAdmin} = useUpdateUser();

  async function handleUpdateUser(id: string) {
    
    try {
      const { data } = await api.put(`users/${id}`, {
        name: name,
        email: email,
        password: password,
        admin: admin
       
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
              {/* <img src={closeImg} alt="Fechar modal" /> */}
            </ButtonClose>
          </BtnCloseContainer>
          <TitleModal>Editar Usuario(a) </TitleModal>

          <InputUser placeholder="Nome do Usuario" value={name}  onChange={(e) => setName(e.target.value)} />

          <InputUser placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <InputUser placeholder="Senha" type={"password"} onChange={(e) => setPassword(e.target.value)}/>

          <ButtonRegister type="submit" onClick={() => handleUpdateUser(id)}>Salvar</ButtonRegister>
      
      </Modal>
    </Container>
  );
}
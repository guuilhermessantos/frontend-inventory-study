import React, { Dispatch, SetStateAction, useState } from "react";
import Modal from "react-modal";
import {
  ButtonClose,
  ButtonRegister,
  Container,
  InputUser,
  TitleModal,
  BtnCloseContainer,
  TitleAdmin,
  SelectAdmin,
  OptionAdmin,
} from "./styles";
import { FaTimes } from "react-icons/fa";
import { useUpdateUser } from "../../context/updateUserContext";
import api from "../../services/api";
import { IUsers } from "../../pages/ConfigUsers";
import { useToasts } from "@geist-ui/react";

interface IModalUpdateProps {
  users: IUsers[],
  setUsers: Dispatch<SetStateAction<IUsers[]>>,
  isOpen: boolean;
  onRequestClose: () => void;
  
}



export function ModalUsersUpdate({ isOpen, onRequestClose }: IModalUpdateProps) {

  const [users, setUsers] = useState<IUsers[]>([]);

  const { id } = useUpdateUser();
  const { name, setName } = useUpdateUser();
  const {email, setEmail} = useUpdateUser();
  const {password, setPassword} = useUpdateUser();
  const {admin, setAdmin} = useUpdateUser();
  const {confirmPassword, setConfirmPassword} = useUpdateUser()
  const [, setToast] = useToasts();
  
  
  async function handleUpdateUser(id: string) {
    
    try {

      if (name.length < 3) {
        return setToast({
          text: 'Nome precisa estar preenchido!.',
          type: 'warning'
        })
      }
      if (email.length < 3) {
        return setToast({
          text: 'Email precisa estar preenchido!.',
          type: 'warning'
        })
      }
      if (password === undefined) {
        return setToast({
          text: 'Senha precisa estar preenchido!.',
          type: 'warning'
        })
      }

      if (confirmPassword === undefined) {
        return setToast({
          text: 'Confirmação da senha precisa estar preenchido!.',
          type: 'warning'
        })
      }

      console.log('password', password)
      console.log('confirmPassword', confirmPassword)

      if (password !== confirmPassword ) {
        return setToast({
            text: 'As senhas precisam ser iguais!.',
            type: 'warning'
          })
      }

      const { data } = await api.put(`users/${id}`, {
        name: name,
        email: email,
        password: password,
        admin: admin
       
      });
      
      setUsers((state) => [...state, data]);
      onRequestClose()
      
      setToast({
        text: 'Conta editada com sucesso!.',
        type: 'success'
      })

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

        <SelectAdmin
          onChange={(e) => {
            
            if (e.target.value === "sim") {
              setAdmin(true)
            } else {
              setAdmin(false)
            }
            
          }
          
        }
          placeholder="Selecione seu Setor"
        >
          <OptionAdmin value={"não"}  >
            Setar Admin ?
          </OptionAdmin>

          <OptionAdmin value={"sim"}>Sim</OptionAdmin>
          <OptionAdmin value={"não"} >Não</OptionAdmin>
        </SelectAdmin>

          <InputUser placeholder="Nova senha" type={"password"} onChange={(e) => setPassword(e.target.value)}/>
          <InputUser placeholder="Confirmação da nova senha" type={"password"} onChange={(e) => setConfirmPassword(e.target.value)}/>

          <ButtonRegister type="submit" onClick={() => handleUpdateUser(id)}>Salvar</ButtonRegister>
      
      </Modal>
    </Container>
  );
}
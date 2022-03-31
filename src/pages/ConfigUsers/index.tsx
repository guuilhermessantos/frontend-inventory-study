import { useCallback, useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ModalUsersRegister } from "../../components/ModalUsersRegister";
import { ModalUsersUpdate } from "../../components/ModalUsersUpdate";
import { useNavigate } from "react-router-dom";

import { TableUsersConfig } from "../../components/TableUsersConfig";
import api from "../../services/api";
import { ButtonAdd,  Container, ContainerBody, DivButton, DivImage, DivTable, DivTitle, ImageInventory, TitleTable } from "./styles";

export interface IUsers {
  id: string,
  name: string,
	email: string,
	password: string,
	admin: boolean,
  created_at: string
}

export function ConfigUsers (){
    
    const [isModalUserUpdate,setIsModalUserUpdate] = useState(false)
    const [users, setUsers] = useState<IUsers[]>([]);
    const navigate = useNavigate()
 
    const getData = useCallback(async () => {
      const response = await api.get(`users`)
      const data = response.data
      setUsers(data)
    }, [users]) 
    
    useEffect(() => {
      getData()
    }, [isModalUserUpdate]);

    function backPage() {
      navigate("/products")
    }
    
    function handleCloseModalUpdateUsers() {
      setIsModalUserUpdate(false);
    }
    function handleOpenModalUpdateUsers() {
      setIsModalUserUpdate(true);
    }
    return (
      <Container>
        <Header />
        <ContainerBody>
        <DivTable>
          <TableUsersConfig  users={users} setUsers={setUsers} onOpenModalUpdate={handleOpenModalUpdateUsers} />
          <DivButton>
            <ButtonAdd type="button" onClick={backPage} >
              <FaArrowLeft name="login" size={15} color="white" />
                Voltar
            </ButtonAdd>
          </DivButton>
          </DivTable>
          <DivImage>
            <DivTitle>
              <TitleTable> Configuração <br/>de Usuarios </TitleTable>
            </DivTitle>
              <ImageInventory src="configUsers.png" alt="" />
            </DivImage>
        </ContainerBody>
        <ModalUsersUpdate users={users} setUsers={setUsers} isOpen={isModalUserUpdate} onRequestClose={handleCloseModalUpdateUsers}/>
        <Footer />
      </Container>

    )
}
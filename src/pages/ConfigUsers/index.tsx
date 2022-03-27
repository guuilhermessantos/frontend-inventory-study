import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ModalUsersRegister } from "../../components/ModalUsersRegister";
import { ModalUsersUpdate } from "../../components/ModalUsersUpdate";

import { TableUsersConfig } from "../../components/TableUsersConfig";
import { ButtonAdd,  Container, ContainerBody, DivButton, DivImage, DivTable, DivTitle, ImageInventory, TitleTable } from "./styles";

export function ConfigUsers (){
    

    const [isModalUserRegister,setIsModalUserRegister] = useState(false)
    const [isModalUserUpdate,setIsModalUserUpdate] = useState(false)
 



  function handleCloseModalUpdateUsers() {
    setIsModalUserUpdate(false);
  }
  function handleOpenModalUpdateUsers() {
    setIsModalUserUpdate(true);
  }


  function handleCloseModalUsersRegister() {
    setIsModalUserRegister(false);
  }
  function handleOpenModalUsersRegister() {
    setIsModalUserRegister(true);
  }

    return (
      <Container>
        <Header />
        <ContainerBody>
          <DivTable>
            
          <TableUsersConfig   onOpenModalUpdate={handleOpenModalUpdateUsers} />
            <DivButton>
              <ButtonAdd type="button" onClick={() => handleOpenModalUsersRegister()} >
                Adicionar
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

          <ModalUsersRegister isOpen={isModalUserRegister} onRequestClose={handleCloseModalUsersRegister}/>
          <ModalUsersUpdate isOpen={isModalUserUpdate} onRequestClose={handleCloseModalUpdateUsers}/>





          <Footer />
        </Container>

    )
}
import { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ModalUsersRegister } from "../../components/ModalUsersRegister";
import { ModalUsersUpdate } from "../../components/ModalUsersUpdate";
import { ModalUsersView } from "../../components/ModalUsersView";
import { TableUsersConfig } from "../../components/TableUsersConfig";
import { ButtonAdd, Container, ContainerBody, DivButton, DivImage, DivTable, DivTitle, ImageInventory, TitleTable } from "./styles";

export function ConfigUsers (){
    

    const [isModalUserRegister,setIsModalUserRegister] = useState(false)
    const [isModalUserUpdate,setIsModalUserUpdate] = useState(false)
    const [isModalUserView,setIsModalUserView] = useState(false)



  function handleCloseModalUpdateUsers() {
    setIsModalUserUpdate(false);
  }
  function handleOpenModalUpdateUsers() {
    setIsModalUserUpdate(true);
  }

  function handleCloseModalViewUsers() {
    setIsModalUserView(false);
  }
  function handleOpenModalViewUsers() {
    setIsModalUserView(true);
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
            
          <TableUsersConfig onOpenModalRegister={handleOpenModalUsersRegister}  onOpenModalUpdate={handleOpenModalUpdateUsers} onOpenModalView={handleOpenModalViewUsers}/>
            <DivButton>
              <ButtonAdd type="button" onClick={() => handleOpenModalUsersRegister()} >
                Adicionar
              </ButtonAdd>
            </DivButton>
          </DivTable>
        <DivImage>
          <DivTitle>
            <TitleTable> Controle <br/>     de<br/>     produto </TitleTable>
          </DivTitle>
            <ImageInventory src="configUsers.png" alt="" />
            
          </DivImage>
          
         
        </ContainerBody>

          <ModalUsersRegister isOpen={isModalUserRegister} onRequestClose={handleCloseModalUsersRegister}/>
          <ModalUsersUpdate isOpen={isModalUserUpdate} onRequestClose={handleCloseModalUpdateUsers}/>
          <ModalUsersView isOpen={isModalUserView} onRequestClose={handleCloseModalViewUsers}/>





          <Footer />
        </Container>

    )
}
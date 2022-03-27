import React, { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ModalProductsRegister } from "../../components/ModalProductsRegister";
import { ModalProductsUpdate } from "../../components/ModalProductsUpdate";
import { TableProductsConfig } from "../../components/TableProductsConfig";
import { FaUsers } from "react-icons/fa";



import { ButtonAdd, ButtonConfigUsers, Container, ContainerBody, DivButton, DivImage, DivTable, DivTitle, ImageInventory, TitleTable } from "./styles";


export function DashBoard() {

  const [isModalProductRegister,setIsModalProductRegister] = useState(false)
  const [isModalProductUpdate,setIsModalProductUpdate] = useState(false)
 

  function handleCloseModalProductRegister() {
    setIsModalProductRegister(false);
  }
  function handleOpenModalProductRegister() {
    setIsModalProductRegister(true);
  }
  function handleCloseModalProductUpdate() {
    setIsModalProductUpdate(false);
  }
  function handleOpenModalProductUpdate() {
    setIsModalProductUpdate(true);
  }

  
    return (
      <Container>
        <Header />
        <ContainerBody>
          <DivImage>
          <DivTitle>
            <TitleTable> Controle <br/>de Produtos </TitleTable>
          </DivTitle>
            <ImageInventory src="InventoryManagement.png" alt="" />
            
          </DivImage>
          <DivTable>
            
            <TableProductsConfig   onOpenModalUpdate={handleOpenModalProductUpdate} />
            <DivButton>
              <ButtonAdd type="button" onClick={() => handleOpenModalProductRegister()} >
                Adicionar Produto
              </ButtonAdd>
              <ButtonConfigUsers type="button"  >
                
                    <FaUsers name="login" size={25} color="white" />
              
                Configurar Usuarios
              </ButtonConfigUsers>
            </DivButton>
          </DivTable>
        </ContainerBody>
          
          <ModalProductsRegister isOpen={isModalProductRegister} onRequestClose={handleCloseModalProductRegister}/>
          <ModalProductsUpdate isOpen={isModalProductUpdate} onRequestClose={handleCloseModalProductUpdate}/>



          <Footer />
        </Container>

        

    )
}
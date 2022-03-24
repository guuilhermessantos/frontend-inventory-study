import React, { useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ModalProductsRegister } from "../../components/ModalProductsRegister";
import { ModalProductsUpdate } from "../../components/ModalProductsUpdate";
import { ModalProductsView } from "../../components/ModalProductsView";
import { TableProductsConfig } from "../../components/TableProductsConfig";



import { ButtonAdd, Container, ContainerBody, DivButton, DivImage, DivTable, DivTitle, ImageInventory, TitleTable } from "./styles";


export function DashBoard() {



    const [isModalProductRegister,setIsModalProductRegister] = useState(false)
    const [isModalProductUpdate,setIsModalProductUpdate] = useState(false)
    const [isModalProductView,setIsModalProductView] = useState(false)
 
  



 

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
  function handleCloseModalViewUpdate() {
    setIsModalProductView(false);
  }
  function handleOpenModalViewUpdate() {
    setIsModalProductView(true);
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
            
            <TableProductsConfig onOpenModalRegister={handleOpenModalProductRegister}  onOpenModalUpdate={handleOpenModalProductUpdate} onOpenModalView={handleOpenModalViewUpdate}/>
            <DivButton>
              <ButtonAdd type="button" onClick={() => handleOpenModalProductRegister()} >
                Adicionar
              </ButtonAdd>
            </DivButton>
          </DivTable>
        </ContainerBody>
          


          <ModalProductsRegister isOpen={isModalProductRegister} onRequestClose={handleCloseModalProductRegister}/>
          <ModalProductsUpdate isOpen={isModalProductUpdate} onRequestClose={handleCloseModalProductUpdate}/>
          <ModalProductsView isOpen={isModalProductView} onRequestClose={handleCloseModalViewUpdate}/>



          <Footer />
        </Container>

        

    )
}
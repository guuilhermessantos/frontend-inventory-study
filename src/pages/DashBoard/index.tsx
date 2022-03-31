import React, { useCallback, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ModalProductsRegister } from "../../components/ModalProductsRegister";
import { ModalProductsUpdate } from "../../components/ModalProductsUpdate";
import { TableProductsConfig } from "../../components/TableProductsConfig";
import { FaUsers, FaPlus } from "react-icons/fa";



import { ButtonAdd, ButtonConfigUsers, Container, ContainerBody, DivButton, DivImage, DivTable, DivTitle, ImageInventory, TitleTable } from "./styles";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";


export interface IProducts {
  id: string;
  id_creator: string;
  name_product: string;
  obs_product: string;
  quantity: string;
  created_at: string;
  updated_at: string;
}

export function DashBoard() {

  const [isModalProductRegister,setIsModalProductRegister] = useState(false)
  const [isModalProductUpdate,setIsModalProductUpdate] = useState(false)
  const navigate = useNavigate()

  const [products, setProducts] = useState<IProducts[]>([]);


  function pageConfigUsers() {
    navigate("/users")
  }

   const userLoggedString = localStorage.getItem("user_logged")
  const currentData = userLoggedString ? JSON.parse(userLoggedString) : []
 

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

  const getData = useCallback(async () => {
    const response = await api.get(`products`)
    const data = response.data
    setProducts(data)
  }, [products]) 
  
  useEffect(() => {
    getData()
  }, [isModalProductUpdate]);

  // useEffect(() => {
  //   if (products. === )
  // }, [isModalProductUpdate]);
  
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
            <TableProductsConfig   products={products} setProducts={setProducts} onOpenModalUpdate={handleOpenModalProductUpdate} />
            <DivButton>
              <ButtonAdd type="button" onClick={() => handleOpenModalProductRegister()} >
                <FaPlus name="login" size={15} color="white" />
                  Adicionar Produto
              </ButtonAdd>

              {currentData.admin === true  ?
                <ButtonConfigUsers type="button" onClick={pageConfigUsers}  >
                  <FaUsers name="login" size={20} color="white" />
                  Configurar Usuarios
                </ButtonConfigUsers>
                :
                <>
                </>
              }

            </DivButton>
          </DivTable>
        </ContainerBody>
        <ModalProductsRegister products={products} setProducts={setProducts} isOpen={isModalProductRegister} onRequestClose={handleCloseModalProductRegister}/>
        <ModalProductsUpdate products={products} setProducts={setProducts} isOpen={isModalProductUpdate} onRequestClose={handleCloseModalProductUpdate}/>
        <Footer />
      </Container>

        

    )
}
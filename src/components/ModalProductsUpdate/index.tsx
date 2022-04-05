import React, { Dispatch, SetStateAction, useState } from "react";
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

import api from "../../services/api";
import { useUpdateProduct } from "../../context/updateProductContext";
import { IProducts } from "../../pages/DashBoard";
import { useToasts } from "@geist-ui/react";

interface IProduct {
  name_product: string;
  obs_product: string;
  quantity: string;
}

interface IModalUpdateProps {
  products: IProducts[],
  setProducts: Dispatch<SetStateAction<IProducts[]>>,
  isOpen: boolean,
  onRequestClose: () => void,
  
}


export function ModalProductsUpdate({ products, setProducts, isOpen, onRequestClose }: IModalUpdateProps) {
  const { id } = useUpdateProduct();
  const { id_creator, setIdCreator } = useUpdateProduct();
  const { name_products, setNameProduct } = useUpdateProduct();
  const { obs_products, setObsProduct } = useUpdateProduct();
  const { quantity, setQuantity } = useUpdateProduct();
  const [, setToast] = useToasts();

  async function handleUpdateProduct(id: string) {
    
    try {
      if (name_products.length < 3) {
        return setToast({
          text: 'Nome do Produto precisa estar preenchido!.',
          type: 'warning'
        })
      }
      if (obs_products.length < 3) {
        return setToast({
          text: 'Observação do Produto precisa estar preenchido!.',
          type: 'warning'
        })
      }
      if (quantity.length < 1 ) {
        return setToast({
            text: 'A quantidade precisa ser preenchida!.',
            type: 'warning'
          })
      }

      const userLoggedString = localStorage.getItem("user_logged")
      const currentData = userLoggedString ? JSON.parse(userLoggedString) : []
      
      await api.put(`products/${id}`, {
        id_creator: currentData.id,
        name_product: name_products,
        obs_product: obs_products,
        quantity: quantity
       
      });

    onRequestClose()

    setToast({
      text: 'Seu Produto foi editado com sucesso!.',
      type: 'success'
    })
    

    } catch (error) {

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
            </ButtonClose>
          </BtnCloseContainer>
          <TitleModal> Edite um Produto </TitleModal>

          <InputUser placeholder="Nome do Produto" value={name_products} onChange={(e) => setNameProduct(e.target.value)}/>

          <InputUser placeholder="Observação do Produto" value={obs_products} onChange={(e) => setObsProduct(e.target.value)}/>

          <InputUser placeholder="Quantidade" value={quantity} type={"number"} onChange={(e) => setQuantity(e.target.value)}/>

          <ButtonRegister type="submit" onClick={() => handleUpdateProduct(id)}>Salvar</ButtonRegister>
      </Modal>
    </Container>
  );
}
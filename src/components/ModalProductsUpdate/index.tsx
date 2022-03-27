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

import api from "../../services/api";
import { useUpdateProduct } from "../../context/updateProductContext";


interface IModalUpdateProps {
  isOpen: boolean,
  onRequestClose: () => void,
  
}

interface IProduct {
  name_product: string;
  obs_product: string;
  quantity: string;
}

export function ModalProductsUpdate({ isOpen, onRequestClose }: IModalUpdateProps) {
  const { id, setId } = useUpdateProduct();
  const { id_creator, setIdCreator } = useUpdateProduct();
  const { name_products, setNameProduct } = useUpdateProduct();
  const { obs_products, setObsProduct } = useUpdateProduct();
  const { quantity, setQuantity } = useUpdateProduct();
  const { created_at, setCreatedAt } = useUpdateProduct();
  const { update_at, setUpdateAt } = useUpdateProduct();
  const [products, setProduct] = useState<IProduct[]>([]);


  async function handleUpdateProduct(id: string) {
    
    try {
      const { data } = await api.put(`products/${id}`, {
        id: "e9201d78-c3ba-4faa-9503-2074c145c254",
        name_product: name_products,
        obs_product: obs_products,
        quantity: quantity
       
      });
      
      setProduct((state) => [...state, data]);
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
        
        <div className="teste">
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
          <TitleModal> Edite um Produto </TitleModal>

          <InputUser placeholder="Nome do Produto" value={name_products} onChange={(e) => setNameProduct(e.target.value)}/>

          <InputUser placeholder="Observação do Produto" value={obs_products} onChange={(e) => setObsProduct(e.target.value)}/>
          <InputUser placeholder="Quantidade" value={quantity} type={"number"} onChange={(e) => setQuantity(e.target.value)}/>

          <ButtonRegister type="submit" onClick={() => handleUpdateProduct(id)}>Salvar</ButtonRegister>
        </div>
      </Modal>
    </Container>
  );
}
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

interface IModalRegisterProps {
  isOpen: boolean,
  onRequestClose: () => void,
  
}
interface IProduct {
  name_product: string;
  obs_product: string;
  quantity: number;
}

export function ModalProductsRegister({ isOpen, onRequestClose }: IModalRegisterProps) {

  const [name, setName] = useState("");
  const [obsProduct, setObsProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [products, setProduct] = useState<IProduct[]>([]);

  async function handleRegisterProduct() {
    
    try {
      const { data } = await api.post("products", {
        id: "e9201d78-c3ba-4faa-9503-2074c145c254",
        name_product: name,
        obs_product: obsProduct,
        quantity: quantity
       
      });
      
      setProduct((state) => [...state, data]);
      onRequestClose()
      
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container >
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

            </ButtonClose>
          </BtnCloseContainer>
          <TitleModal> Cadastre um Produto </TitleModal>

          <InputUser placeholder="Nome do Produto" onChange={(e) => setName(e.target.value)} />

          <InputUser placeholder="Observação do Produto" onChange={(e) => setObsProduct(e.target.value)}/>
          <InputUser placeholder="Quantidade" onChange={(e) => setQuantity(e.target.value)} />

          <ButtonRegister type="submit" onClick={() => {
            handleRegisterProduct()
            }}>Cadastrar</ButtonRegister>
        </div>
      </Modal>
    </Container>
  );
}
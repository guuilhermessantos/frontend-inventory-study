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
import { IProducts } from "../../pages/DashBoard";
import { useToasts } from "@geist-ui/react";

interface IModalRegisterProps {
  products: IProducts[],
  setProducts: Dispatch<SetStateAction<IProducts[]>>,
  isOpen: boolean,
  onRequestClose: () => void,
  
}
interface IProduct {
  name_product: string;
  obs_product: string;
  quantity: number;
}



export function ModalProductsRegister({  products, setProducts, isOpen, onRequestClose }: IModalRegisterProps) {

  const [name, setName] = useState("");
  const [obsProduct, setObsProduct] = useState("");
  const [quantity, setQuantity] = useState("");
  const [, setToast] = useToasts();


  async function handleRegisterProduct() {


    try {

      if (name.length < 2) {
        return setToast({
          text: 'Nome do Produto precisa estar preenchido!.',
          type: 'warning'
        })
      }
      if (obsProduct.length < 2) {
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

      

      const { data } = await api.post("products", {
        id_creator: currentData.id,
        name_product: name,
        obs_product: obsProduct,
        quantity: quantity
       
      });

      setProducts((state) => [...state, data]);
      onRequestClose()
      setName("") 
      setObsProduct("")
      setQuantity("")

      setToast({
        text: 'Seu Produto foi criado com sucesso!.',
        type: 'success'
      })
      
    } catch (error) {

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
          <InputUser placeholder="Quantidade" type={"number"} onChange={(e) => setQuantity(e.target.value)} />

          <ButtonRegister type="submit" onClick={() => {
            handleRegisterProduct()
            }}>Cadastrar</ButtonRegister>
        </div>
      </Modal>
    </Container>
  );
}
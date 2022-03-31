import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';
import { ButtonDel, ButtonUpdate, Container, Table, TableBody, TableData, TableHeader, TableRow, TitleColumn, } from "./styles";
import api from "../../services/api"
import { format } from "date-fns"
import { useUpdateProduct } from '../../context/updateProductContext';
import { IProducts } from '../../pages/DashBoard';
import { useToasts } from '@geist-ui/react';



interface ITableProductsProps{
  products: IProducts[],
  setProducts: Dispatch<SetStateAction<IProducts[]>>,
  onOpenModalUpdate: () => void

  }

  


export function TableProductsConfig({ products, setProducts, onOpenModalUpdate } : ITableProductsProps) {

  
  
  const { setId } = useUpdateProduct();
  const { id_creator, setIdCreator } = useUpdateProduct();
  const { setNameProduct } = useUpdateProduct();
  const { setObsProduct } = useUpdateProduct();
  const { setQuantity } = useUpdateProduct();

  const [, setToast] = useToasts();

  const userLoggedString = localStorage.getItem("user_logged")
  const currentData = userLoggedString ? JSON.parse(userLoggedString) : []

  
 

  function editProduct(id: string, name_products: string, obs_products: string, quantity: string ) {
    setId(id)
    setNameProduct(name_products)
    setObsProduct(obs_products)
    setQuantity(quantity)
  }

  async function deleteProduct(id: string) {
    try {

      if (currentData.admin === false) {
        return setToast({
          text: 'Somente Administradores podem deletar produtos!.',
          type: 'error'
        })
      }
      await api.delete(`products/${id}`);
      
      setProducts((oldProducts) =>
        oldProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  }

    return (
      <Container>
        <Table>
          <TableHeader>
            <TableRow>
              <TitleColumn>Nome do<br/>Produto </TitleColumn>
              <TitleColumn>Observação<br/>do Produto</TitleColumn>
              <TitleColumn>Quantidade</TitleColumn>
              <TitleColumn>Criação<br/>do Registro</TitleColumn>
              <TitleColumn>Atualização<br/>do Registro</TitleColumn>
              <TitleColumn>Editar</TitleColumn>
              <TitleColumn>Deletar</TitleColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
          
          {products.map((product) => ( 
            <TableRow key={product.id}>
              <TableData> {product.name_product} </TableData>
              <TableData> {product.obs_product} </TableData>
              <TableData> {product.quantity} </TableData>
              <TableData> {format( new Date (product.created_at), "dd/MM/yyyy HH:mm:ss")} </TableData>
              <TableData> {format( new Date (product.updated_at), "dd/MM/yyyy HH:mm:ss")} </TableData>
              <TableData> 
                <ButtonUpdate type="submit" onClick={() => { onOpenModalUpdate(); editProduct(product.id, product.name_product, product.obs_product, product.quantity  )}} >
                  Editar
                </ButtonUpdate>
              </TableData>
              <TableData> 
                <ButtonDel type="submit" id = "btnDelet" onClick={() =>{deleteProduct(product.id) }}>
                  Deletar
                </ButtonDel> 
              </TableData>
            </TableRow>
          ))}
               
        </TableBody>
        </Table>
      </Container>
    )

}

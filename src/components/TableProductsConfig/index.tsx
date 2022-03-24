import React, { useEffect, useState } from 'react';
import { ButtonDel, ButtonUpdate, ButtonView, Container, Table, TableBody, TableData, TableHeader, TableRow, TitleColumn, } from "./styles";
import api from "../../services/api"
import { format } from "date-fns"

interface ITableProductsProps {
  onOpenModalRegister: () => void;
  onOpenModalUpdate: () => void
  onOpenModalView: () => void
  }

  interface IProducts {
    id: string;
    name_product: string;
    obs_product: string;
    quantity: number;
    created_at: string;
  }


export function TableProductsConfig({ onOpenModalRegister, onOpenModalUpdate, onOpenModalView } : ITableProductsProps) {

  
  const [products, setProducts] = useState<IProducts[]>([]);

  async function deleteProduct(id: string) {
    try {
      await api.delete(`products/${id}`);
      
      setProducts((oldProducts) =>
        oldProducts.filter((product) => product.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    api.get(`products`).then((response) => {

      setProducts(response.data);

    }); 
  }, [products]);
    
    return (
      <Container>
        
       
        <Table>
          <TableHeader>
            <TableRow>
              <TitleColumn>Nome do Produto </TitleColumn>
              <TitleColumn>Observação do Produto</TitleColumn>
              <TitleColumn>Quantidade</TitleColumn>
              <TitleColumn>Criação do Registro</TitleColumn>
              <TitleColumn>Editar</TitleColumn>
              <TitleColumn>Visualizar</TitleColumn>
              <TitleColumn>Deletar</TitleColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
          
          {products.map((product) => ( 
          <TableRow key={product.id}>
            <TableData> {product.name_product} </TableData>
            <TableData> {product.obs_product} </TableData>
            <TableData> {product.quantity} </TableData>
            <TableData> {format( new Date (product.created_at), "dd/MM/yyyy HH:mm:ss")}</TableData>
            <TableData> 
              <ButtonUpdate type="submit" onClick={onOpenModalUpdate} id = "btnEdit">
                Editar
              </ButtonUpdate>
            </TableData>
            <TableData>
              <ButtonView type="submit" onClick={onOpenModalView} id = "btnView">
                Visualizar
              </ButtonView>
            </TableData>
            <TableData> 
              <ButtonDel type="submit" id = "btnDelet" onClick={() => deleteProduct(product.id)}>
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

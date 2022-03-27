import React, { useEffect, useState } from 'react';
import { ButtonDel, ButtonUpdate, Container, Table, TableBody, TableData, TableHeader, TableRow, TitleColumn, } from "./styles";
import api from "../../services/api"
import { format } from "date-fns"
import { useUpdateProduct } from '../../context/updateProductContext';



interface ITableProductsProps {

  onOpenModalUpdate: () => void

  }

  interface IProducts {
    id: string;
    name_product: string;
    obs_product: string;
    quantity: string;
    created_at: string;
    updated_at: string;
  }


export function TableProductsConfig({ onOpenModalUpdate } : ITableProductsProps) {

  
  const [products, setProducts] = useState<IProducts[]>([]);
  const { id, setId } = useUpdateProduct();
  const { id_creator, setIdCreator } =useUpdateProduct();
  const { name_products, setNameProduct } = useUpdateProduct();
  const { obs_products, setObsProduct } = useUpdateProduct();
  const { quantity, setQuantity } = useUpdateProduct();
  const { created_at, setCreatedAt } = useUpdateProduct();
  const { update_at, setUpdateAt } = useUpdateProduct();
 

  function editProduct(id: string, name_products: string, obs_products: string, quantity: string ) {
    setId(id)
    setNameProduct(name_products)
    setObsProduct(obs_products)
    setQuantity(quantity)
    // setId(id);
    // setNameProduct(name_products);
    // setObsProduct(obs_products);
    // setQuantity(quantity);
    console.log('oi');
    
    
  }

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

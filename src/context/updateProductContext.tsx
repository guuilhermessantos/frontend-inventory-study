import React, { createContext, useContext, useState } from "react";

interface IProducts {
    id: string;
    id_creator: string;
    name_products: string;
    obs_products: string;
    quantity: string;
    created_at: string;
    update_at: string;

    setId: React.Dispatch<React.SetStateAction<string>>;
    setIdCreator: React.Dispatch<React.SetStateAction<string>>;
    setNameProduct: React.Dispatch<React.SetStateAction<string>>;
    setObsProducts: React.Dispatch<React.SetStateAction<string>>;
    setQuantity: React.Dispatch<React.SetStateAction<string>>;
    setCreatedAt: React.Dispatch<React.SetStateAction<string>>;
    setUpdateAt: React.Dispatch<React.SetStateAction<string>>;
    
}

const UpdateProduct = createContext({});


export default function UpdateProductContext({ children }: any) {
    
    const [id, setId] = useState("");
    const [idCreator, setIdCreator] = useState("");
    const [nameProduct, setNameProduct] = useState("");
    const [obsProducts, setObsProducts] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [createdAt, setCreatedAt] = useState("");
    const [updateAt, setUpdateAt] = useState("");

   
  return (
    <UpdateProduct.Provider
      value={{
        id,
        setId,
        idCreator,
        setIdCreator,
        nameProduct,
        setNameProduct,
        obsProducts,
        setObsProducts,
        quantity,
        setQuantity,
        createdAt,
        setCreatedAt,
        updateAt,
        setUpdateAt,
      }}
    >
      {children}
      
    </UpdateProduct.Provider>
  );
}



export function useUpdateProduct() {
  const context = useContext(UpdateProduct) as IProducts;
  const { id, setId } = context;
  const { id_creator, setIdCreator } = context;
  const { name_products, setNameProduct } = context;
  const { obs_products, setObsProducts } = context;
  const { quantity, setQuantity } = context;
  const { created_at, setCreatedAt } = context;
  const { update_at, setUpdateAt } = context;
  

  if (!context) {
    throw new Error("Fail");
  }

  return context;
}
import React, { useState } from "react";
import { ModalConfig } from "../../components/ModalConfig";
import { TableConfig } from "../../components/TableConfig";

import { Container, Header } from "./styles";


export function DashBoard() {
    const [isNewTransactionModalOpen,setIsNewTransactionModalOpen] = useState(false)
 
  
  function handleOpenNewEmployeeModal() {
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewEmployeeModal() {
      setIsNewTransactionModalOpen(false);
  }
  
    return (
        <Container>
          <Header>
          
          </Header>

            <TableConfig onOpenNewEmployeeModal={handleOpenNewEmployeeModal}/>

            <ModalConfig isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewEmployeeModal}/>
        </Container>

        

    )
}
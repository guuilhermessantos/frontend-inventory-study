import React from 'react';
import { ButtonAdd, ButtonDel, ButtonUpdate, ButtonView, Container, DivButton, Table, TableBody, TableData, TableHeader, TableRow, TitleColumn, TitleTable } from "./styles";

interface ITableProps {
    onOpenNewEmployeeModal: () => void;
  }


export function TableConfig({ onOpenNewEmployeeModal } : ITableProps) {
    
    return (
      <Container>
        <TitleTable> Controle de produto </TitleTable>

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
            
          <TableRow>
                  <TableData> Arroz </TableData>
                  <TableData> Enlatado</TableData>
                  <TableData> 10 </TableData>
                  <TableData> 21/09/2020</TableData>
                  <TableData> 
                    <ButtonUpdate type="submit" onClick={onOpenNewEmployeeModal} id = "btnEdit">
                      Editar
                    </ButtonUpdate>
                    </TableData>
                    <TableData>
                    <ButtonView type="submit" onClick={onOpenNewEmployeeModal} id = "btnView">
                      Visualizar
                    </ButtonView>
                    </TableData>
                    <TableData> 
                    <ButtonDel type="submit" id = "btnDelet">
                      Deletar
                    </ButtonDel> 
                    </TableData>
                  </TableRow>
                <TableRow>
                  <TableData> Feijao </TableData>
                  <TableData> Enlatado</TableData>
                  <TableData> 10 </TableData>
                  <TableData> 21/09/2020</TableData>
                  <TableData> 
                    <ButtonUpdate type="submit" onClick={onOpenNewEmployeeModal} >
                      Editar
                    </ButtonUpdate>
                  </TableData>
                  <TableData>
                    <ButtonView type="submit" onClick={onOpenNewEmployeeModal}>
                      Visualizar
                    </ButtonView>
                  </TableData>
                  <TableData> 
                    <ButtonDel type="submit" >
                      Deletar
                    </ButtonDel> 
                  </TableData>
                </TableRow>
        </TableBody>
        </Table>
        <DivButton>
          <ButtonAdd type="button" onClick={onOpenNewEmployeeModal}>
            Adicionar
          </ButtonAdd>
        </DivButton>
      </Container>
    )

}

import React, { useEffect, useState } from 'react';
import { ButtonDel, ButtonUpdate, ButtonView, Container,Table, TableBody, TableData, TableHeader, TableRow, TitleColumn, } from "./styles";
import api from "../../services/api"
import { format } from 'date-fns';


interface ITableUsersProps {
    onOpenModalRegister: () => void;
    onOpenModalUpdate: () => void
    onOpenModalView: () => void
  }

interface IUsers {
  id: string;
  name: string;
  email: string;
  admin: string;
  created_at: string;
}


export function TableUsersConfig({ onOpenModalRegister, onOpenModalUpdate, onOpenModalView } : ITableUsersProps) {

  const [users, setUsers] = useState<IUsers[]>([]);

  useEffect(() => {
    api.get(`users`).then((response) => {
      
      setUsers(response.data);
      
      
    });
  }, []);

    
    return (
      <Container>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TitleColumn> Nome do Usuario </TitleColumn>
              <TitleColumn> E-mail </TitleColumn>
              <TitleColumn> Admin </TitleColumn>
              <TitleColumn> Criação da conta </TitleColumn>
              <TitleColumn> Editar </TitleColumn>
              <TitleColumn> Visualizar </TitleColumn>
              <TitleColumn> Deletar </TitleColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
          {users.map((user) => ( 
          <TableRow key={user.id} >
            <TableData> {user.name} </TableData>
            <TableData> {user.email} </TableData>
            <TableData> {user.admin ? ("Sim") : ("Não")} </TableData>
            <TableData> {format( new Date (user.created_at), "dd/MM/yyyy HH:mm:ss")} </TableData>
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
              <ButtonDel type="submit" id = "btnDelet">
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

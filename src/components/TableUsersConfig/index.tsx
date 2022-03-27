import React, { useEffect, useState } from 'react';
import { ButtonDel, ButtonUpdate, Container,Table, TableBody, TableData, TableHeader, TableRow, TitleColumn, } from "./styles";
import api from "../../services/api"
import { format } from 'date-fns';



interface ITableUsersProps {
    onOpenModalUpdate: () => void
  }

interface IUsers {
  id: string;
  name: string;
  email: string;
  admin: string;
  created_at: string;
}


export function TableUsersConfig({  onOpenModalUpdate} : ITableUsersProps) {

  const [users, setUsers] = useState<IUsers[]>([]);
 

  async function deleteUser(id: string) {
    try {
      await api.delete(`users/${id}`);
      
      setUsers((oldUsers) =>
        oldUsers.filter((user) => user.id !== id)
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    api.get(`users`).then((response) => {
      
      setUsers(response.data);
      
      
    });
  }, [users]);

    
    return (
      <Container>
        
        <Table>
          <TableHeader>
            <TableRow>
              <TitleColumn> Nome<br/>do Usuario </TitleColumn>
              <TitleColumn> E-mail </TitleColumn>
              <TitleColumn> Admin </TitleColumn>
              <TitleColumn> Criação<br/>da conta </TitleColumn>
              <TitleColumn> Editar </TitleColumn>
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
              <ButtonDel type="submit" id = "btnDelet" onClick={() => deleteUser(user.id)}>
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

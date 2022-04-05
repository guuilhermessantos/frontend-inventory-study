import React, { Dispatch, SetStateAction, useState } from 'react';
import { ButtonDel, ButtonUpdate, Container,Table, TableBody, TableData, TableHeader, TableRow, TitleColumn, } from "./styles";
import api from "../../services/api"
import { format } from 'date-fns';
import { useUpdateUser } from '../../context/updateUserContext';
import { IUsers } from '../../pages/ConfigUsers';
import { useToasts } from '@geist-ui/react';



interface ITableUsersProps {
    users: IUsers[],
    setUsers: Dispatch<SetStateAction<IUsers[]>>,
    onOpenModalUpdate: () => void
  }

export function TableUsersConfig({  users, setUsers, onOpenModalUpdate} : ITableUsersProps) {

  const { setId } = useUpdateUser();
  const { setName } = useUpdateUser();
  const { setEmail} = useUpdateUser();
  const { setAdmin} = useUpdateUser();
  const {password, setPassword} = useUpdateUser();
  const {confirmPassword, setConfirmPassword} = useUpdateUser();
  const [, setToast] = useToasts();

  const [confirmUser, setConfirmUser ] = useState()



  function editUser(id: string, name: string, email: string, password: string, admin: boolean ) {
    setId(id);
    setName(name);
    setEmail(email);
    setAdmin(admin);
    setPassword(password)
    setConfirmPassword(password)
  }
 
  async function deleteUser(id: string, admin: boolean) {
    try {
      const userLoggedString = localStorage.getItem("user_logged")
      const currentData = userLoggedString ? JSON.parse(userLoggedString) : []

       if (currentData.id === id) {
        return setToast({
          text: 'Impossivel deletar você mesmo.',
          type: 'error'
        })
       }

       if (admin === true) {
        return setToast({
          text: 'Impossivel deletar administradores.',
          type: 'error'
        })
       }

      await api.get(`productsuser/${id}`);

      
      await api.delete(`users/${id}`);
      
      setUsers((oldUsers) =>
        oldUsers.filter((user) => user.id !== id)
      );
    } catch (error) {
      setToast({
        text: 'Os produtos deste usuario, devem ser deletados primeiro',
        type: 'error'
      })
    }
  }

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
                <ButtonUpdate type="submit" onClick={() => {onOpenModalUpdate() ; editUser(user.id, user.name, user.email, user.password ,user.admin)}} id = "btnEdit">
                  Editar
                </ButtonUpdate>
              </TableData>
              <TableData> 
                <ButtonDel type="submit" id = "btnDelet" onClick={() => deleteUser(user.id, user.admin)}>
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

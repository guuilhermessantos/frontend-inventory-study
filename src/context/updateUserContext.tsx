import React, { createContext, useContext, useState } from "react";

interface IUsers {
    id: string;
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    admin: boolean;


    setId: React.Dispatch<React.SetStateAction<string>>;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
    setConfirmPassword: React.Dispatch<React.SetStateAction<string>>
    setAdmin: React.Dispatch<React.SetStateAction<boolean>>;
    
}

const UpdateUser = createContext({});


export default function UpdateUserContext({ children }: any) {
    
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [admin, setAdmin] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")

    // function buscaInfoUser() {

    //   const response = await api.get(`users`)
    //   const data = response.data

    //   setUser((oldUsers) =>
    //     oldUsers.filter((user) => user.email !== email)

    //   );
    // }
  




   
  return (
    <UpdateUser.Provider
      value={{
        id,
        setId,
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        admin,
        setAdmin,
       
      }}
    >
      {children}
      
    </UpdateUser.Provider>
  );
}



export function useUpdateUser() {
  const context = useContext(UpdateUser) as IUsers;

  const { id, setId } = context;
  const {name, setName} = context;
  const {email, setEmail} = context;
  const { password, setPassword } = context;
  const {confirmPassword, setConfirmPassword} = context;
  const {admin, setAdmin} = context;

  if (!context) {
    throw new Error("Fail");
  }

  return context;
}
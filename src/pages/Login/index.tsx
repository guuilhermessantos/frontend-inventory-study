import { useToasts } from "@geist-ui/core";
import { useContext, useState } from "react";
import { Footer } from "../../components/Footer";
import { ModalUsersRegister } from "../../components/ModalUsersRegister";
import { AuthContext } from "../../context/authContext";
import { TitleRegister, ButtonCreateAcount, ButtonRegister, CardLogin, Container, DivLogin, DivLogo, ImgLogo, InputLogin, SubTitleCreateAcount, TitleCreateAcount, TitleLogo } from "./styles";

export interface IAuth {
    authenticated: boolean;
    handleLogin: (email: string, password: string) => void;
    
}

export function Login(){
    const { handleLogin } = useContext(AuthContext) as IAuth;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isModalUserRegister,setIsModalUserRegister] = useState(false)

    function handleCloseModalUsersRegister() {
        setIsModalUserRegister(false);
      }
      function handleOpenModalUsersRegister() {
        setIsModalUserRegister(true);
      }

    return (
        <Container>
            <CardLogin>
                <DivLogo>
                    <ImgLogo  src="actionLogo.png"/>
                    <TitleLogo> ActionSys </TitleLogo>
                    <TitleRegister> Ainda não tem uma conta ? </TitleRegister>
                    <ButtonRegister type="button" onClick={handleOpenModalUsersRegister}  >
                            Registre-se
                    </ButtonRegister>
                    <ModalUsersRegister isOpen={isModalUserRegister} onRequestClose={handleCloseModalUsersRegister} />
                </DivLogo>
                <DivLogin>
                    <TitleCreateAcount> Conecte-se </TitleCreateAcount>
                    <SubTitleCreateAcount> Para acessar nosso sistema de Inventario  </SubTitleCreateAcount>
                    <InputLogin type={"email"} placeholder="Email"  name="email" onChange={(e) => setEmail(e.target.value)}/>
                    <InputLogin type={"password"} placeholder="Senha" name="password" onChange={(e) => setPassword(e.target.value)}/>
                    <ButtonCreateAcount type="button" onClick={() =>  handleLogin(email,password)} > Entrar </ButtonCreateAcount>
                </DivLogin>
            </CardLogin>
            <Footer />
        </Container>
    )
}
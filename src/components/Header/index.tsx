import { useContext } from "react";
import { FaSignOutAlt } from "react-icons/fa"
import { AuthContext } from "../../context/authContext";
import { ButtonLogOut, DivButton, DivLogo, HeaderFix, Logo,TextLogo } from "./styles"


interface IAuth {
    authenticated: boolean;
    handleLogout: () => void;
    
}

export function Header () {

    const { handleLogout } = useContext(AuthContext) as IAuth;

    
    return (
    
        <HeaderFix>
            <DivLogo>
                <Logo src="actionLogo.png" alt="" />

                
                <TextLogo> ActionSys </TextLogo>
            </DivLogo>
            <DivButton>
            <ButtonLogOut type="button"  onClick={handleLogout} >
                <FaSignOutAlt name="logout" size={14} color="white" />
                Sair
              </ButtonLogOut>
            </DivButton>

        </HeaderFix>
       
    )
}
import { DivButton, DivLogo, HeaderFix, Logo,TextLogo } from "./styles"


export function Header () {
    return (
    
        <HeaderFix>
            <DivLogo>
                <Logo src="actionLogo.png" alt="" />

                
                <TextLogo> ActionSys </TextLogo>
            </DivLogo>
            <DivButton>

            </DivButton>

        </HeaderFix>
       
    )
}
import { NotOverlap, FooterFix, DescriptionFooter, DivFooter, Logo } from "./styles";



export function Footer () {
    return(
        <>
            <NotOverlap>
                
            </NotOverlap>
            <FooterFix>
                <DivFooter>
                    <Logo src="actionLogo.png" alt="" />
                    <DescriptionFooter>ActionSys</DescriptionFooter>
                </DivFooter>
            </FooterFix>
         </>

    )
}
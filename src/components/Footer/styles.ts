import styled from "styled-components"


export const NotOverlap = styled.div`
    margin-bottom: 40px;
`;

export const FooterFix = styled.footer`
    background-color: var(--silverDark);
    border-top: 1px solid var(--silverDark);
    bottom: 0;
    left: 0;
    height: 40px;
    position: fixed;
    width: 100%;
    display: flex;
    
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const DivFooter = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Logo = styled.img`
margin-left: 10px;
    width: 20px;
    height: 16px;
`;

export const DescriptionFooter = styled.span`
    font-size: 9px;
    text-align: center;
    justify-content: center;
    align-items: center;
    color: #FFF;
`;
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
            <span style={{color:"#fff", top:"1.5rem", left:"1rem", positon:"relative"}}>
                &copy;{new Date().getFullYear()} All Rights Reserved. Resolver Software
            </span>
        </FooterContainer>
    )
}

export default Footer

//Footer container

const FooterContainer = styled.footer`
    background: #333;
    height: 2rem;
    position:absolute;
    left: 0;
    bottom: 0;
    width:100%;
`;
import React from "react";
import  logoTop  from "../../assets/logo.png";
import { Container, Logo, Menu } from "./styles";

const Header = () => {
    return (
        <Container>
           <Logo>
            <img src={logoTop} alt="" />
           </Logo>
           <Menu>
             <ul>
                <li><span>Cadastro/Login</span></li>
             </ul>
            </Menu>
        </Container>
    )
}

export default Header;
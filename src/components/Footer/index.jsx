import React from "react";
import { Container, Item } from "./styles";
import  logoImg  from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return(
        <Container>
            <Item>
              <img src={logoImg} alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, maiores delectus harum quo error officia quisquam ex? Excepturi rem reiciendis, animi consequatur qui dolorem maxime asperiores soluta quod ipsam dolore?</p> 
              <ul>
                <li><span><FaFacebook size={32}/> </span></li>
                <li><span><FaInstagram size={32}/> </span></li>
                <li><span><FaWhatsapp size={32}/> </span></li>
              </ul>
            </Item>

        </Container>
    )

}
export default Footer; 
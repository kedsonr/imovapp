import React, { Fragment } from "react";
import { Container, Copy, Item } from "./styles";
import logoImg from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <Fragment>
      <Container>
        <Item>
          <img src={logoImg} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, maiores delectus harum quo error officia quisquam ex? Excepturi rem reiciendis, animi consequatur qui dolorem maxime asperiores soluta quod ipsam dolore?</p>
          <nav>
            <li><span><FaFacebook size={32} /> </span></li>
            <li><span><FaInstagram size={32} /> </span></li>
            <li><span><FaWhatsapp size={32} /> </span></li>
          </nav>
        </Item>

        <Item>
          <h3>Our Services</h3>
          <ul>
            <li><span>Comprar </span></li>
            <li><span>Alugar </span></li>
            <li><span>Vender </span></li>
          </ul>
        </Item>

        <Item>
          <h3>Our Services</h3>
          <ul>
            <li><span>Comprar </span></li>
            <li><span>Alugar </span></li>
            <li><span>Vender </span></li>
          </ul>
        </Item>

      </Container>

      <Copy>
        <p> ©Copyright 2022-Workside Tecnologia All Rights Reserved.</p>
        <ul>
          <li><span> Termos de Uso </span></li>
          <li><span>  Politica de Privacidade</span></li>
          <li><span> Politica de Cookis </span></li>
        </ul>
      </Copy>

    </Fragment>
  )

}
export default Footer; 
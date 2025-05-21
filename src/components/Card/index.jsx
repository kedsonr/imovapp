import React from "react";
import { Container, Description, Img, Itens } from "./styles";

const Card = () =>{
    return (
     <Container>
        <Img>
        <img src="https://images.unsplash.com/photo-1679939153947-4a12c7f85543?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
        </Img>

        <Description>
            <h4>Apartamento</h4>
            <Itens>
                <span></span>
                <span>R$ 2.400,00 / mês</span>
            </Itens>
        </Description>

     </Container>
    )
}
export default Card;
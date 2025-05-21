import React, { Fragment } from "react";
import { Header, Wrapper } from "./style";
import Card from "../../components/Card";

const Home = () => {
    return (
        <Fragment >
          <Header >
            <h2>Find the property of your dreams!</h2>
          </Header>

          <Wrapper>
            <Card/>
          </Wrapper>
        </Fragment>
    )
}

export default Home;
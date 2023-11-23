import React from "react";
import { Container, Flex, Stack, Box, Wrap, WrapItem, Button, Center } from "@chakra-ui/react";
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Container flex="1">
        
        <Center>
          <Link to='/criar-trilhas'>Cria trilha</Link>
          <Link to='/criar-eletivas'>Cria Eletiva </Link>
        </Center>
        <Center>
          <Link to='/exclui-trilhas'>Exclui trilha</Link>
          <Link to='/exclui-eletivas'>Exclui eletiva</Link>
        </Center>
      </Container>
      <Footer />
    </Flex>
  );
};

export default Home;

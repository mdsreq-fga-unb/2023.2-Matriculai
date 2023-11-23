import React from "react";
import { Container, Flex, Stack, Box, Wrap, WrapItem, Button, Center } from "@chakra-ui/react";
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Container flex="2">
        <Center>
          <Link to='/criar-trilhas'>Vasco</Link>
          <Link to='/criar-eletivas'>Vasco</Link>
        </Center>
        <Center>
          <Link to='/trilhas'>Vasco</Link>
          <Link to='/eletivas'>Vasco</Link>
        </Center>
      </Container>
      <Footer />
    </Flex>
  );
};

export default Home;

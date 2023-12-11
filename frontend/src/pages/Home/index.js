import React from "react";
import { Container, Flex, Stack, Box, Wrap, WrapItem, Button, Center } from "@chakra-ui/react";
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";
import { ChakraProvider } from "@chakra-ui/react";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <ChakraProvider>
      <Flex direction="column" minH="100vh">
      <Header />
      <Container flex="1">
        <Center>
        <Button colorScheme='blue' variant='ghost'>
        <Link to='/criar-trilha'>Criar trilha</Link>
        </Button>
        <Button colorScheme='blue' variant='ghost'>
        <Link to='/criar-eletiva'>Criar Eletiva </Link>
        </Button>
        <Button colorScheme='blue' variant='ghost'>
        <Link to='/excluir-trilhas'>Excluir trilha</Link>
        </Button>
        <Button colorScheme='blue' variant='ghost'>
        <Link to='/excluir-eletivas'>Excluir eletiva</Link>
        </Button>
        <Button colorScheme='blue' variant='ghost'>
        <Link to='/recommendations'>Recomendações</Link>
        </Button>
        </Center>
        <Center>
        </Center>
      </Container>
      <Footer />
    </Flex>
    </ChakraProvider>
    
  );
};

export default Home;

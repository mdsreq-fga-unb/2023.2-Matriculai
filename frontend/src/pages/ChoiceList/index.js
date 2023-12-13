import React from "react";
import { Container, Flex, Stack, Box, HStack, Text, Button, Center } from "@chakra-ui/react";
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";
import { ChakraProvider } from "@chakra-ui/react";
import * as C from "./styles";


import { Link } from "react-router-dom";

const ChoiceList = () => {
  return (
    <ChakraProvider>
      <Flex direction="column" minH="100vh">
      <Header />
      <Container flex="1" marginTop='10vh'>
      <C.titulo>
                    <Text
                      textAlign={"center"}
                      fontSize={"3xl"}
                      color={"#243A69"}
                      as={"b"}
                    >
                      Escolha uma opção para ver os alunos inscritos
                    </Text>
        </C.titulo>


        <Center marginTop='5vh'>
        <HStack>
            <Button colorScheme='facebook'>
            <Link to='/eletivas'>Eletivas</Link>
            </Button>
            <Button colorScheme='facebook'>
            <Link to='/trilhas'>Trilhas</Link>
            </Button>
        </HStack>
        
        </Center>
      </Container>
      <Footer />
    </Flex>
    </ChakraProvider>
    
  );
};

export default ChoiceList;

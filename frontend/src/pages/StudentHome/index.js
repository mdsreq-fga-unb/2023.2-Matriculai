import React from "react";
import { Container, Flex, Text, HStack, Wrap, WrapItem, Button, Center } from "@chakra-ui/react";
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";
import { ChakraProvider } from "@chakra-ui/react";
import * as C from "./styles";


import { Link } from "react-router-dom";

const StudentHome = () => {
  return (
    <ChakraProvider>
      <Flex direction="column" minH="100vh">
      <Header />
      <Container flex="1" marginTop='5vh'>
        <Center>
            <C.titulo>
                <Text
                textAlign={"center"}
                fontSize={"3xl"}
                color={"#243A69"}
                as={"b"}
                >
                Bem vindo, estudante!
                </Text>
            </C.titulo>
        </Center>
        <Center>
            <HStack marginTop='2vh'>
                <Button colorScheme='facebook'>
                <Link to='/eletivas'>Nova matrícula</Link>
                </Button>
                <Button colorScheme='facebook'>
                <Link to='/trilhas'>Visualizar grade</Link>
                </Button>
            </HStack>
        </Center>


            

      </Container>
      <Footer />
    </Flex>
    </ChakraProvider>
    
  );
};

export default StudentHome;

import React, { useState, useEffect } from 'react';
import { 
  Container, 
  Flex, 
  Text, 
  Box, 
  TableContainer, 
  Table, 
  Thead, 
  Tr, 
  Th,
  Td,
  Tbody,
  Button, 
  Center } from "@chakra-ui/react";
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";
import { ChakraProvider, Icon } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons"
import * as C from "./styles";
import axios from 'axios';
import { Link } from "react-router-dom";

const ListLearningPath = () => {
  const [trilhas, setTrilhas] = useState([]);

  useEffect(() => {
    async function fetchTrilhas() {
      try {
        const response = await axios.get('http://localhost:3001/learningpath/learningpath'); // Endpoint para buscar trilhas
        setTrilhas(response.data); // Define as trilhas na state 'trilhas'
      } catch (error) {
        console.error('Erro ao buscar trilhas:', error);
      }
    }
    fetchTrilhas();
  }, []);
  

  return (
    <ChakraProvider>
      <Flex direction="column" minH="100vh">
      <Header />
      <Container flex="1" marginTop='10vh'>
      <Center>
        <C.titulo>
            <Text
            textAlign={"center"}
            fontSize={"3xl"}
            color={"#243A69"}
            as={"b"}
            >
            Visualizar Matrículados
            </Text>
            </C.titulo>
      </Center>
      <TableContainer marginTop='5vh'>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th borderLeftRadius='1vh'textColor='#ffffff' backgroundColor="#243A69">Nome da trilha</Th>
                  <Th textColor='#ffffff' backgroundColor="#243A69">Ano letivo</Th>
                  <Th borderRightRadius='1vh'textColor='#ffffff' backgroundColor="#243A69"></Th>
                </Tr>
              </Thead>
              <Tbody>
                {trilhas.map((linha) => (
                  <Tr>
                    <Td textColor='#243A69'>{linha.name}</Td>
                    <Td textColor='#243A69'>{linha.school_year}</Td>
                    <Td><Icon as={ExternalLinkIcon}/><Link to={`/trilhas/${linha.id}`}></Link></Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
      </Container>
      <Footer />
    </Flex>
    </ChakraProvider>
    
  );
};

export default ListLearningPath;

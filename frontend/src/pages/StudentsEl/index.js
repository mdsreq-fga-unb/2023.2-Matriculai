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
import { ChakraProvider, Icon } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons"
import { useParams } from "react-router-dom";
import axios from 'axios';
import * as C from "../ListLearningPath/styles.js";
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const StudentsEl = () => {
  const { eletivaId } = useParams()
  const { userId} = useAuth();

  console.log("eletiva id:", typeof(eletivaId))
  console.log("eletiva id:", eletivaId)

  const [ eletiva, setEletiva ] = useState([])
  const [ students, setStudents ] = useState([]);

  useEffect(() => {
    async function fetchEletiva() {
      try {
        const response = await axios.post('http://localhost:3001/elective/find-elective', 
        {
          id: parseInt(eletivaId)
        }) 
        setEletiva(response.data)
      } catch (error) {
        console.log('Erro ao buscar eletiva:', error);
      }
    }
    async function fetchStudents() {
      try {
        const response = await axios.post('http://localhost:3001/elective/students', {eletivaNome: eletiva.name});
        setStudents(response.data);
        console.log(response)
      } catch (error) {
        console.error('Erro ao buscar estudantes:', error);
      }
    }
    fetchEletiva();
    fetchStudents()
  }, []);

  const studentsOrdenados = [...students].sort((a, b) => a.name.localeCompare(b.name));

  
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
            Matrículados em "{eletiva.name}"
            </Text>
            </C.titulo>
      </Center>
      <TableContainer marginTop='5vh'>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th borderLeftRadius='1vh'textColor='#ffffff' backgroundColor="#243A69">Nome do aluno</Th>
                  <Th textColor='#ffffff' backgroundColor="#243A69">Matrícula</Th>
                </Tr>
              </Thead>
              <Tbody>
                {studentsOrdenados.map((linha) => (
                  <Tr>
                    <Td textColor='#243A69'>{linha.name}</Td>
                    <Td textColor='#243A69'>{linha.registry}</Td>
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

export default StudentsEl;

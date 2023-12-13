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
import * as C from "../ListLearningPath/styles";
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";
import { Link } from "react-router-dom";

const StudentsLP = () => {
  const { trilhaId } = useParams()

  console.log("trilha id:", typeof(trilhaId))

  const [ trilha, setTrilha ] = useState([])
  const [ students, setStudents ] = useState([]);

  useEffect(() => {
    async function fetchTrilha() {
      try {
        const response = await axios.post('http://localhost:3001/learningpath/find_lp', {
          id: parseInt(trilhaId)
          }) 
        setTrilha(response.data)
      } catch (error) {
        console.log('Erro ao buscar trilha:', error);
      }
    }
    async function fetchStudents() {
      try {
        const response = await axios.post('http://localhost:3001/learningpathenrolment/students', {id: parseInt(trilhaId)});
        setStudents(response.data);
        console.log(response)
      } catch (error) {
        console.error('Erro ao buscar estudantes:', error);
      }
    }
    fetchTrilha();
    fetchStudents()
  }, []);

  const studentsOrdenados = [...students].sort((a, b) => a.student_name.localeCompare(b.student_name));

  
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
            Matrículados em "{trilha.name}"
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
                    <Td textColor='#243A69'>{linha.student_name}</Td>
                    <Td textColor='#243A69'>{linha.student_registry}</Td>
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

export default StudentsLP;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../Home/index';
import { ChakraProvider } from '@chakra-ui/react'

import { 
  Box,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Checkbox,
  TableContainer,
  Button
} from "@chakra-ui/react"
;

const ElectivesList = () => {
 

  const dados = [{"nomeTrilha": "teste", "anoTrilha": 2}]

  return (
    <ChakraProvider>
      <Header></Header>
      <Flex align="center" justifyContent="center">
        <Box width="60vh" marginTop="3vh" marginBottom="-9vh" paddingLeft="2vh" paddingRight="2vh" paddingTop="2vh" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading color= '#243A69'>Exclusão de Trilhas</Heading>
        </Box>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Nome da trilha</Th>
                  <Th>Ano letivo</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {dados.map((linha, index) => (
                  <Tr key={index}>
                    <Td>{linha.nomeTrilha}</Td>
                    <Td>{linha.anoTrilha}</Td>
                    <Td><Checkbox colorScheme='red' defaultChecked></Checkbox></Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Box display="flex" justifyContent="center">
          <Button color="#243A69" variant='solid' margin="2vh">Excluir</Button>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>

  );
};

export default TrilhasList;

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

const ExclusionEletivas = () => {
  const [eletivas, setEletivas] = useState([]);
  const [eletivasSelecionadas, setEletivasSelecionadas] = useState([]);

  useEffect(() => {
    async function fetchEletivas() {
      try {
        const response = await axios.get('http://localhost:3001/elective/electives'); // Endpoint para buscar trilhas
        setEletivas(response.data); // Define as trilhas na state 'trilhas'
      } catch (error) {
        console.error('Erro ao buscar trilhas:', error);
      }
    }
    fetchEletivas();
  }, []);

  const handleCheckboxChange = (id) => {
    const isSelected = eletivasSelecionadas.includes(id);

    if (isSelected) {
      // Se já estiver selecionado, remova da lista de selecionados
      setEletivasSelecionadas(eletivasSelecionadas.filter((eleId) => eleId !== id));
    } else {
      // Se não estiver selecionado, adicione à lista de selecionados
      setEletivasSelecionadas([...eletivasSelecionadas, id]);
    }

    console.log(eletivasSelecionadas)
  };

  const handleExcluirClick = async () => {
    try {
      // Enviar uma solicitação para excluir as eletivas selecionadas
      eletivasSelecionadas.map(async (eletiva)  => {
        await axios.delete('http://localhost:3001/elective/deleteElective', {
          data: { id: eletiva },
        });
      })
  
      // Atualizar a lista de eletivas após a exclusão
      const response = await axios.get('http://localhost:3001/elective/electives');
      setEletivas(response.data);
  
      // Limpar a lista de eletivas selecionadas
      setEletivasSelecionadas([]);
    } catch (error) {
      console.error('Erro ao excluir eletivas:', error);
    }
  };


  return (
    <ChakraProvider>
      <Header></Header>
      <Flex align="center" justifyContent="center">
        <Box width="100vh" marginTop="3vh" marginBottom="-9vh" paddingLeft="2vh" paddingRight="2vh" paddingTop="2vh" borderWidth={1} borderRadius={8} boxShadow="lg">
        <Box textAlign="center">
          <Heading color= '#243A69'>Exclusão de Eletivas</Heading>
        </Box>
          <TableContainer>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th>Nome da eletiva</Th>
                  <Th>Ano letivo</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {eletivas.map((linha) => (
                  <Tr>
                    <Td>{linha.name}</Td>
                    <Td>{linha.school_year}</Td>
                    <Td><Checkbox colorScheme='red' onChange={() => handleCheckboxChange(linha.id)}></Checkbox></Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Box display="flex" justifyContent="center">
          <Button color="#243A69" variant='solid' margin="2vh" onClick={handleExcluirClick}>Excluir eletivas selecionadas</Button>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>

  );
};

export default ExclusionEletivas;

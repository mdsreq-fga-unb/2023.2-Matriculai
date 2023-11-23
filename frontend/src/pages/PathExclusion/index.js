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

const TrilhasList = () => {
  const [trilhas, setTrilhas] = useState([]);
  const [trilhasSelecionadas, setTrilhasSelecionadas] = useState([]);

  // Carregar trilhas do backend ao carregar o componente
  useEffect(() => {
    async function fetchTrilhas() {
      try {
        const response = await axios.get('http://localhost:3000/learningpath/learningpath'); // Endpoint para buscar trilhas
        setTrilhas(response.data); // Define as trilhas na state 'trilhas'
      } catch (error) {
        console.error('Erro ao buscar trilhas:', error);
      }
    }
    fetchTrilhas();
  }, []);

  // Função para marcar/desmarcar trilha selecionada
  const handleCheckboxChange = (id) => {
    const isSelected = trilhasSelecionadas.includes(id);

    if (isSelected) {
      // Se já estiver selecionado, remova da lista de selecionados
      setTrilhasSelecionadas(trilhasSelecionadas.filter((eleId) => eleId !== id));
    } else {
      // Se não estiver selecionado, adicione à lista de selecionados
      setTrilhasSelecionadas([...trilhasSelecionadas, id]);
    }

    console.log(trilhasSelecionadas)
  };


  // Função para excluir trilhas selecionadas
  const handleExcluirClick = async () => {
    try {
      // Enviar uma solicitação para excluir as eletivas selecionadas
      trilhasSelecionadas.map(async (eletiva)  => {
        await axios.delete('http://localhost:3001/elective/deleteElective', {
          data: { id: eletiva },
        });
      })
  
      // Atualizar a lista de eletivas após a exclusão
      const response = await axios.get('http://localhost:3000/learningpath/deleteLearningPaths');
      setTrilhas(response.data);
  
      // Limpar a lista de eletivas selecionadas
      setTrilhasSelecionadas([]);
    } catch (error) {
      console.error('Erro ao excluir trilhas:', error);
    }
  };



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
                {trilhas.map((linha, index) => (
                  <Tr key={index}>
                    <Td>{linha.nomeTrilha}</Td>
                    <Td>{linha.anoTrilha}</Td>
                    <Td><Checkbox colorScheme='red' onChange={() => handleCheckboxChange(linha.id)}></Checkbox></Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          <Box display="flex" justifyContent="center">
          <Button color="#243A69" variant='solid' margin="2vh" onClick={handleExcluirClick}>Excluir trilha selecionadas</Button>
          </Box>
        </Box>
      </Flex>
    </ChakraProvider>

  );
};

export default TrilhasList;

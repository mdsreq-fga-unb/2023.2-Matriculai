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
        const response = await axios.get('http://localhost:3000/api/trilhas'); // Endpoint para buscar trilhas
        setTrilhas(response.data); // Define as trilhas na state 'trilhas'
      } catch (error) {
        console.error('Erro ao buscar trilhas:', error);
      }
    }
    fetchTrilhas();
  }, []);

  // Função para marcar/desmarcar trilha selecionada
  const toggleSelecionada = (id) => {
    const isSelected = trilhasSelecionadas.includes(id);
    if (isSelected) {
      const updatedSelection = trilhasSelecionadas.filter((trilhaId) => trilhaId !== id);
      setTrilhasSelecionadas(updatedSelection);
    } else {
      setTrilhasSelecionadas([...trilhasSelecionadas, id]);
    }
  };

  // Função para excluir trilhas selecionadas
  const handleExcluirTrilhas = async () => {
    try {
      await axios.delete('http://localhost:3000/api/deleteLearningPaths', {
        data: { id: trilhasSelecionadas }, // Envia os IDs das trilhas selecionadas para exclusão
      });
      // Atualiza a lista de trilhas após a exclusão
      const updatedTrilhas = trilhas.filter((trilha) => !trilhasSelecionadas.includes(trilha.id));
      setTrilhas(updatedTrilhas);
      setTrilhasSelecionadas([]); // Limpa as trilhas selecionadas após a exclusão
      alert('Trilhas excluídas com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir trilhas:', error);
    }
  };

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

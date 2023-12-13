import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChakraProvider, useDisclosure } from '@chakra-ui/react'
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";

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
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Container,
  Alert,
  AlertIcon
} from "@chakra-ui/react"
;

const Recommendations = () => {
  const [trilhas, setTrilhas] = useState([]);
  const [trilhasSelecionadas, setTrilhasSelecionadas] = useState([]);
  
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const [showAlert, setShowAlert] = useState(false);
  // Carregar trilhas do backend ao carregar o componente
  useEffect(() => {
    async function fetchTrilhas() {
      try {
        const response = await axios.get('https://backend-matriculai.vercel.app/learningpath/learningpath'); // Endpoint para buscar trilhas
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
        await axios.delete('https://backend-matriculai.vercel.app/learningpath/deleteLearningPaths', {
          data: { id: eletiva },
        });
      })
  
      // Atualizar a lista de eletivas após a exclusão
      const response = await axios.get('https://backend-matriculai.vercel.app/learningpath/learningpath');
      setTrilhas(response.data);
  
      // Limpar a lista de eletivas selecionadas
      setTrilhasSelecionadas([]);
      onClose();
      setTimeout(() => {
        window.location.reload();;
      }, 2000);
      setShowAlert(true);
    } catch (error) {
      console.error('Erro ao excluir trilhas:', error);
    }
  };



  return (
    <ChakraProvider>
    <Flex direction="column" minH="100vh">
    <Header />
    <Container flex="1">
    <Box width="100%" marginTop="10vh" marginBottom="2vh" paddingLeft="2vh" paddingRight="2vh" paddingTop="2vh" borderWidth={1} borderRadius={8} boxShadow="lg">
      <Box textAlign="center">
        <Heading color= '#243A69'>Exclusão de Trilhas</Heading>
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
              {trilhas.map((linha) => (
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
        <Button colorScheme='facebook' variant='solid' margin="2vh" onClick={onOpen} isDisabled={trilhasSelecionadas.length === 0}>Excluir trilhas selecionadas</Button>
            <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                Excluir Trilhas
              </AlertDialogHeader>

              <AlertDialogBody>
                Você tem certeza? Essa ação não pode ser desfeita.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancelar
                </Button>
                <Button colorScheme='red' onClick={handleExcluirClick} ml={3}>
                  Excluir
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
        </Box>
      </Box>
      {showAlert && (<Box>
        <Alert status='success' variant='subtle'>
        <AlertIcon />
        Trilhas excluídas com sucesso!
        </Alert>
      </Box>)}
    </Container>
    <Footer />
  </Flex>
  </ChakraProvider>

  );
};

export default Recommendations;

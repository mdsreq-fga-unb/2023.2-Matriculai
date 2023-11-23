import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";
import { ChakraProvider, useDisclosure} from '@chakra-ui/react'

import { 
  Center, 
  Link,
  Box,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Tr,
  Th,
  Td,
  Checkbox,
  TableContainer,
  Button,
  Container,
  Alert,
  AlertIcon
} from "@chakra-ui/react"
;

const ExclusionEletivas = () => {
  const [eletivas, setEletivas] = useState([]);
  const [eletivasSelecionadas, setEletivasSelecionadas] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const [showAlert, setShowAlert] = useState(false);


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
      onClose();
      setTimeout(() => {
        window.location.reload();;
      }, 2000);
      setShowAlert(true);
    } catch (error) {
      console.error('Erro ao excluir eletivas:', error);
    }
  };


  return (
    <ChakraProvider>
      <Flex direction="column" minH="100vh">
      <Header />
      <Container flex="1">
      <Box width="100%" marginTop="10vh" marginBottom="2vh" paddingLeft="2vh" paddingRight="2vh" paddingTop="2vh" borderWidth={1} borderRadius={8} boxShadow="lg">
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
          <Button color="#243A69" variant='solid' margin="2vh" onClick={onOpen} >Excluir eletivas selecionadas</Button>
              <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
          >
            <AlertDialogOverlay>
              <AlertDialogContent>
                <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                  Excluir Eletivas
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
          Eletivas excluídas com sucesso!
          </Alert>
        </Box>)}
      </Container>
      <Footer />
    </Flex>
    </ChakraProvider>
    
  );
};

export default ExclusionEletivas;
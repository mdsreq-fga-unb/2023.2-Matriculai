import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ChakraProvider, useDisclosure } from '@chakra-ui/react';
import Header from "../../components/Header/index.js";
import Footer from "../../components/Footer/index.js";

import { 
  Box,
  Flex,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Button,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Container,
  Alert,
  AlertIcon,
  Select
} from "@chakra-ui/react";

const Recommendations = () => {
  const [trilhas, setTrilhas] = useState([]);
  const [eletivasPorTrilha, setEletivasPorTrilha] = useState({});
  const [descricaoTrilha, setDescricaoTrilha] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();

  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    async function fetchTrilhas() {
      try {
        const response = await axios.get('http://localhost:3001/learningpath/learningpath');
        setTrilhas(response.data);

        // Mapear as eletivas por trilha para posterior uso
        const eletivasMap = {};
        response.data.forEach((trilha) => {
          eletivasMap[trilha.id] = trilha.related_eletivas || [];
        });
        setEletivasPorTrilha(eletivasMap);
      } catch (error) {
        console.error('Erro ao buscar trilhas:', error);
      }
    }
    fetchTrilhas();
  }, []);

  // Função para abrir o modal e exibir a descrição da trilha
  const handleVerDescricaoClick = (descricao) => {
    setDescricaoTrilha(descricao);
    onOpen();
  };

  return (
    <ChakraProvider>
      <Flex direction="column" minH="100vh">
        <Header />
        <Container flex="1">
          <Box
            width="100%"
            marginTop="10vh"
            marginBottom="2vh"
            paddingLeft="2vh"
            paddingRight="2vh"
            paddingTop="2vh"
            borderWidth={1}
            borderRadius={8}
            boxShadow="lg"
          >
            <Box textAlign="center">
              <Heading color="#243A69">Disciplinas disponíveis</Heading>
            </Box>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Nome da trilha</Th>
                  <Th>Descrição</Th>
                  <Th>Eletivas relacionadas</Th>
                </Tr>
              </Thead>
              <Tbody>
                {trilhas.map((linha) => (
                  <Tr key={linha.id}>
                    <Td>{linha.name}</Td>
                    <Td>
                      <Button
                        colorScheme="none"
                        backgroundColor="#243A69"
                        size="sm"
                        onClick={() => handleVerDescricaoClick(linha.description)}
                      >
                        Ver Descrição
                      </Button>
                    </Td>
                    <Td>
                      <Select>
                        {eletivasPorTrilha[linha.id]?.map((eletiva) => (
                          <option key={eletiva.id}>{eletiva.name}</option>
                        ))}
                      </Select>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            {/* Modal de Ver Descrição */}
            <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose} isCentered>
              <AlertDialogOverlay
                style={{
                  backdropFilter: "blur(4px)",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AlertDialogContent>
                  <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    Descrição da Trilha
                  </AlertDialogHeader>
                  <AlertDialogBody>
                    {descricaoTrilha}
                  </AlertDialogBody>
                  <AlertDialogFooter>
                    <Button ref={cancelRef} onClick={onClose}>
                      Fechar
                    </Button>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialogOverlay>
            </AlertDialog>
          </Box>
          {showAlert && (
            <Box>
              <Alert status="success" variant="subtle">
                <AlertIcon />
                Trilhas excluídas com sucesso!
              </Alert>
            </Box>
          )}
        </Container>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};

export default Recommendations;

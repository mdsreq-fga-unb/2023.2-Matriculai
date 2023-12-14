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

const EnrollmentRequest = () => {
  const [eletivas, setEletivas] = useState([]);
  const [eletivasPorTrilha, setEletivasPorTrilha] = useState({});
  const [descricaoEletiva, setDescricaoEletiva] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    async function fetchEletivas() {
      try {
        const response = await axios.get('http://localhost:3001/eletivas');
        setEletivas(response.data);

        const eletivasMap = {};
        response.data.forEach((eletiva) => {
          eletivasMap[eletiva.id] = eletiva.related_trilhas || [];
        });
        setEletivasPorTrilha(eletivasMap);
      } catch (error) {
        console.error('Erro ao buscar eletivas:', error);
      }
    }
    fetchEletivas();
  }, []);

  const getStatus = (eletivaId) => {
    return eletivaId % 2 === 0 ? 'Homologado' : 'Não homologado';
  };

  const handleVerDescricaoClick = (descricao) => {
    setDescricaoEletiva(descricao);
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
              <Heading color="#243A69">Eletivas Disponíveis</Heading>
            </Box>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Disciplina</Th>
                  <Th>Status</Th>
                  <Th>Eletivas relacionadas</Th>
                </Tr>
              </Thead>
              <Tbody>
                {eletivas.map((eletiva) => (
                  <Tr key={eletiva.id}>
                    <Td>{eletiva.name}</Td>
                    <Td>{getStatus(eletiva.id)}</Td>
                    <Td>
                      <Select>
                        {eletivasPorTrilha[eletiva.id]?.map((trilha) => (
                          <option key={trilha.id}>{trilha.name}</option>
                        ))}
                      </Select>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
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
                    Descrição da Eletiva
                  </AlertDialogHeader>
                  <AlertDialogBody>
                    {descricaoEletiva}
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
                Eletivas carregadas com sucesso!
              </Alert>
            </Box>
          )}
        </Container>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
};

export default EnrollmentRequest;
